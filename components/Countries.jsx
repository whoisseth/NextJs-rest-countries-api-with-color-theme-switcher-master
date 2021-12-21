import Cart from "./Cart";
import React, { useState } from "react";

function Countries({ apiData }) {
  // console.log(apiData.allData);
  let data = apiData.allData;
  const [countriesData, setCountries] = useState(data);
  return (
    <>
      <div className="  px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-16 ">
        {countriesData.map((data) => (
          <Cart
            key={data.area}
            imgAdd={data.flags.png}
            countryName={data.name}
            population={data.population}
            region={data.region}
            capital={data.capital}
          />
        ))}
      </div>
    </>
  );
}

export default Countries;
