import Cart from "./Cart";
import React, { useState } from "react";

function Countries({ apiData, countries }) {
  // console.log(apiData.allData);

  return (
    <>
      <div className=" px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-16  ">
        {countries.map((data) => (
          <Cart
            key={data.name}
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
