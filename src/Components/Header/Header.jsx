import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./Header.css"

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:shadow-2xl pl-2 pr-2   w-24 fixed  h-screen text-center  md:w-24">
      <div
        className=" md:w-24 w-12     bg-slate-100 h-screen "
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <XMarkIcon className="w-12 absolute top-2/4 " />
        ) : (
          <Bars3Icon className="w-12 absolute top-2/4" />
        )}
        <ul
          className={`absolute  w-60 bg-slate-900 text-white h-screen ${
            open ? " p-5 inset-x-16   " : " -inset-x-96  "
          } duration-500  `}
        >
          <div className="absolute top-2/4 -translate-y-2/4  flex flex-col ">
            <NavLink
              className={ ( { isActive,  } ) => isActive ? "active text-left mb-5 hover:text-amber-400 duration-150" : "text-left mb-5 hover:text-amber-400 duration-150"
            }
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className=" text-left mb-5 hover:text-amber-400 duration-150"
              to=" "
            >
              Category
            </NavLink>
            <NavLink
              className=" text-left mb-5 hover:text-amber-400 duration-150"
              to="/cart"
            >
              Cart
            </NavLink>
            <NavLink
              className=" text-left mb-5  hover:text-amber-400 duration-150"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className=" text-left mb-5  hover:text-amber-400 duration-150"
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
