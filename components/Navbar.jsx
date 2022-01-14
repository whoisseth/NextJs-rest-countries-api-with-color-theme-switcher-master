import React from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import Link from "next/link";
// import "../style/navbar.css";

function Navbar() {
  const { theme, setTheme } = useTheme();
  // const smFont = "text-base";
  const smFont = "text-xl ";
  const lgFont = " md:text-2xl";
  return (
    <>
      <div
        className={`font nav  z-50   flex w-full  shadow-xl justify-between px-8  md:px-14 py-5  items-center mb-8    `}
      >
        <Link href={"/"}>
          <a>
            <div className={`${smFont} ${lgFont}  font-bold  `}>
              Where in the world?
            </div>
          </a>
        </Link>
        <div
          className='flex items-center gap-1 cursor-pointer p-2 rounded-full md:rounded-md bg-gray-500 md:bg-transparent md:px-4 md:py-2   hover:opacity-50   md:text-lg font  transition duration-500 ease-in-out opacity-75 '
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <BsFillMoonFill className={`${smFont}  ${lgFont} `} />

          <span
            className={` ${smFont} ${lgFont}  ml-1  font-semibold inline-block hidden md:block  `}
          >
            {theme === "light" ? "Dark " : "Light "}
            Mode
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
