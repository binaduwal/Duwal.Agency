import React from "react";

const NewsLetterSection = () => {
  return (
    <section className="container nx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-blue-600 rounded-2xl overflow-hidden">
        <div className="relative md:px-16 py-16 px-6 md:py-24">
          {/* gradient bg */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-800"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-12">
            <div className="text-white max-w-lg">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                Subscribbe newsletter
              </h2>
              <p className="text-blue-200 mb-4">
                Best cooks and best delivery guys all at your service. Hot tasty
                food
              </p>
            </div>

            {/* right content */}
            <div className="flex flex-col items-center sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:auto md:w-80 px-4 py-3  bg-white focus:outline rounded-l-xl mb-4 text-black sm:mb-0"
              />

              <button className=" sm:auto  px-4 py-3 rounded-r-xl  bg-blue-600 text-white focus:outline-none hover:bg-blue-700 cursor-pointer flex">
                Discovery
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSection;
