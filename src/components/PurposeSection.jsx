import React from "react";
import { purpose } from "../assets/data";
const PurposeSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16 scroll-mt-16 md:scroll-mt-0" id="about">
      <div className="container mx-auto px-4 lg:px-32 xl:px-48">
        <div className="grid md:grid-cols-3 grid-col-1 gap-10">
          <div>
            <p className="text-purple-600 font-medium text-sm mb-2">
              ACHIEVE MORE
            </p>
            <h2 className="w-full md:w-4/5 md:text-2xl font-bold">
              Purpose of a convey is to keep your teaam
            </h2>
          </div>

          <div className="col-span-2 grid grid-cols-2 justify-between gap-4">
            {purpose.map((item, index) => (
                <div   key={index}className="flex space-x-4">
                <div className="text-2xl -mt-20 flex items-center justify-start  rounded-full ">
                  {item.icon}

                </div>
                  <div >
                    <h3 className="text-xl text-gray-900 mb-2 ">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                </div>
                  </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
