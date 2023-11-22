import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";
import { SlGlobe } from "react-icons/sl";
import { PiShoppingCartSimple } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

import Input from "../elements/Input";
import HamburgerMenu from "./HamBurgerMenu";

const TopbarNav = () => {
  return (
    <div className="bg-orange-500 h-16 flex items-center justify-center">
      <h2 className="text-white font-extrabold text-2xl ">OlaShop</h2>
      <div className="md:w-1/2 flex items-center relative">
        <Input
          placeholder="Search in OlaShop"
          className='p-2 rounded-md text-sm mx-4 outline-none w-full'
        />
        <div className="w-12 rounded-lg h-7 flex items-center justify-center bg-orange-100 absolute right-5 cursor-pointer">
          <FiSearch  size={20}  className="text-orange-500" />
        </div>
      </div>
      <div className="md:flex justify-center items-center hidden">
        <div className="flex hover:bg-red-500 p-2 rounded-md cursor-pointer">
          <FaRegUser color='white' size={16} />
          <p className="text-sm text-white ml-1">Login</p>
        </div>
        <RxDividerVertical color='white' />
        <div className="flex hover:bg-red-500 p-2 rounded-md cursor-pointer">
          <p className="text-sm text-white ml-1">Sign Up</p>
        </div>
        <div className="flex hover:bg-red-500 p-2 rounded-md cursor-pointer">
          <SlGlobe color='white' size={20} />
          <p className="text-sm text-white ml-1">EN</p>
        </div>
        <div className="flex hover:bg-red-500 p-2 rounded-md cursor-pointer">
          <PiShoppingCartSimple color='white' size={28} />
        </div>
      </div>
      <HamburgerMenu />
    </div>
  )
}
export default TopbarNav;
