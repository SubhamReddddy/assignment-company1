import React, { useState } from "react";
import { CiPhone } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import CategoryPriceBand from "./CategoryPriceBand";
import CategorySection from "./CategorySection";
import CategorySectionDimond from "./CategorySectionDimond";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  const [Gold, setGold] = useState(false);
  const [Jewellery, setJewellery] = useState(false);
  const [Dimond, setDimond] = useState(false);
  return (
    <header className="bg-gray-100 fixed w-full top-0 left-0 z-10">
      <div className="hidden justify-between items-center py-2 px-6 bg-yellow-200 lg:flex">
        <div className="flex items-center space-x-4">
          <span className="text-sm flex gap-1 items-center">
            <CiPhone /> 1800 425 3307
          </span>
          <span className="text-sm flex gap-1 items-center">
            <IoVideocamOutline /> Video Call
          </span>
        </div>
        <div className="flex gap-2 text-xl">
          <FaRegUserCircle />
          <IoCartOutline />
        </div>
      </div>
      <div className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
        <div className="block lg:hidden">
          <GiHamburgerMenu />
        </div>
        <div className="flex items-center">
          <img
            src="https://avrswarnamahal.com/assets/imgs/home/logo.png" // Replace with your logo path
            alt="AVR Swarna Mahal Logo"
            className="h-10 mr-4"
          />
        </div>
        <div className="hidden flex-grow mx-6 lg:flex">
          <input
            type="text"
            placeholder="Search For (Price, Relationship, Celebrations, Gift)"
            className="w-full border border-gray-300 rounded-md py-2 px-4"
          />
          <button className="bg-[#991e32] text-white px-4 py-2 rounded-md">
            <FaSearch />
          </button>
        </div>
        <div className="text-sm font-bold whitespace-nowrap bg-[#991e32] text-white hidden justify-center items-center rounded-md p-2 lg:flex">
          Today's Gold Rate - 22k - 1gm: ₹7525/- <FaChevronDown />
        </div>
        <div className="block lg:hidden">
          <IoCartOutline />
        </div>
      </div>
      <nav className="bg-[#991e32] text-white hidden lg:block">
        <ul className="flex justify-center space-x-6 py-2 text-sm font-normal">
          <li
            className="cursor-pointer hover:text-yellow-300 flex items-center gap-1 relative"
            onMouseEnter={() => {
              setJewellery(true);
            }}
            onMouseLeave={() => {
              setJewellery(false);
            }}
          >
            Jewellery <FaChevronDown />
            {Jewellery && <CategoryPriceBand />}
          </li>

          <li
            className="cursor-pointer hover:text-yellow-300 flex items-center gap-1"
            onMouseEnter={() => {
              setGold(true);
            }}
            onMouseLeave={() => {
              setGold(false);
            }}
          >
            Gold <FaChevronDown />
            {Gold && <CategorySection />}
          </li>
          <li
            className="cursor-pointer hover:text-yellow-300 flex items-center gap-1"
            onMouseEnter={() => {
              setDimond(true);
            }}
            onMouseLeave={() => {
              setDimond(false);
            }}
          >
            Diamond <FaChevronDown />
            {Dimond && <CategorySectionDimond />}
          </li>
          <li className="cursor-pointer hover:text-yellow-300 flex items-center gap-1">
            Solitaire
          </li>
          <li className="cursor-pointer hover:text-yellow-300 flex items-center gap-1">
            Silver
          </li>
          <li className="cursor-pointer hover:text-yellow-300 flex items-center gap-1">
            Platinum
          </li>
          <li className="cursor-pointer hover:text-yellow-300 flex items-center gap-1">
            Gold Coin
          </li>
          <li className="cursor-pointer hover:text-yellow-300 flex items-center gap-1">
            More <FaChevronDown />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
