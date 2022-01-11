import Image from "next/image";
import Head from "next/head";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { getCountryDataByName } from "../api/api";
import { useRouter } from "next/router";

const CartImg = ({ src, width, quality }) => {
  return `https://flagcdn.com/${src}.svg?w=${width}&q=${quality || 75}`;
};

//
export default function CartFullPage({ data }) {
  console.log(data);
  const router = useRouter();

  // styling
  const TextGray = " text-gray-500 font-semibold";
  const FontSemibold = "font-semibold  ";
  return (
    <>
      <Head>
        <title>NextJs-rest-countries-api</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <BackButton />
      <div className='   mt-16 flex flex-col items-center  lg:flex-row md:flex gap-4 lg:gap-24 mx-14   '>
        <CountryImage />
        <div className='  '>
          <h1 className='font-bold text-3xl  '> {data.name} </h1>
          <div className='grid grid-cols-1 md:grid-cols-2  md:flex md:mt-5 md:gap-20 md:text-xl   '>
            <LeftSideData />
            <RightSideData />
          </div>
        </div>
      </div>
    </>
  );

  //
  // Above Components
  function BackButton() {
    return (
      <div
        onClick={() => router.back()}
        className='ml-14 mt-8   px-6  py-1 inline-block rounded shadow font-semibold  hover:shadow-xl cursor-pointer'
      >
        <ArrowLeftIcon className='w-4 h-4  inline-block mr-2 ' />
        <span className='text-gray-600'> Back </span>
      </div>
    );
  }
  //
  function CountryImage() {
    return (
      <div className='md:mb-8 mb-2 '>
        <Image
          loader={CartImg}
          src={data.alpha2Code.toLowerCase()}
          alt={`Picture of the Country ${data.name}`}
          // width={500}
          // height={320}
          width={700}
          height={500}
        />
      </div>
    );
  }
  //
  function LeftSideData() {
    return (
      <div className=' flex flex-col gap-2  ml-auo mt-8 md:mt-0'>
        <div>
          <span className={FontSemibold}> Native Name </span>
          <span className={TextGray}>: {data.nativeName} </span>
        </div>
        <div>
          <span className={FontSemibold}> Population </span>
          <span className={TextGray}>
            : {new Intl.NumberFormat().format(data.population)}
          </span>
        </div>
        <div>
          <span className={FontSemibold}> Region </span>
          <span className={TextGray}>: {data.region} </span>
        </div>
        <div>
          <span className={FontSemibold}> Sub Region </span>
          <span className={TextGray}>: {data.subregion} </span>
        </div>
        <div>
          <span className={FontSemibold}> Capital </span>
          <span className={TextGray}>: {data.capital} </span>
        </div>
      </div>
    );
  }
  //
  function RightSideData() {
    return (
      <div className='flex mt-2 md:mt-0 flex-col gap-2  ml-auo '>
        <div>
          <span className={FontSemibold}> Top Level Doamin </span>
          <span className={TextGray}>: {data.topLevelDomain} </span>
        </div>
        <div>
          <span className={FontSemibold}> Currencies </span>
          <span className={TextGray}>
            : {data.currencies && data.currencies[0].name}{" "}
          </span>
        </div>
        <div>
          <span className={FontSemibold}> Languages </span>
          <span className={TextGray}>
            {data.languages
              .map(lang => {
                return lang.name;
              })
              .join(", ")}
          </span>
        </div>
      </div>
    );
  }
}

export async function getServerSideProps({ params }) {
  const data = await getCountryDataByName(params.name);
  return {
    props: {
      data,
    },
  };
}




