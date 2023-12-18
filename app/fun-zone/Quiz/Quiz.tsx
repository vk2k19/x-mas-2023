"use client";
import { useEffect, useState } from "react";
import { questions } from "./data";
import Image from "next/image";
import { Game } from "./Game";
import { Result } from "./Result";

export const Quiz = () => {
  const [loading, setIsLoading] = useState(true);
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const oldScore = window.localStorage.getItem("score") || "0";
    const lastQuestion = window.localStorage.getItem("question") || "0";
    setScore(parseInt(oldScore));
    setQuestion(parseInt(lastQuestion));
    setIsLoading(false);
  }, []);

  return (
    <section className={"relative overflow-hidden w-full transition-all"}>
      <Image
        src="/borders/flowers.gif"
        alt=""
        className="object-contain w-full hidden md:block"
        width="643"
        height="500"
      />
      <div className="md:absolute md:top-[30%] md:left-[15%] z-10 md:max-w-[65%] w-full px-4">
        {!loading && questions.length > question && (
          <Game
            question={questions[question]}
            answerCallback={(value: number) => {
              setScore(value + score);
              window.localStorage.setItem("score", `${score}`);
              window.localStorage.setItem("question", `${question + 1}`);
              setQuestion(question + 1);
            }}
          />
        )}
        {!loading && questions.length <= question && <Result score={score} />}
      </div>
    </section>
  );
};
