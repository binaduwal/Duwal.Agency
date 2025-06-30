import React from 'react'
import { features } from '../assets/data';
const FeatureSection = () => {
  return (
    <section className="max-w-7xl  mx-auto py-16 px-4 sm:px-6 lg:px-8 ">
      <div className=" text-center">
        <h2 className="text-3xl font-bold mb-4">
          How can we help your business?
        </h2>
        <p className="text-gray-700">
          When you sell besnik,you build trust and increase
        </p>
      </div>

      <div className=" grid grid-cols-3 gap-8 py-6 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 text-center "
          >
            <div
              className="w-24 h-24  rounded-full flex items-center mb-6 justify-center"
              style={{
                backgroundColor:
                  index === 0 ? "#FEEBF6" : index === 1 ? "#FFFBDE" : "#BBFBFF",
              }}
            >
              <div className="text-3xl">{feature.icon}</div>
            </div>
            <div className="font-bold text-xl mb-2">{feature.title}</div>
            <div className="text-gray-700 mb-4">{feature.description}</div>
          </div>
        ))}
      </div>

      {/* button */}
      <div className="item-center flex justify-center">
        <button className="bg-blue-600 text-white cursor-pointer py-3 px-6  hover:bg-blue-700 transition-colors rounded-full mt-8  font-semibold text-lg relative">
          Become a partner
        <div className="absolute z-10 w-full h-full rounded-full bg-blue-600/20 blur-xl top-0 left-0 shadow-2xl "></div>
        </button>
      </div>
    </section>
  );
}

export default FeatureSection
