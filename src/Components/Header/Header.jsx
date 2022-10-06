import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-2xl  w-full    text-center ">
      <div
        className="h-8 w-8  text-slate-900 md:hidden "
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <XMarkIcon/>
        ) : (
          <Bars3Icon />
        )}
      </div>
      <div>
        <ul
          className={` z-30 md:flex absolute  justify-center   md:static   ${ open ? " inset-x-0" : " -inset-x-full"} md:w-full w-1/2 bg-slate-800 md:h-20 h-full  py-5 mb-5  px-5 text-start  text-white  duration-300 ease-in md:sticky `}
        >
          <div className="flex md:flex-row flex-col">
            <NavLink
              className={({ isActive }) =>
                isActive 
                  ? "active text-left mb-5 hover:text-amber-400 duration-150"
                  : "text-left mb-5 hover:text-amber-400 duration-150  nav__link"
              }
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className=" text-left mb-5 hover:text-amber-400 duration-150 nav__link"
              to=" "
            >
              Category
            </NavLink>
            <NavLink
              className=" text-left mb-5 hover:text-amber-400 duration-150 nav__link"
              to="/cart"
            >
              Cart
            </NavLink>
            <NavLink
              className=" text-left mb-5  hover:text-amber-400 duration-150 nav__link"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className=" text-left mb-5  hover:text-amber-400 duration-150 nav__link"
              to="/login"
            >
              Sign up / Log in
            </NavLink>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
