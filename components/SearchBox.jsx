import React from "react";
import Select from "react-select";
import { SearchIcon } from "@heroicons/react/outline";

function SearchBox({ search, searchByRegion }) {
  return (
    <>
      <div className='md:flex md:flex-cols justify-between px-8 md:px-14 py-3 items-center mb-8 mt-8'>
        <div className='relative  mb-8  md:mb-0  items-center  flex     shadow rounded-md  md:w-96  h-12  hover:shadow-lg  '>
          <SearchIcon className=' absolute left-4   h-5 w-5  mr-2  text-gray-500 ease-in-out duration-300 cursor-auto ' />
          <input
            className=' pl-12  text-sm outline-none   w-[100%] h-[100%] font-semibold rounded-md '
            type='text'
            placeholder='Search for a country...'
            onChange={search}
          />
        </div>
        {/* Serach by reagion */}
        <div>
          <select
            className='form-select w-48  px-4 py-[.9rem] sm:px-6  shadow-md rounded-md border-none outline-none dark:bg-gray-700 cursor-pointer font-semibold '
            onChange={searchByRegion}
          >
            <RegionOptions />
          </select>
        </div>
      </div>
    </>
  );
}
export default SearchBox;

function RegionOptions() {
  const optionStyling = "font-semibold";
  const options = [
    { value: "", label: "Filter by Region" },
    { value: "Africa", label: "Africa" },
    { value: "americas", label: "Americas" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];
  return (
    <>
      {options.map(options => (
        <option
          key={options.label}
          value={options.value}
          className={optionStyling}
        >
          {options.label}
        </option>
      ))}
    </>
  );
}

