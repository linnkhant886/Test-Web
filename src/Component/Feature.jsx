import React from "react";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { TbMessageSearch } from "react-icons/tb";

const Feature = () => {
  return (
    <div className=" my-40">
      <div className=" container mx-auto">
        <div className=" grid md:grid-cols-2 px-4 gap-6">
          <div className=" grid md:grid-cols-2 gap-4">
            <div className=" text-center border   border-transparent duration-500 p-5 rounded-lg   max-w-sm mx-auto  hover:border-green-400">
              <div className=" flex justify-center">
                <HiMiniRocketLaunch
                  size={40}
                  className=" text-teal-500"
                ></HiMiniRocketLaunch>
              </div>
              <h1 className=" font-bold text-teal-700 text-xl">Blazing Fast</h1>
              <p className=" font-semibold text-slate-500  ">
                {" "}
                Minimun Latancy Via our own DeskRT code frame Rode of 60 Fps{" "}
              </p>
            </div>
            <div className=" text-center border  border-transparent duration-500  p-5 rounded-lg   max-w-sm mx-auto  hover:border-green-400">
              <div className=" flex justify-center">
                <HiMiniRocketLaunch
                  size={40}
                  className=" text-teal-500"
                ></HiMiniRocketLaunch>
              </div>
              <h1 className=" font-bold text-teal-700 text-xl">Blazing Fast</h1>
              <p className=" font-semibold text-slate-500  ">
                {" "}
                Minimun Latancy Via our own DeskRT code frame Rode of 60 Fps{" "}
              </p>
            </div>

            <div className=" text-center border    border-transparent duration-500 p-5 rounded-lg   max-w-sm mx-auto  hover:border-green-400">
              <div className=" flex justify-center">
                <HiMiniRocketLaunch
                  size={40}
                  className=" text-teal-500"
                ></HiMiniRocketLaunch>
              </div>
              <h1 className=" font-bold text-teal-700 text-xl">Blazing Fast</h1>
              <p className=" font-semibold text-slate-500  ">
                {" "}
                Minimun Latancy Via our own DeskRT code frame Rode of 60 Fps{" "}
              </p>
            </div>

            <div className=" text-center border   border-transparent duration-500  p-5 rounded-lg   max-w-sm mx-auto  hover:border-green-400">
              <div className=" flex justify-center">
                <HiMiniRocketLaunch
                  size={40}
                  className=" text-teal-500"
                ></HiMiniRocketLaunch>
              </div>
              <h1 className=" font-bold text-teal-700 text-xl">Blazing Fast</h1>
              <p className=" font-semibold text-slate-500  ">
                {" "}
                Minimun Latancy Via our own DeskRT code frame Rode of 60 Fps{" "}
              </p>
            </div>

            
          </div>
                {/* ---500user part */}
          <div className=" flex flex-col justify-center items-center gap-8">
           <h1 className=" text-5xl font-bold text-teal-700 text-center md:max-w-sm"> Why 500+ million user love anydesk</h1>
            <div className=" my-3 text-center flex justify-center md:justify-start ">
              <button className=" flex items-center gap-3  bg-teal-600 px-10 py-3 rounded-full text-white font-serif font-semibold ">
                {" "}
                <TbMessageSearch size={20}></TbMessageSearch>
                Discover
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
