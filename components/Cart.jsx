import React from "react";
import Image from "next/image";

const TextGray = " text-gray-500 font-semibold";
const FontSemibold = "font-semibold ";
function Cart({ imgAdd, countryName, population, capital, region }) {
  return (
    <>
      <div className="hover:shadow-lg hover:scale-[1.05] ease-in-out duration-300 cursor-pointer rounded overflow-hidden shadow">
        <div className="w-[18rem]   lg:w-[15rem] overflow-hidden  ">
          <img className=" w-[100%] h-[100%]" src={imgAdd} />
        </div>
        <div className="pt-5 pl-5 pb-8">
          <div className="font-bold mb-4"> {countryName}</div>
          <div className="flex flex-col gap-1 text-sm">
            <div>
              <span className={FontSemibold}>Population</span>
              <span className={TextGray}>: {population}</span>
            </div>
            <div>
              <span className={FontSemibold}>Region</span>
              <span className={TextGray}>: {region}</span>
            </div>
            <div>
              <span className={FontSemibold}>Capital</span>
              <span className={TextGray}>: {capital}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
