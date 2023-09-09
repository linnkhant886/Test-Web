import React, { useState } from "react";
import { AiFillAndroid } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { FaExpandArrowsAlt } from "react-icons/fa";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const [change, Setchange] = useState(false);

  const dark = () => Setchange(!change)

  const toggler =() => {
    setnav(!nav)
    console.log(ok)
  }
  return (
    <div className=" py-5  bg-teal-100 ">
      <div className=" flex justify-between items-center px-4 ">
        <div className=" flex gap-1 items-center ">
          <span className=" text-teal-600 ">
            <AiFillAndroid size={30}></AiFillAndroid>
          </span>
          <h1 className=" font-bold text-teal-600">Android</h1>
        </div>
        <div className=" hidden md:flex  ">
          <ul className=" flex gap-10 font-bold text-slate-800 ">
            <li>Home</li>
            <li>Why</li>
            <li>Feature</li>
            <li>Client</li>
          </ul>
        </div>
        <div className=" flex  items-center gap-2  ">
          <input type="checkbox" className="toggle toggle-success" onClick={dark} />

          <div className=" md:hidden z-10 text-teal-700 " onClick={toggler}>
            {!nav ? <FaBars size={20}></FaBars> : <FaExpandArrowsAlt  size={20}></FaExpandArrowsAlt>}
          </div>
        </div>
        <ul className={!nav ?"hidden " : "  absolute  top-0 left-0 bg-teal-100 h-screen w-full text-slate-600 flex flex-col justify-center items-center gap-16 cursor-pointer"}>
          <li className=" text-4xl">Home</li>
          <li className=" text-4xl">Why</li>
          <li className=" text-4xl">Feature</li>
          <li className=" text-4xl">Client</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
