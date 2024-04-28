"use client";

import { useEffect, useState } from "react";

const Game = () => {
  const [timer, setTime] = useState<number>(10);
  const [increase, setIncrease] = useState<number>(0);
  const [endGame, setEndGame] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (timer > 0) {
        setTime(timer - 1);
      } else {
        setEndGame(true);
      }
    }, 1000);
  });

  const handleIncreaseClick = () => {
    setIncrease(increase + 1);
  };

  const handleRestartGame = () => {
    setEndGame(false);
    setTime(10);
    setIncrease(0);
  };

  return (
    <div className="h-screen pt-10 flex flex-col justify-start items-center gap-7">
      {endGame ? (
        <>
          <h1 className="text-6xl text-sky-800">your score is-{increase}</h1>
          <button
            className="btn btn-outline btn-accent"
            onClick={handleRestartGame}
          >
            Restart Game?
          </button>
        </>
      ) : (
        <>
          <h1 className="text-6xl text-sky-800">Click Counter Game</h1>
          <p className="flex items-center text-5xl text-sky-700">
            timer -{" "}
            <span className="countdown font-mono text-6x">
              <span style={{ "--value": timer } as React.CSSProperties}></span>
            </span>
          </p>
          <h3 className="text-4xl text-sky-600">score - {increase}</h3>
          <button className="btn btn-info" onClick={handleIncreaseClick}>
            Click it
          </button>
        </>
      )}
    </div>
  );
};

export default Game;
