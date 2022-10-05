import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-2xl  p-2  w-24 fixed  h-max text-center  md:w-24">
      <div className=" w-24    bg-slate-100 h-screen " onClick={() => setOpen(!open)}>
        {open ? <XMarkIcon  className="w-12 absolute top-2/4 " /> : <Bars3Icon  className="w-12 absolute top-2/4"/>}
        <ul
          className={`absolute  w-60 bg-slate-900 text-white h-screen ${
            open ? " p-5 inset-x-16   " : " -inset-x-96  "
          } duration-500  `}
        >
          <div className="absolute top-2/4 -translate-y-2/4  flex flex-col ">
          <Link
            className=" text-left mb-5  hover:text-amber-400 duration-150"
            to="/home"
          >
            Home
          </Link>
          <Link
            className=" text-left mb-5 hover:text-amber-400 duration-150"
            to=" "
          >
            Category
          </Link>
          <Link
            className=" text-left mb-5 hover:text-amber-400 duration-150"
            to="/cart"
          >
            Cart
          </Link>
          <Link
            className=" text-left mb-5  hover:text-amber-400 duration-150"
            to="/about"
          >
            About
          </Link>
          <Link
            className=" text-left mb-5  hover:text-amber-400 duration-150"
            to="/login"
          >
            Sign up / Log in
          </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
