import React from "react";
import { MoonIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";

function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className=" flex  shadow justify-between px-8  md:px-14 py-5 mb-8  dark:bg-['#2b3945']">
        <div className=" text-base md:text-xl font-bold">
          Where in the world?
        </div>
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <MoonIcon className=" w-[1.2rem]  " />
          <span className=" text-base md:text-lg text-gray-800 font-semibold ">
            Dark Mode
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
