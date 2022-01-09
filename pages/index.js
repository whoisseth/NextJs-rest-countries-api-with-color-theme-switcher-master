import Head from "next/head";
import Countries from "../components/Countries";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import { getCurateData } from "./api/api";
import React, { useState } from "react";

export default function Home({ data }) {
  // console.log(data.allData);
  let countriesData = data.allData;
  const [country, setCountries] = useState(countriesData);
  const [searchField, setSearchField] = useState("");
  const [region, setRegion] = useState("");
  // Search and searchByReagion  Function >>
  const filterCountries = country.filter((country) =>
    searchField
      ? country.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      : country.region.toLowerCase().includes(region.toLocaleLowerCase())
  );

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
      <main>
        <SearchBox
          apiData={data}
          search={(e) => setSearchField(e.target.value)}
          searchByRegion={(e) => setRegion(e.target.value)}
          // searchByRegion={(e) => setRegion(e.target.options.value)}
        />
        <Countries countries={filterCountries} />
      </main>
    </>
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
