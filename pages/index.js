import Countries from "../components/Countries";
import SearchBox from "../components/SearchBox";
import { apiData } from "./api/api";
import React, { useState } from "react";
import {  BsArrowUpShort } from "react-icons/bs";



export default function Home({ data, }) {
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
          <div className='fixed  text-5xl  bottom-10  bg-gray-400 opacity-40 hover:opacity-75 rounded-full  cursor-pointer min-h-screen:hidden -z-50  left-1/2 transform -translate-x-1/2 '>
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
          props: { data, },
         }; 
        
}

// export async function getStaticProps() {
// 	const res = await fetch("https://restcountries.eu/rest/v2/all");
// 	const data = await res.json();

// 	return {
// 		props: {  data },
// 	};
// }

// export async function getServerSideProps() {
//   const data = await apiData();
//   return {
//     props: {
//       data,
//     },
//   };
// }

// Curaçao

// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13862975.663953034!2d44.674008411441555!3d31.97403714676444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef7ec2ec16b1df1%3A0x40b095d39e51face!2sIran!5e0!3m2!1sen!2sin!4v1642020323463!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>



// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1020826.7047884833!2d114.15837539458748!3d4.5484707490520035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3218994b04b8b9d1%3A0x5dfe3580dd09dad6!2sBrunei!5e0!3m2!1sen!2sin!4v1642049049040!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>



// https://api.mapbox.com/geocoding/v5/mapbox.places/georgia.json?types=country&access_token=pk.eyJ1IjoidXRrYXJzaHNldGgiLCJhIjoiY2t5Y2VxaHJ0MG9weTJvbjBmYXR5a2VwMiJ9.GqGwztQQ9gHMrcivHTyTcw




// https://api.mapbox.com/geocoding/v5/mapbox.places/delhi.json?limit=2&access_token=pk.eyJ1IjoidXRrYXJzaHNldGgiLCJhIjoiY2t5Y2VxaHJ0MG9weTJvbjBmYXR5a2VwMiJ9.GqGwztQQ9gHMrcivHTyTcw