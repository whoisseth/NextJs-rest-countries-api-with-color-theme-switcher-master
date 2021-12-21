import React from "react";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/outline";

const TextGray = " text-gray-500 font-semibold";
const FontSemibold = "font-semibold ";
const CartImg = ({ src, width, quality }) => {
  return `https://flagcdn.com/${src}?w=${width}&q=${quality || 75}`;
};
function CartFullPage(props) {
  return (
    <>
      <button>
        <div className="ml-14 mt-8 px-6  py-1 inline-block rounded shadow font-semibold  hover:shadow-xl">
          <ArrowLeftIcon className="w-4 h-4  inline-block mr-2 " />
          <span className="text-gray-600">Back</span>
        </div>
      </button>
      <div className="mt-16   flex gap-24  mx-14">
        <div className=" ">
          <Image
            loader={CartImg}
            src="be.svg"
            alt="Picture of the Country"
            width={500}
            height={320}
          />
        </div>
        {/* Right div */}
        <div className="">
          <h1 className="font-bold text-3xl">Belgium</h1>
          <div className="flex mt-5 gap-20   ">
            {/* left div */}
            <div className=" flex flex-col gap-2  ml-auo">
              <div>
                <span className={FontSemibold}>Native Name</span>
                <span className={TextGray}>: Belgie</span>
              </div>
              <div>
                <span className={FontSemibold}>Population</span>
                <span className={TextGray}>: 81,770,900</span>
              </div>
              <div>
                <span className={FontSemibold}>Region</span>
                <span className={TextGray}>: Europe</span>
              </div>
              <div>
                <span className={FontSemibold}>Sub Region</span>
                <span className={TextGray}>: Western Europe</span>
              </div>
              <div>
                <span className={FontSemibold}>Capital</span>
                <span className={TextGray}>: Brussels</span>
              </div>
            </div>
            {/* left div */}
            <div className="  ml-auto block">
              <div>
                <span className={FontSemibold}>Top Level Doamin</span>
                <span className={TextGray}>: be</span>
              </div>
              <div>
                <span className={FontSemibold}>Currencies</span>
                <span className={TextGray}>: Euro</span>
              </div>
              <div>
                <span className={FontSemibold}>Languages</span>
                <span className={TextGray}>: Dutch, French, German </span>
              </div>
            </div>
            {/* 👈 end */}
          </div>
          <div className="mt-14 flex gap-3">
            <span className={FontSemibold}>Border Countries:</span>
            <div className="flex gap-2 ">
              <span className="shadow px-4 py-[.2rem] text-gray-500 font-semibold ">
                France
              </span>
              <span className="shadow px-4 py-[.2rem]  text-gray-500 font-semibold">
                Germany
              </span>
              <span className="shadow px-4 py-[.2rem] text-gray-500 font-semibold">
                Netherlands
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartFullPage;
