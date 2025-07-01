import React from "react";
import monitorImage from "../assets/monitor-card.png";
import { IoArrowForward } from "react-icons/io5";
const MonitorSection = () => {
  return (
    <section className=" py-16 max-w-7xl px-4 container mx-auto">
      <div className=" flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-20">
        {/* left div  */}
        <div className="w-1/2 ">
          <p className="text-green-500 font-bold mb-2">INSIGHT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 sm:text-2xl md:w-4/5">
            Experience the Ultimate Mobile Monitoring
          </h2>
          <p className="text-gray-700 mt-2 sm:text-xl mb-8">
            Stay informed and in control with our intuitive mobile monitoring
            solutions. Track, analyze, and optimize your operations anytime,
            anywhere.
          </p>

          <a
            href="#"
            className="text-blue-500 flex items-center font-semibold gap-2 hover:gap-4 transition-all duration-300 text-lg"
          >
            Discover how it works
            <IoArrowForward className="size-6" />
          </a>
        </div>

        {/* right div */}
        <div className=" md:w-1/2 w-full">
          <img
            src={monitorImage}
            alt="schedule image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default MonitorSection;
