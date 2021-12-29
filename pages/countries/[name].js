import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { getCountryDataByName } from "../api/api";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { data } from "autoprefixer";
const TextGray = " text-gray-500 font-semibold";
const FontSemibold = "font-semibold ";
const CartImg = ({ src, width, quality }) => {
  return `https://flagcdn.com/${src}.svg?w=${width}&q=${quality || 75}`;
};

export default function CartFullPage({ data }) {
  console.log(data);
  // let data = data[0];
  // console.log(data);

  const router = useRouter();

  return (
    <>
      <Navbar />
      <button onClick={() => router.back()}>
        <div className="ml-14 mt-8 px-6  py-1 inline-block rounded shadow font-semibold  hover:shadow-xl">
          <ArrowLeftIcon className="w-4 h-4  inline-block mr-2 " />
          <span className="text-gray-600"> Back </span>
        </div>
      </button>
      <div className="mt-16   flex gap-24  mx-14">
        <div className=" ">
          <Image
            loader={CartImg}
            // src="be.svg"
            src={data.alpha2Code.toLowerCase()}
            alt={`Picture of the Country ${data.name}`}
            width={500}
            height={320}
          />
        </div>
        {/* Right div */}
        <div className="">
          {/* <h1 className="font-bold text-3xl">Belgium</h1> */}
          <h1 className="font-bold text-3xl"> {data.name} </h1>
          <div className="flex mt-5 gap-20   ">
            {/* left div */}
            <div className=" flex flex-col gap-2  ml-auo">
              <div>
                <span className={FontSemibold}> Native Name </span>
                {/* <span className={TextGray}>: Belgie</span> */}
                <span className={TextGray}>: {data.nativeName} </span>
              </div>
              <div>
                <span className={FontSemibold}> Population </span>
                {/* <span className={TextGray}>: 81,770,900</span> */}
                <span className={TextGray}>
                  : {new Intl.NumberFormat().format(data.population)}{" "}
                </span>
              </div>
              <div>
                <span className={FontSemibold}> Region </span>
                {/* <span className={TextGray}>: Europe</span> */}
                <span className={TextGray}>: {data.region} </span>
              </div>
              <div>
                <span className={FontSemibold}> Sub Region </span>
                {/* <span className={TextGray}>: Western Europe</span> */}
                <span className={TextGray}>: {data.subregion} </span>
              </div>
              <div>
                <span className={FontSemibold}> Capital </span>
                {/* <span className={TextGray}>: Brussels</span> */}
                <span className={TextGray}>: {data.capital} </span>
              </div>
            </div>
            {/* left div */}
            <div className="  ml-auto block">
              <div>
                <span className={FontSemibold}> Top Level Doamin </span>
                {/* <span className={TextGray}>: be</span> */}
                <span className={TextGray}>: {data.topLevelDomain} </span>
              </div>
              <div>
                <span className={FontSemibold}> Currencies </span>
                {/* <span className={TextGray}>: Euro</span> */}
                <span className={TextGray}>
                  : {data.currencies && data.currencies[0].name}{" "}
                </span>
              </div>
              <div>
                {/* <span className={FontSemibold}> Languages </span> */}
                {/* <span className={TextGray}>: Dutch, French, German </span> */}
                {/* <span className={TextGray}>: {data.languages} </span> */}
              </div>
            </div>
            {/* 👈 end */}
          </div>
          {/* <div className="mt-14 flex gap-3">
            <span className={FontSemibold}> Border Countries: </span>{" "}
            <div className="flex gap-2 ">
              <span className="shadow px-4 py-[.2rem] text-gray-500 font-semibold">
                Netherlands
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  // const data = await getCountryDataByName(params.name);
  const data = await getCountryDataByName(params.name);
  return {
    props: {
      data,
    },
  };
}
