import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { getCountryDataByName } from "../api/api";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
const TextGray = " text-gray-500 font-semibold";
const FontSemibold = "font-semibold  ";
const CartImg = ({ src, width, quality }) => {
  return `https://flagcdn.com/${src}.svg?w=${width}&q=${quality || 75}`;
};

export default function CartFullPage({ data }) {
  console.log(data);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>NextJs-rest-countries-api</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <button onClick={() => router.back()}> */}
      <div
        onClick={() => router.back()}
        className="ml-14 mt-8 px-6  py-1 inline-block rounded shadow font-semibold  hover:shadow-xl"
      >
        <ArrowLeftIcon className="w-4 h-4  inline-block mr-2 " />
        <span className="text-gray-600"> Back </span>
      </div>
      {/* </button> */}

      <div className="  mt-16 grid-cols-1 lg:flex gap-24 mx-14 ">
        <div className="mb-8 ">
          <Image
            loader={CartImg}
            src={data.alpha2Code.toLowerCase()}
            src={data.alpha2Code.toLowerCase()}
            alt={`Picture of the Country ${data.name}`}
            width={500}
            height={320}
          />
        </div>
        <div className="  ">
          <h1 className="font-bold text-3xl "> {data.name} </h1>
          <div className="grid grid-cols-1 md:grid-cols-2  md:flex md:mt-5 md:gap-20   ">
            <div className=" flex flex-col gap-2  ml-auo mt-8 md:mt-0">
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
            <div className="flex mt-2 md:mt-0 flex-col gap-2  ml-auo ">
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
                    .map((lang) => {
                      return lang.name;
                    })
                    .join(", ")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link href="https://github.com/whoisseth/NextJs-rest-countries-api-with-color-theme-switcher-master">
        <a>
          <AiFillGithub className="mx-auto border-12 my-8  h-12 w-12  " />
        </a>
      </Link>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const data = await getCountryDataByName(params.name);
  return {
    props: {
      data,
    },
  };
}
