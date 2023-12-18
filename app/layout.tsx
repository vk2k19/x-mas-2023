import type { Metadata } from "next";
import { Rye, Tourney, Averia_Libre } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import BgAudio from "./audio";
config.autoAddCss = false;

const rye = Rye({ subsets: ["latin"], weight: "400" });
const web = Averia_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "X-MAS 2023",
  description: "X-MAS Nice and Naughty",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={classNames(
          web.className,
          "max-w-3xl min-h-screen mx-auto flex flex-col gap-8"
        )}
      >
        <header className="md:flex item-center justify-center pt-8">
          <h1
            className={classNames(
              rye.className,
              "text-center text-5xl md:text-6xl"
            )}
          >
            <BgAudio />
            Merry Christmas!
          </h1>
        </header>
        <div className="text-right"></div>
        {children}
        <footer className="flex items-center justify-center">
          <p
            className={classNames(
              rye.className,
              "py-2 text-center text-sm capitalize"
            )}
          >
            Secret santa 2023.
          </p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
