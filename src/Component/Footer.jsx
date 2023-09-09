import React from "react";
import { AiFillAndroid } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="  bg-slate-900 py-6 ">
      <div className=" container mx-auto text-white">
        <div className=" flex flex-col md:flex-row md:justify-between md:px-10 gap-4  md:items-center">

          <div className=" text-white flex items-center gap-2 justify-center text-2xl">
            <AiFillAndroid size={30} className="text-teal-600"></AiFillAndroid>
            <h1 className="text-teal-600 font-bold" >Vanilla</h1>
          </div>

          <div className=" font-semibold  flex  justify-around  md:gap-6 md:space-x-0 items-center">
            <h1>privacy Notic</h1>
            <h1>Contact</h1>
            <h1>Why Love</h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
