import React from "react";
import { MoonIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import Link from "next/link";

function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="   flex  shadow-xl justify-between px-8  md:px-14 py-5 mb-8 items-center  ">
        <Link href={"/"}>
          <a>
            <div className="  text-md md:text-xl font-bold  ">
              Where in the world?
            </div>
          </a>
        </Link>
        <div
          className="flex items-center gap-1 cursor-pointer px-4 py-2 rounded hover:text-gray-600 font-semibold text-base md:text-lg"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <MoonIcon className=" w-[1.2rem]  " />
          {/* <span className=" text-base md:text-lg text-black font-semibold "> */}
          Dark Mode
          {/* </span> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
