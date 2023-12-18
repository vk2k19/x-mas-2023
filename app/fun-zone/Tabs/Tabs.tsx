"use client";
import { useState } from "react";
import { Quiz } from "../Quiz/Quiz";
import classNames from "classnames";

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState(2);

  return (
    <main className="flex flex-col flex-1 items-start justify-start md:px-8 w-full">
      <ul className="justify-start items-start w-full gap-1 hidden md:flex">
        <li>
          <button
            onClick={() => setSelectedTab(2)}
            disabled={selectedTab === 2}
            className={classNames("px-4 py-1 rounded-t-lg font-bold", {
              "bg-rose-50 shadow-inner": selectedTab === 2,
              "bg-rose-600 text-white shadow-inner": selectedTab !== 2,
            })}
          >
            Solve puzzle
          </button>
        </li>
        <li>
          <button
            onClick={() => setSelectedTab(1)}
            disabled={selectedTab === 1}
            className={classNames("px-4 py-1 rounded-t-lg font-bold", {
              "bg-rose-50 shadow-inner": selectedTab === 1,
              "bg-rose-600 text-white shadow-inner": selectedTab !== 1,
            })}
          >
            Were you nice or naughty?
          </button>
        </li>
      </ul>
      <section
        data-testid="quiz"
        className={classNames(
          {
            "md:hidden": selectedTab !== 1,
          },
          "from-rose-50 bg-gradient-to-b from-0 via-white to-white via-[50px] pt-12 w-full block"
        )}
      >
        <Quiz />
      </section>
      <section
        data-testid="puzzle"
        className={classNames(
          {
            "md:hidden": selectedTab !== 2,
          },
          "from-rose-50 bg-gradient-to-b from-0 via-white to-white via-[50px] pt-12 w-full hidden md:block"
        )}
      >
        <iframe
          height="600"
          className="block mx-auto w-full bg-white p-4 pt-0"
          title="Easy crossword puzzle"
          src="https://crosswordlabs.com/embed/merry-x-mas-8"
        ></iframe>
      </section>
    </main>
  );
}
