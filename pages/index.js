import Head from "next/head";
import CartFullPage from "./countries/[name]";
import Countries from "../components/Countries";
import Navbar from "../components/Navbar";
import SearchAndListBox from "../components/SearchAndListBox";
import { getCurateData } from "./api/api";
import React, { useState } from "react";

export default function Home({ data }) {
  // console.log(data.allData);
  let countriesData = data.allData;
  const [country, setCountries] = useState(countriesData);
  // searchFiled  function >>
  const [searchField, setSearchField] = useState("");
  const filterCountries = country.filter((country) =>
    country.name.toLowerCase().includes(searchField.toLocaleLowerCase())
  );
  // serchByRegion function
  const [searchByRegion, setSearchByRegion] = useState("");
  const filterSearchByRegion = country.filter((country) => country.region);

  return (
    <div className="">
      <Head>
        <title>NextJs-rest-countries-api</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className=" dark:bg-gray-400">
        <Navbar />
        <SearchAndListBox
          apiData={data}
          search={(e) => setSearchField(e.target.value)}
          searchByRegion={(e) => setSearchByRegion(e.target.value)}
        />
        <Countries countries={filterCountries} />
        {/* <CartFullPage /> */}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await getCurateData();
  return {
    props: {
      data,
    },
  };
}
