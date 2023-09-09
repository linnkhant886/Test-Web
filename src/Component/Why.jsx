import React from "react";
import {SiSololearn} from "react-icons/si"

const Why = () => {
  return (
    <div className="my-40  px-4 lg:px-10">
      <div className=" container mx-auto text-center md:text-start space-y-4">
        <h6 className="font-bold text-teal-600 text-2xl">Remote Desktop Software</h6>
        <h1 className=" font-bold text-5xl md:text-7xl">
          OverComing <br></br> Distance
        </h1>
        <p className=" max-w-lg  font-semibold text-slate-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ut
          cumque a pariatur non ea sunt quis natus quod neque iusto consectetur
          eos assumenda, delectus nesciunt facilis quisquam tenetur! Ut.
        </p>
        <div className=" my-3 text-center flex justify-center md:justify-start ">
          <button className=" flex items-center gap-3  bg-teal-600 px-10 py-3 rounded-full text-white font-serif font-semibold ">
            {" "}
            <SiSololearn> </SiSololearn>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Why;
