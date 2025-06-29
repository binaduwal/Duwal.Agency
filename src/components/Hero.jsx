import React from "react";
import heroImg from "../assets/hero-image.png";
const Hero = () => {
  return (
    <section className="container mx-auto pt-38 flex flex-col  md:flex-row items-center justify-between pb-6 px-4 sm:px-6 lg:px-8">
      {/* left col */}
      <div className="w-full md:w-1/2 space-y-">
        <div className="flex items-center gap-2 bg-gray-50 py-2 w-fit rounded-full px-4 cursor-pointer group">
          <span className="text-blue-400 text-xl pr-2 group-hover:text-amber-300 group:hover:scale-105 transition-all duration-300">
            ★
          </span>
          <span>Unlock Your Business Potential</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
          Fuel growth for {""}
          <span className="text-blue-400 relative inline-block">
            all-in-one
          </span>{" "}
          growth platform.
          <span className="animate-pulse inline-block ml-2 text-5xl">⏰</span>
        </h1>
        <p className="text-gray-600 text-xl md:text-lg max-w-xl">
          Unlock smarter leads, seamless sales tools, and powerful support in
          one platform.
        </p>

        <div className="flex gap-2 max-w-md">
          <input
            type="email"
            placeholder="Enter your email "
            className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
          ></input>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300">
            →
          </button>
        </div>
      </div>

      {/* right col */}
      <div className="w-full md:w-1/2 flex mt-6 justify-center items-center">
        <div className="relative">
          <img
            src={heroImg}
            alt="heroImg"
            className="relative rounded-lg z-10 hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
