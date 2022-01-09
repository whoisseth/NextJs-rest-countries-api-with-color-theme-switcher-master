import Link from "next/link";
import useInView from "react-cool-inview";
import dynamic from "next/dynamic";
const Cart = dynamic(() => import("./Cart"));

function Countries({ countries }) {
  // console.log(countries);
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });

  return (
    <>
      <div
        style={{ minHeight: "1000px" }}
        ref={observe}
        className="  px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-16  "
      >
        {countries.map((data) => (
          <div key={data.alpha3Code}>
            <Link href={`/countries/${data.alpha3Code}`}>
              <a>
                {inView && (
                  <Cart
                    imgAdd={data.flags.png}
                    countryName={data.name}
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
