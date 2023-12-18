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
  return (
    !!question && (
      <form>
        <h3 className="text-lg">
          <b>Question: </b>
          {question.label}
        </h3>
        <ul className="mt-2">
          {question.answers.map((answer) => {
            return (
              <li data-testid={answer.id} key={answer.id}>
                <label className="text-md">
                  <input
                    type="radio"
                    name={question.label}
                    value={answer.score}
                    className="m-2"
                    onClick={() => answerCallback(answer.score)}
                  />
                  {answer.label}
                </label>
              </li>
            );
          })}
        </ul>
      </form>
    )
  );
};
