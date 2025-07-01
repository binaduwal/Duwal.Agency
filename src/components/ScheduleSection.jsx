import React from "react";
import ScheduleImage from "../assets/ScheduleImage.png";
import { IoArrowForward } from "react-icons/io5";
const ScheduleSection = () => {
  return (
    <section className=" py-16 max-w-7xl px-4 container mx-auto">
      <div className=" flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-20">
        {/* left div  */}
        <div className=" md:w-1/2 w-full">
          <img
            src={ScheduleImage}
            alt="schedule image"
            className="w-full h-auto"
          />
        </div>

        {/* right div */}
        <div className="w-1/2 ">
          <p className="text-orange-600 font-bold mb-2">OUR SERVICES</p>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-2xl">
            Optimize Your Workflow <br /> With Powerful Scheduling Tools
          </h2>
          <p className="text-gray-700 mt-2 sm:text-xl mb-8">
            Discover efficient ways to manage your business schedule
            effortlessly. Our solutions help you save time, reduce errors, and
            improve productivity.
          </p>

          <a
            href="#"
            className="text-blue-500 flex items-center font-semibold gap-2 hover:gap-4 transition-all duration-300 text-lg"
          >
            Learn more about our features
            <IoArrowForward className="size-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
