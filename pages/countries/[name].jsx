import Head from "next/head";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
// import { useRouter } from "next/router";

import MapCountries from "../../components/MapCountries";
import ScrollToTop from "../../components/ScrollToTop";
import Link from "next/dist/client/link";

export default function CartFullPage({ apidata, location }) {
  // change them of map
  const { theme, setTheme } = useTheme();
  console.log(theme);

  // consoling
  console.log(apidata);
  // console.log(location);

  // assigning location
  const cLat = location.features[0].center[1];
  const cLong = location.features[0].center[0];
  console.log(cLat);
  console.log(cLong);

  const data = apidata[0];
  const countNativeName = Object.keys(data.name.nativeName).length;
  const NativeName = countNativeName >= 2 ? true : false;
  // css
  const TextGray = " text-gray-500 font-semibold";
  const FontSemibold = "font-semibold  ";
  const lightMap = "mapbox://styles/mapbox/streets-v11";
  const darkMap = "mapbox://styles/mapbox/dark-v9";

  return (
    <>
      <Head>
        <title>{data.name.common}</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div>
        <div className=' mx-7 lg:mx-14'>
          <BackButton />
          <div className='mt-8 flex flex-col items-center  lg:flex-row md:flex gap-4 lg:gap-12   overflow-hidden'>
            <CountryImage />
            <div>
              <h1 className='font-bold text-3xl  '> {data.name.common} </h1>
              <div className='grid grid-cols-1 md:grid-cols-2  md:flex md:mt-5 md:gap-4      md:text-xl   '>
                <LeftSideData />
                <RightSideData />
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div className='  flex justify-center mt-5 my-8  mx-8 h-[70vh]  md:h-full md:mx-16 border rounded-xl shadow-2xl border-gray-500'>
          <MapCountries
            cLat={cLat}
            cLong={cLong}
            zoom={4}
            // zoom={1}
            pitch={0}
            // MapStyle={lightMap}
            MapStyle={theme === "light" ? lightMap : darkMap}
            // add dark mode
          />
        </div>
        <ScrollToTop />
      </div>
    </>
  );

  //
  // Above Components

  function BackButton() {
    return (
      //  <Link href='/'></Link>
      <Link href='/'>
        <a className=' mt-8   px-6  py-2 inline-block rounded shadow font-semibold  hover:shadow-2xl cursor-pointer hover:opacity-75 border-2'>
          <ArrowLeftIcon className='w-4 h-4  inline-block mr-2 ' />
          <span className='text-gray-600'> Back </span>
        </a>
      </Link>
    );
  }
  //
  function CountryImage() {
    return (
      <div
        className='md:mb-8 mb-2  overflow-hidden
        w-[20rem] h-[15rem] md:w-[40rem] md:h-[30rem]
        drop-shadow-md  shadow-md '
      >
        <img
          className=' w-[100%] h-[100%] object-cover '
          src={data.flags.svg}
          alt={`Picture of the Country ${data.name.common}`}
        />
      </div>
    );
  }
  //
  function LeftSideData() {
    return (
      <div className=' flex flex-col gap-2  ml-auo mt-8 md:mt-0'>
        <div>
          <span className={FontSemibold}> Native Name </span>
          <span className={TextGray}>
            :
            {NativeName
              ? data.name.nativeName[Object.keys(data.name.nativeName)[1]]
                  .common
              : data.name.nativeName[Object.keys(data.name.nativeName)[0]]
                  .common}
          </span>
        </div>
        <div>
          <span className={FontSemibold}> Population </span>
          <span className={TextGray}>
            : {new Intl.NumberFormat().format(data.population)}
          </span>
        </div>
        <div>
          <span className={FontSemibold}> Region </span>
          <span className={TextGray}>: {data.region} </span>
        </div>
        <div>
          <span className={FontSemibold}> Sub Region </span>
          <span className={TextGray}>
            : {data.subregion ? data.subregion : "No Sub Region"}
          </span>
        </div>
        <div>
          <span className={FontSemibold}> Capital </span>
          <span className={TextGray}>
            : {data.capital ? data.capital : "No Captial"}
          </span>
        </div>
      </div>
    );
  }
  //
  function RightSideData() {
    return (
      <div>
        <div className='flex mt-2 md:mt-0 flex-col gap-2  ml-auo '>
          <div>
            <span className={FontSemibold}> Top Level Doamin </span>
            <span className={TextGray}>: {data.tld} </span>
          </div>
          <div>
            <span className={FontSemibold}> Currencies </span>
            <span className={TextGray}>
              :{" "}
              {data.currencies
                ? data.currencies[Object.keys(data.currencies)[0]].name
                : "No Currencies"}
            </span>
          </div>
          <div>
            <span className={FontSemibold}> Languages </span>
            <span className={TextGray}>
              :{" "}
              {Object.keys(data.languages)
                .map(function (key, index) {
                  return data.languages[key];
                })
                .join(", ")}
            </span>
          </div>
          <CountryMap />
        </div>
      </div>
    );
  }
  function CountryMap() {
    return (
      <div className='flex'>
        <div className={FontSemibold}>
          Maps <span className={TextGray}>: </span> &nbsp; &nbsp;{" "}
        </div>
          <Link href={data.maps.googleMaps}  >
            <a target="_blank" className='underline text-blue-400 font-semibold'> Google Map </a>
          </Link>
      </div>
    );
  }
  
}

export const getCountryDataByName = async name => {
  const path = "https://restcountries.com/v3.1";

  const res = await fetch(`${path}/name/${name}`);
  const responseJson = await res.json();
  return responseJson;
};

export async function getServerSideProps({ params }) {
  // fetching location data
  const apidata = await getCountryDataByName(params.name);
  const apiDataName = apidata[0].name.common;

  // fetching location  lan and lng
  const apiKey =
    "pk.eyJ1IjoidXRrYXJzaHNldGgiLCJhIjoiY2t5Y3JxZzhsMHNnMDJ4bzh1azNoYmh2ciJ9.-lfaCZ_sD5EsSRdsOyKOyQ"; // api key of Mapbox
  const locationUrl = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${apiDataName}.json?limit=2&access_token=${apiKey}`
  );
  const location = await locationUrl.json();

  return {
    props: {
      apidata,
      apiDataName,
      location,
    },
  };
}
