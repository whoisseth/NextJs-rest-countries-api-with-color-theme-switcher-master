import React from "react";
import Select from "react-select";
import { SearchIcon } from "@heroicons/react/outline";

const optionStyling = "font-semibold";
function SearchBox({ search, searchByRegion }) {
  const options = [
    { value: "", label: "Filter by Region" },
    { value: "Africa", label: "Africa" },
    { value: "", label: "" },
    { value: "", label: "" },
    { value: "", label: "" },
  ];
  return (
    <>
      <div className="  md:flex md:flex-cols justify-between px-8 md:px-14 py-3   items-center mb-8   ">
        <div className="  mb-8  md:mb-0  items-center  flex  pl-6 pr-2  shadow rounded-md  md:w-96  h-12  hover:shadow-lg">
          <SearchIcon className="h-5 w-5 cursor-pointer mr-2  text-gray-500 ease-in-out duration-300 " />
          <input
            className="  text-sm outline-none   w-[100%] h-[80%] font-semibold rounded-md pl-2"
            type="text"
            placeholder="Search for a country..."
            onChange={search}
          />
        </div>
        {/* Serach by reagion */}
        {/* <RegionSelect /> */}
        <div>
          <select
            className="form-select w-48 py-3 px-4 sm:py-4 sm:px-6  shadow-md rounded-md border-none outline-none dark:bg-gray-700 cursor-pointer font-semibold "
            onChange={searchByRegion}
          >
            <option value="" className={optionStyling}>
              Filter by Region
            </option>
            <option value="africa" className={optionStyling}>
              Africa
            </option>
            <option value="americas" className={optionStyling}>
              Americas
            </option>
            <option value="asia" className={optionStyling}>
              Asia
            </option>
            <option value="europe" className={optionStyling}>
              Europe
            </option>
            <option value="oceania" className={optionStyling}>
              Oceania
            </option>
          </select>
        </div>
      </div>
    </>
  );
  function RegionSelect() {
    return (
      <div>
        <select
          className="form-select w-48 py-3 px-4 sm:py-4 sm:px-6  shadow-md rounded-md border-none outline-none dark:bg-gray-700 cursor-pointer font-semibold"
          onChange={searchByRegion}
        >
          <option value="" className={optionStyling}>
            Filter by Region
          </option>
          <option value="africa" className={optionStyling}>
            Africa
          </option>
          <option value="americas" className={optionStyling}>
            Americas
          </option>
          <option value="asia" className={optionStyling}>
            Asia
          </option>
          <option value="europe" className={optionStyling}>
            Europe
          </option>
          <option value="oceania" className={optionStyling}>
            Oceania
          </option>
        </select>
      </div>
    );
  }
}

export default SearchBox;
