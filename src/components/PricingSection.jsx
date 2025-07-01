import React, { useState } from "react";
import Button from "../reusable/Button";
const PricingSection = () => {
  const [productCount, setProductCount] = useState(1);
  const starterPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));
  return (
    <section className=" py-16 px-6">
      <div className="max-w-7xl mx-auto  ">
        <div className="text-center text-3xl md:text-4xl font-semibold">
          <h2>Pricing</h2>

          <div className="grid  grid-cols-1  mt-5 md:grid-cols-2 gap-8 mb-10">
            {/* starter plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl text-gray-600">Starter</h3>
              <p className="text-3xl font-bold mb-6">${starterPrice}/mo</p>
            </div>

            {/* business plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl text-gray-600">Business</h3>
              <p className="text-3xl font-bold mb-6">${businessPrice}/mo</p>
            </div>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <p className="text-center text-gray-600 mb-4">
            {productCount} products
          </p>
          <div className="relative px-4">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-500">1</span>
              <input
                type="range"
                min="1"
                max="100"
                value={productCount}
                onChange={(e) => setProductCount(parseInt(e.target.value))}
                className="flex-1 h-2 rounded-lg cursor-pointer appearance-none bg-gray-200"
              />
              <span className="text-xs sm:text-sm text-gray-500">50</span>
            </div>
          </div>

          <div className="text-center mt-5">
            <p>Ready to get started</p>
            <Button onClick={() => {}}>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
