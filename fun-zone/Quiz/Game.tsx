"use client";
import { faCircle, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export type GameProps = {
  question: {
    id: number;
    label: string;
    answers: {
      id: number;
      label: string;
      score: number;
    }[];
  };
  answerCallback: (value: number) => void;
};

export const Game = ({ question, answerCallback }: GameProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    setSelected(null);
  }, [question]);

  return (
    !!question && (
      <>
        <h3 className="text-lg">
          <b>Question: </b>
          {question.label}
        </h3>
        <ul className="mt-2">
          {question.answers.map((answer) => {
            return (
              <li data-testid={answer.id} key={answer.id}>
                <button
                  className="text-md font-bold"
                  onClick={() => {
                    setSelected(answer.id);
                    answerCallback(answer.score);
                  }}
                >
                  <FontAwesomeIcon
                    icon={selected === answer.id ? faCircle : faCircleDot}
                    className="mr-1"
                  />
                  {answer.label}
                </button>
              </li>
            );
          })}
        </ul>
      </>
    )
  );
};
