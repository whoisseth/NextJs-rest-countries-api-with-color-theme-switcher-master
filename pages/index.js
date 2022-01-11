import Countries from "../components/Countries";
import SearchBox from "../components/SearchBox";
import { apiData } from "./api/api";
import React, { useState } from "react";
import Link from "next/link";
import { BsFillArrowUpCircleFill, BsArrowUpShort } from "react-icons/bs";

export default function Home({ data }) {
  // console.log(data);
  let countriesData = data.allData;
  const [country, setCountries] = useState(countriesData);
  const [searchField, setSearchField] = useState("");
  const [region, setRegion] = useState("");
  // Search and searchByReagion  Function >>
  const filterCountries = country.filter(country =>
    searchField
      ? country.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      : country.region.toLowerCase().includes(region.toLocaleLowerCase())
  );
  // for Smooth scroll
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <main className='relative scroll-smooth '>
        <SearchBox
          apiData={data}
          search={e => setSearchField(e.target.value)}
          searchByRegion={e => setRegion(e.target.value)}
        />
        <Countries countries={filterCountries} />

        <div className='fixed  text-5xl  bottom-10  bg-gray-400 opacity-40 hover:opacity-75 rounded-full  cursor-pointer min-h-screen:hidden -z-50  left-1/2 transform -translate-x-1/2 '>
          <BsArrowUpShort onClick={() => scrollToTop()} />
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const data = await apiData();
  return {
    props: {
      data,
    },
  };
}
