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

  const reset = () => {};
  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball"></div>;
    } else {
      return (
        <button className="start" onClick={startGame}>
          Start
        </button>
      );
    }
  };
  const handleKeyPress = useCallback(
    (event) => {
      if (event.keyCode === 37) {
        setX(x - 5);
      } else if (event.keyCode === 38) {
        setY(y + 5);
      } else if (event.keyCode === 39) {
        setX(x + 5);
      } else if (event.keyCode === 40) {
        setY(y - 5);
      }
      setBallPosition({ left: x + "px", top: y + "px" });
      console.log("clicked");
    },
    [x, y]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

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
