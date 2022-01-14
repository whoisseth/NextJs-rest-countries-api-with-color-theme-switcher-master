import React from "react";
import Image from "next/image";
// hello
const TextGray = " text-gray-500 font-semibold";
const FontSemibold = "font-semibold ";
function Cart({ imgAdd, countryName, population, capital, region }) {
  return (
    <>
      {/* <div className=' hover:scale-[1.05] ease-in-out duration-300 cursor-pointer rounded overflow-hidden shadow-xl'> */}
      <div className=' hover:scale-[1.02] ease-in-out duration-300 cursor-pointer rounded overflow-hidden shadow-xl'>
        <ImageCountry />
        <div className='pt-5 pl-5 pb-8 '>
          <div className='font-bold mb-4 text-2xl  w-[15rem]'>
            {countryName}
          </div>
          <CountryInfo />
        </div>
      </div>
    </>
  );
  function ImageCountry() {
    return (
      // <div className='w-[18rem] md:w-[15rem] h-[10.5rem]  overflow-hidden   '>
      <div className='w-[18rem] md:w-[17rem] md:h-[10] h-[10.5rem]  overflow-hidden    '>
        <img className=' w-[100%] h-[100%] object-cover' src={imgAdd} />
      </div>
    );
  }
  function CountryInfo() {
    return (
      <div className='flex flex-col gap-1 text-xl '>
        <div>
          <span className={FontSemibold}>Population</span>
          <span className={TextGray}>: {population}</span>
        </div>
        <div>
          <span className={FontSemibold}>Region</span>
          <span className={TextGray}>: {region ? region : "No Region"}</span>
        </div>
        <div>
          <span className={FontSemibold}>Capital</span>
          <span className={TextGray}>: {capital ? capital : "No Captial"}</span>
        </div>
      </div>
    );
  }
}

export default Cart;
