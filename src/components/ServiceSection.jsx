import React from "react";
import Button from "../reusable/Button";
import { services } from "../assets/data";
const ServiceSection = () => {
  return (
    <section className="container mx-auto py-15 px-6" id='services'>
      <div className="flex flex-col mt-10 md:flex-row items-center gap-30">
        {/* header */}

        <div className="md:w-1/3  w-full">
          <h2 className="text-2xl font-bold">
            Future of support with new shape
          </h2>
          <p>Discuss your needs and how we can help you achieve your goals.</p>

          <div className="space-y-3">
            <div className=" flex items-center gap-2">
              <div className="w-4 h-4 rounded-full flex items-center">
                <div className="w-3.5 h-3.5 bg-indigo-600 rounded-full"></div>
              </div>
              <span className="text-gray-800">UX Design & Prototyping</span>
            </div>
            <div className=" flex items-center gap-2">
              <div className="w-4 h-4 rounded-full flex items-center">
                <div className="w-3.5 h-3.5 bg-indigo-600 rounded-full"></div>
              </div>
              <span className="text-gray-800">Development Bring</span>
            </div>
          </div>

          <button className="rounded-full  bg-blue-600 cursor-pointer px-4 py-2 mt-8 text-white hover:bg-blue-700">
            Get started
          </button>
        </div>

        {/* service card */}

        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-30">
          {services.map((service, index) => (
            <div
              key={index}
              className="max-w-72  bg-gray-50 shadow-md rounded-md cursor-pointer hover:scale-100 hover:shadow-xl transition-all duration-300 p-6"
            >
              <div>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a className="text-sm text-indigo-500">LEARN MORE</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
