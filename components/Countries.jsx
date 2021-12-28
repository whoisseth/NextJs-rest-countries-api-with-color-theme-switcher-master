import Cart from "./Cart";
import Link from "next/link";
// import React, { useState } from "react";
// import test from "../pages/countries/test";
function Countries({ countries }) {
  // console.log(apiData);
  // console.log(countries);

  return (
    <>
      <div className="  px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-16  ">
        {countries.map((data) => (
          <div key={data.alpha3Code}>
            {/* <Link href={`/countries/${data.alpha3Code}`}> */}
            {/* <Link href={`/countries/${data.name}`}> */}
            <Link href={`/countries/${data.alpha3Code}`}>
              <a>
                <Cart
                  imgAdd={data.flags.png}
                  countryName={data.name}
                  population={new Intl.NumberFormat().format(data.population)}
                  region={data.region}
                  capital={data.capital}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Countries;
