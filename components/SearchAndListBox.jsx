import React from "react";
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/outline";
import ListboxSelect from "./ListboxSelect";

function SearchAndListBox({ search }) {
  // console.log(apiData);
  return (
    <>
      <div className="  grid grid-cols-1 md:flex justify-between px-8 md:px-14 py-3   items-center mb-8   ">
        <div className="mb-8 md:mb-0  items-center  flex  pl-6 pr-2  shadow rounded-md  w-70 md:w-96  h-12  hover:shadow-lg">
          <SearchIcon className="h-5 w-5 cursor-pointer mr-2  text-gray-500 ease-in-out duration-300 " />
          <input
            className="  text-sm outline-none   w-[100%] h-[80%] font-semibold rounded-md pl-2"
            type="text"
            placeholder="Search for a country..."
            onChange={search}
          />
        </div>
        {/* <ListboxSelect /> */}
      </div>
    </>
  );
}

export default SearchAndListBox;
