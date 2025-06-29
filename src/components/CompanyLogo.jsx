import React from "react";
import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import sitepoint from "../assets/sitepoint.png";
import woocommerce from "../assets/woocommerce.png";

const CompanyLogo = () => {
  const logos = [slack, sitepoint, woocommerce, amazon];

  return (
<div className="container mx-auto flex items-center gap-8 overflow-hidden">
  {/* Left text */}
  <div className="border-l-4 border-blue-500 px-4 bg-white text-gray-500 py-2 text-xl  font-semibold pl-6 whitespace-nowrap">
    Proud partner at <br />
    Hubspot & Segment
  </div>

  {/* Right scrolling logos */}
  <div className="overflow-hidden flex-1">
    <div className="animate-marquee flex gap-16">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="w-32 h-8 flex items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
        >
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>
      ))}
      {logos.map((logo, index) => (
        <div
          key={index}
          className="w-32 h-8 flex items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
        >
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default CompanyLogo;
