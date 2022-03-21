import Countries from "../components/Countries";
import SearchBox from "../components/SearchBox";
import React, { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import Head from "next/head";

export default function Home({ data }) {
  console.log(data);
  let countriesData = data;

  const [country, setCountries] = useState(countriesData);
  const [searchField, setSearchField] = useState("");
  const [region, setRegion] = useState("");

  // Search and searchByReagion  Function >>
  const filterCountries = country.filter(country =>
    searchField
      ? country.name.common
          .toLowerCase()
          .includes(searchField.toLocaleLowerCase())
      : country.region.toLowerCase().includes(region.toLocaleLowerCase())
  );
  // for Smooth scroll
  
  return (
    <>
      <Head>
        <title>UtkWorld </title>
      </Head>
      <main className='relative scroll-smooth '>
        <SearchBox
          apiData={data}
          search={e => setSearchField(e.target.value)}
          searchByRegion={e => setRegion(e.target.value)}
        />
        <Countries countries={filterCountries} />
        <ScrollToTop />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await res.json();

  return {
    props: { data },
  };
}
