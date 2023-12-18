import Image from "next/image";
import { Rye } from "next/font/google";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCircleCheck,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

const rye = Rye({ subsets: ["latin"], weight: "400" });

const Banner = () => (
  <main className="flex flex-col flex-1 items-start justify-start md:px-8">
    <div className="flex relative w-full overflow-hidden bg-black">
      <Image
        src="/x-mas-2023/bg.jpg"
        width="1024"
        height="1024"
        alt=""
        className="absolute left-0 top-0 object-contain opacity-40"
      />
      <div className="z-10 w-full gap-8 h-[620px]">
        <div className="flex flex-col z-10 px-4 pt-8 w-full gap-8">
          <h1
            className={classNames(
              rye.className,
              "text-5xl text-white drop-shadow-[0_1px_1px_#b31312]"
            )}
          >
            Here's Santa's little surprise from North pole
          </h1>
        </div>
        <div className="flex flex-col z-10 px-4 pt-24 w-1/3 gap-8 h-full">
          <p className="text-2xl text-white drop-shadow-[0_1px_1px_#b31312]">
            <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
            Have fun with simple crossword puzzle
          </p>
          <p className="text-2xl text-white drop-shadow-[0_1px_1px_#b31312]">
            <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
            And see if you made to nice list.
          </p>
          <p className="text-2xl text-white drop-shadow-[0_1px_1px_#b31312] pt-32">
            <a href="https://vk2k19.github.io/x-mas-2023" target="_blank">
              <FontAwesomeIcon icon={faLink} className="mr-2" />
              Visit Link{" "}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="ml-2"
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  </main>
);

export default Banner;

