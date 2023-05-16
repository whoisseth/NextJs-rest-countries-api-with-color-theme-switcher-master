/** @format */

import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import clsx from "clsx";

function Navbar() {
  const [animationParent] = useAutoAnimate();
  let { theme, setTheme, resolvedTheme } = useTheme();
  console.log(theme);
  const smFont = "text-xl ";
  const lgFont = " md:text-2xl";
  return (
    // bg-[hsl(207,26%,17%)]
    <>
      {" "}
      {/* resolvedTheme-{resolvedTheme} */}
      <div
        className={`sticky dark:shadow-2xl   top-0  z-50   flex w-full  shadow-xl justify-between px-8  dark:bg-[hsl(207,26%,17%)]
          md:px-14 py-5  items-center mb-8  transition-all `}
      >
        <Link href={"/"}>
          <a>
            <div className={clsx("font-bold", smFont, lgFont)}>
              Where in the world?
            </div>
          </a>
        </Link>
        <div
          className="flex items-center gap-1 cursor-pointer p-2 rounded-full md:rounded-md bg-gray-500 md:bg-transparent md:px-4 md:py-2   hover:opacity-50   md:text-lg font  transition duration-500 ease-in-out opacity-75 "
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        >
          <div
            ref={animationParent}
            className="flex items-center justify-center
          "
          >
            {resolvedTheme === "light" ? (
              <BsFillMoonFill className={clsx(smFont, lgFont)} />
            ) : (
              <BsFillSunFill className={clsx(smFont, lgFont)} />
            )}
          </div>

          <span
            className={` ${smFont} ${lgFont}  ml-1  font-semibold  hidden md:block  `}
          >
            {resolvedTheme === "light" ? "Dark " : "Light "}
            Mode
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
