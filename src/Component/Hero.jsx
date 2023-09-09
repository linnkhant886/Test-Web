import React from "react";

const Hero = () => {
  return (
    <div className=" my-40">
      <section>
        <div className="  flex justify-center flex-col gap-4 ">
          <div className=" flex flex-col justify-center my-5 gap-3 items-center" >
            <h1 className=" text-8xl font-semibold text-center">
              Acess.
              <span className=" text-teal-600 block md:inline-block">Now.</span>
            </h1>
            <p className=" text-center font-semibold max-w-md md:max-w-full  text-slate-500">
              Acess any device at anytime. From anywhere .Always secure and fast
            </p>
          </div>

          <div className=" flex   justify-center gap-3  flex-col md:flex-row items-center">
            <button className=" bg-teal-600 px-10 py-3 rounded-full text-white font-serif font-semibold ">
              {" "}
              Download now
            </button>
            <button className=" border-teal-600 px-10 py-3 rounded-full hover:bg-teal-600 border-2    text-teal-600 font-serif font-semibold hover:text-white">
              {" "}
              Order Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
