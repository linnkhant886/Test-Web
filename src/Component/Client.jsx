import React from "react";

const Client = () => {
  return (
    <div className=" my-40">
      <div className=" container mx-auto">
        <div className=" flex flex-col md:flex-row gap-8 md:justify-around">

          <div className="text-center  space-y-2 ">
            <h1 className="font-bold text-4xl text-teal-600">500+ Millions</h1>
            <h1 className=" font-semibold text-slate-800 text-xl">Download</h1>
          </div>
          <div  className="text-center space-y-2" >
            <h className="font-bold text-4xl text-teal-600">400+ Millions</h>
            <p  className="text-xl font-semibold text-slate-800">Session Per Month</p>
          </div>
          <div className="text-center space-y-2">
            <h1 className="font-bold text-4xl text-teal-600">300+ Millions</h1>
            <p  className="text-xl font-semibold text-slate-800">Bridged miles per month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
