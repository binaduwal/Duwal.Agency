import React from "react";
import heroImg from "../assets/hero-image.png";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
const Hero = () => {
  return (
    <section className="container mx-auto pt-38 flex flex-col  md:flex-row items-center justify-between pb-6 px-4 sm:px-6 lg:px-8">
      {/* left col */}
      <div className="w-full md:w-1/2 space-y-8 -mt-10 mb-20">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <div className="flex items-center gap-2 bg-gray-50 py-2 w-fit rounded-full px-4 cursor-pointer group">
            <span className="text-blue-400 text-xl pr-2 group-hover:text-amber-300 group:hover:scale-105 transition-all duration-300">
              ★
            </span>
            <span>Unlock Your Business Potential</span>
          </div>
        </motion.div>

        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800"
        >
          Fuel growth for {""}
          <span className="text-blue-400 relative inline-block">
            all-in-one
          </span>{" "}
          growth platform.
          <span className="animate-pulse inline-block ml-2 text-5xl">⏰</span>
        </motion.h1>

        <motion.p
          variants={textVariant(0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-xl md:text-lg max-w-xl"
        >
          Unlock smarter leads, seamless sales tools, and powerful support in
          one platform.
        </motion.p>

        <motion.div
          variants={textVariant(0.6)}
          initial="hidden"
          whileInView="show"
          className="flex gap-2 max-w-md"
        >
          <input
            type="email"
            placeholder="Enter your email "
            className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
          ></input>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300">
            →
          </button>
        </motion.div>
      </div>

      {/* right col */}
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 flex mt-6 justify-center items-center z-10"
      >
        <div className="relative">
          <img
            src={heroImg}
            alt="heroImg"
            className="relative rounded-lg z-10 hover:scale-105 brightness-80 opacity-90 transition-all duration-300"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
