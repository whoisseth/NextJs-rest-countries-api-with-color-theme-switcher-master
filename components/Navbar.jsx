import React from "react";
import { MoonIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import Link from "next/link";

function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className=" dark:bg-red-500  flex  shadow justify-between px-8  md:px-14 py-5 mb-8   ">
        <Link href={"/"}>
          <a>
            <div className=" text-base md:text-xl font-bold ">
              Where in the world?
            </div>
          </a>
        </Link>
        <div
          className="flex items-center gap-1 cursor-pointer px-4 py-2 rounded hover:bg-gray-200"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <MoonIcon className=" w-[1.2rem]  " />
          <span className=" text-base md:text-lg text-black font-semibold ">
            Dark Mode
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
