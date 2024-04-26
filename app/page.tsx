"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [timer, setTime] = useState<number>(10);
  const [increase, setIncrease] = useState<number>(0);
  const [endGame, setEndGame] = useState<boolean>(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (timer > 0) {
  //       setTime(timer - 1);
  //     } else {
  //       setEndGame(true);
  //     }
  //   }, 1000);
  // });

  const handleIncreaseClick = () => {
    setIncrease(increase + 1);
  };

  return (
    <main className="h-screen pt-10 flex flex-col justify-start items-center gap-6">
      {endGame ? (
        <>
          <h1>your score is-{increase}</h1>
          <button>Reset Game</button>
        </>
      ) : (
        <>
          <h1>Click Counter Game</h1>
          <p className="flex items-center text-6xl text-sky-600">
            timer -{" "}
            <span className="countdown font-mono text-6x">
              <span style={{ "--value": timer } as React.CSSProperties}></span>
            </span>
          </p>
          <h3>score - {increase}</h3>
          <button onClick={handleIncreaseClick}>Click it</button>
        </>
      )}
    </main>
  );
}
