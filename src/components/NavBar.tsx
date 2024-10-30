import React from "react"

const NavBar: React.FC<{ handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ handleSearch }) => {

  return (
    <nav className='fixed top-0 py-5 flex w-full bg-teal-900 justify-between px-10'>
      <figure className='margin-0 font-bold text-[30px] cursor-pointer'>
        WeatherApp
      </figure>
      <input className="rounded-xl px-4" type="text" placeholder="Ingresa una ciudad" onChange={handleSearch} />
    </nav>
  )
}

export default NavBar