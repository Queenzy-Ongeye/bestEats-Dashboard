"use client";
import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiTwotoneShop,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [selectedOption, setSelectedOption] = useState("delivery");

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };

  const menuItems = [
    {
      icon: <LuLayoutDashboard  size={25} className="mr-4" />,
      text: "Dashboard",
      route: "/",
    },
    {
      icon: <TbTruckDelivery size={25} className="mr-4" />,
      text: "Orders",
      route: "/orders",
    },
    {
      icon: <MdFavorite size={25} className="mr-4" />,
      text: "Favorites",
      route: "/favorites",
    },
    { icon: <FaWallet size={25} className="mr-4" />, text: "Wallet" },
    { icon: <MdHelp size={25} className="mr-4" />, text: "Help" },
  ];

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-sm">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer text-black">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 text-black">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p
            className={`${
              selectedOption === "delivery" ? "bg-black text-white" : ""
            } rounded-full p-2 cursor-pointer`}
            onClick={() => handleOptionClick("delivery")}
          >
            Delivery
          </p>
          <p
            className={`${
              selectedOption === "pickup" ? "bg-black text-white" : ""
            } rounded-full p-2 cursor-pointer`}
            onClick={() => handleOptionClick("pickup")}
          >
            Pickup
          </p>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-gray-50 border border-gray-300 w-[200px] sm:w-[400px] lg:w-[600px] text-gray-900 text-sm rounded-full focus:ring-green-500 focus:border-green-500 block pl-10 p-2.5"
          type="text"
          placeholder="Search..."
        />
      </div>
      {/* Cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full border border-black px-5 ">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[250px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer text-black"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            {menuItems.map(({ icon, text, route }, index) => {
              return (
                <div key={index} className=" py-4">
                  <Link
                    className="text-xl flex cursor-pointer w-full rounded-lg  mx-auto p-2 hover:text-white hover:bg-black"
                    href={`${route}`}
                  >
                    {icon} {text}
                  </Link>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
