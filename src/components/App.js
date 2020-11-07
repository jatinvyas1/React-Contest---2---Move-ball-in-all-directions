import React, { Component, useState, useEffect, useCallback } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  const startGame = () => {
    setRenderBall(true);
  };

  function reset() {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({ left: "0px", top: "0px" });
  }
  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={startGame}>
          Start
        </button>
      );
    }
  };
  const handleKeyPress = (event) => {
    if (event.keyCode === 37) {
      setX(x - 5);
    } else if (event.keyCode === 38) {
      setY(y - 5);
    } else if (event.keyCode === 39) {
      setX(x + 5);
    } else if (event.keyCode === 40) {
      setY(y + 5);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  });
  useEffect(() => {
    setBallPosition({
      left: x + "px",
      top: ballPosition.top
    });
  }, [x]);
  useEffect(() => {
    setBallPosition({
      left: ballPosition.left,
      top: y + "px"
    });
  }, [y]);

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
