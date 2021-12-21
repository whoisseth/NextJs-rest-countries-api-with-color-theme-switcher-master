import React from "react";
import Image from "next/image";
import { MoonIcon } from "@heroicons/react/outline";

function Navbar() {
  return (
    <>
      <div className=" flex  shadow justify-between px-14 py-5 mb-8 ">
        <div className=" text-base md:text-xl font-bold">
          Where in the world?
        </div>
        <div className="flex items-center gap-1 cursor-pointer  ">
          <MoonIcon className=" w-[1.2rem]  " />
          <span className=" text-base md:text-lg text-gray-800 font-semibold">
            Dark Mode
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
