"use client";
import { useState } from "react";
import { Quiz } from "../Quiz/Quiz";
import classNames from "classnames";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(2);

  return (
    <div className="flex flex-col flex-1 items-start justify-start md:px-8 w-full dark:md:text-rose-600">
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
          "md:from-rose-50 md:bg-gradient-to-b md:from-0 md:via-white md:to-white md:via-[50px] md:pt-12 w-full  block"
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
          "md:from-rose-50 md:bg-gradient-to-b md:from-0 md:via-white md:to-white md:via-[50px] md:pt-12 w-full hidden md:block"
        )}
      >
        <iframe
          height="600"
          className="block mx-auto w-full bg-white p-4 pt-0"
          title="Easy crossword puzzle"
          src="https://crosswordlabs.com/embed/merry-x-mas-8"
        ></iframe>
      </section>
    </div>
  );
};

export default Tabs;
