import Head from "next/head";
import CartFullPage from "../components/CartFullPage";
import Countries from "../components/Countries";
import Navbar from "../components/Navbar";
import SearchAndListBox from "../components/SearchAndListBox";
import { getCurateData } from "./api/api";
import React, { useState } from "react";

export default function Home({ data }) {
  // console.log(data.allData);
  let countriesData = data.allData;
  const [country, setCountries] = useState(countriesData);
  const [searchField, setSearchField] = useState("");
  const filterCountries = country.filter((country) =>
    country.name.toLowerCase().includes(searchField.toLocaleLowerCase())
  );

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="">
        <Navbar />
        <SearchAndListBox
          apiData={data}
          search={(e) => setSearchField(e.target.value)}
        />
        <Countries apiData={data} countries={filterCountries} />
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
