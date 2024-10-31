import React from "react";
import { NavBarProps } from "../types/component_types";
import { IoSearchOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { CiCloudRainbow } from "react-icons/ci";

const NavBar: React.FC<NavBarProps> = ({ props: { handleSearch, fetchData, locationSearch, resetSearch } }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchData(locationSearch ?? '');
    }
  };

  return (
    <nav className="fixed items-center top-0 py-5 flex w-full bg-teal-900 px-2 justify-between lg:px-10">
      <figure className="margin-0 flex items-center gap-3 font-bold lg:text-[30px] cursor-pointer">
        WeatherApp
        <CiCloudRainbow size={50} />
      </figure>
      <div className="flex w-full lg:w-[40%] items-center relative">
        <input
          className="rounded-xl w-full px-4 py-2 text-black bg-white"
          type="text"
          placeholder="Ingresa una ciudad"
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          value={locationSearch ?? ''}
        />
        <IoSearchOutline
          onClick={() => fetchData(locationSearch ?? '')}
          size={25}
          className="absolute lg:right-12 right-0 cursor-pointer bg-white"
          color="black"
        />
        <MdDelete onClick={resetSearch} color="black" className="absolute lg:right-4 right-5 cursor-pointer bg-white" size={25} />
      </div>
    </nav>
  );
};

export default NavBar;
