import Countries from "../components/Countries";
import SearchBox from "../components/SearchBox";
import React, { useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";

// map
const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};
// map end

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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div>
        <main className='relative scroll-smooth '>
          <SearchBox
            apiData={data}
            search={e => setSearchField(e.target.value)}
            searchByRegion={e => setRegion(e.target.value)}
          />
          <Countries countries={filterCountries} />
          {/* <div className='fixed  text-3xl  bottom-10  bg-gray-400 opacity-40 hover:opacity-75 rounded-full  cursor-pointer min-h-screen:hidden -z-50  left-1/2 transform -translate-x-1/2 '> */}
          <div className=' fixed right-10  align-right bottom-10 inline-block rounded-full cursor-pointer  bg-gray-500 text-3xl'>
            <BsArrowUpShort onClick={() => scrollToTop()} />
          </div>
        </main>
      </div>
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


