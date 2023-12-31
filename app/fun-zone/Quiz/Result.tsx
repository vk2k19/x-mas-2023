"use client";

import { questions } from "./data";
import { Rye } from "next/font/google";
import classNames from "classnames";

const maxPoints = questions.reduce((acc, q) => {
  return acc + Math.max(...q.answers.flatMap((a) => a.score));
}, 0);

const getText = (score: number) => {
  if (score >= maxPoints * 0.75) {
    return "very nice";
  }
  if (score >= maxPoints * 0.5) {
    return "nice";
  }
  if (score >= maxPoints * 0.25) {
    return "naughty";
  }
  return "very naughty";
};

const rye = Rye({ subsets: ["latin"], weight: "400" });

export const Result = ({ score }: { score: number }) => (
  <div data-testid="results">
    <p className="font-bold text-2xl uppercase md:text-center">
      This year you were:
    </p>
    <h2
      className={classNames(
        rye.className,
        "text-4xl uppercase text-center pt-4"
      )}
    >
      {getText(score)}
    </h2>
    <p className="text-right pt-6 font-bold md:pt-10">- Elves</p>
    <p className="text-xs py-6 italic text-black md:pt-10 dark:text-zinc-400 dark:md:text-black">
      *Got: <b>{score}</b> out of <strong>{maxPoints}</strong>
    </p>
  </div>
);
