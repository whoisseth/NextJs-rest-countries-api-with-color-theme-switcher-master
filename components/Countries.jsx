import Link from "next/link";
import useInView from "react-cool-inview";
import dynamic from "next/dynamic";
const Cart = dynamic(() => import("./Cart"));
import { Wrap } from "@chakra-ui/react";

function Countries({ countries }) {
  // console.log(countries.data);
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });

  return (
    <>
      {/* <div ref={observe}> */}
      {/* <div
        style={{ minHeight: "1000px" }}
        ref={observe}
        className='containerGrid  px-14 grid grid-cols-4  auto-cols-auto justify-items-center gap-8  z-30 '
      > */}
      <div
        style={{ minHeight: "1000px" }}
        ref={observe}
        className=' containerGrid  px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-8 justify-items-center gap-16  z-30 '
      >
        {countries.map(data => (
          <div key={data.name.common}>
            <Link
              href={`/countries/${
                data.name.common === "Curaçao" ? "Curacao" : data.name.common
              }`}
            >
              <a>
                {inView && (
                  <Cart
                    imgAdd={data.flags.png}
                    // imgAdd={data.flags.svg}
                    countryName={data.name.common}
                    population={new Intl.NumberFormat().format(data.population)}
                    region={data.region}
                    capital={data.capital}
                  />
                )}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Countries;
