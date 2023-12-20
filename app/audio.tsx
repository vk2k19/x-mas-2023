"use client";

import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

const BgAudio = () => {
  const [paused, setPaused] = useState(true);
  const audioBox = useRef(null);

  useEffect(() => {
    try {
      if (audioBox.current) {
        console.log("elem", audioBox.current);
        if (!paused) {
          (audioBox.current as any).play();
        } else {
          (audioBox.current as any).pause();
        }
      }
    } catch (e) {
      console.log("error");
    }
  }, [paused]);

  return (
    <div className="inline-flex print:hidden relative w-8 h-8 md:w-10 md:h-10">
      <button
        onClick={() => setPaused(!paused)}
        aria-label="play background music"
        className={classNames(
          "text-base bg-white border-rose-800 border-2 rounded-3xl w-8 h-8 md:w-10 md:h-10 lg:hover:bg-rose-100 lg:hover:border-rose-900 mr-2",
          "dark:bg-rose-700 dark:border-white ",
          "absolute top-0",
          {
            "animate-spin duration-300 transition-transform": !paused,
          }
        )}
      >
        <FontAwesomeIcon icon={faMusic} />
        <div
          className={classNames(
            "absolute top-[13px] left-[2px] h-0 w-6 md:w-8 md:top-[18px] rotate-45 border-rose-800 bg-rose-800 border-[1px] rounded-xl",
            "dark:border-white dark:bg-white",
            {
              hidden: !paused,
            }
          )}
        ></div>
      </button>
      <audio
        onPlay={() => setPaused(false)}
        muted={paused}
        loop
        id="bg-music"
        ref={audioBox}
        controls
        className="hidden"
      >
        <source
          src="/x-mas-2023/music/enchanted-chimes-177906.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BgAudio;
