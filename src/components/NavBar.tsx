import React from "react";
import { NavBarProps } from "../types/component_types";
import { IoSearchOutline } from "react-icons/io5";

const NavBar: React.FC<NavBarProps> = ({ props: { handleSearch, fetchData, locationSearch } }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchData(locationSearch ?? '');
    }
  };

  return (
    <nav className="fixed items-center top-0 py-5 flex w-full bg-teal-900 px-2 justify-between lg:px-10">
      <figure className="margin-0 font-bold lg:text-[30px] cursor-pointer">
        WeatherApp
      </figure>
      <div className="flex w-52 lg:w-auto items-center relative">
        <input
          className="rounded-xl px-4 py-2"
          type="text"
          placeholder="Ingresa una ciudad"
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        />
        <IoSearchOutline
          onClick={() => fetchData(locationSearch ?? '')}
          size={25}
          className="absolute lg:right-4 right-0 cursor-pointer"
        />

      </div>
    </nav>
  );
};

export default NavBar;
