import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "#about" },
    { label: "Services", link: "#services" },
    { label: "Testimonials", link: "#testimonials" },
  ];
  return (
    <motion.nav
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 bg-white/90 z-50 border-b border-gray-100  shadow-md"
    >
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 bg-blue-500 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
          <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
        </div>

        {/* mobile menu items */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-16 border-t border-gray-100 bg-white w-full left-0 py-2 space-y-4 text-lg">
            <div className="container mx-auto px-4 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <a
                  key={item.link}
                  onClick={() => setMenuOpen(false)}
                  href={item.link}
                  className={`block text-md font-medium py-2 text-center ${
                    location.hash === item.link ||
                    (location.pathname === item.link && !location.hash)
                      ? "text-blue-500"
                      : "text-gray-700 hover:text-gray-500"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <button className=" w-full mx-auto bg-blue-500 text-white px-2 py-4 rounded-lg hover:bg-blue-600 transition-all hover:cursor-pointer hover:shadow-lg hover:shadow-blue-300 cursor-pointer">
                Get in touch
              </button>
            </div>
          </div>
        )}

        {/* mobile menu */}
        <button onClick={() => setMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <GiHamburgerMenu className="w-6 h-6" />
          )}
        </button>

        {/* navitems */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <a
              key={item.link}
              href={item.link}
              className={`relative text-gray-600 hover:text-blue-500 font-medium text-sm tracking-wide transition-all duration-300
        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-500
        after:transition-all after:duration-300
        ${
          location.hash === item.link ||
          (location.pathname === item.link && !location.hash)
            ? "after:w-full text-blue-500"
            : "after:w-0 hover:after:w-full"
        }
      `}
            >
              {item.label}
            </a>
          ))}
        </div>
        <button className="hidden md:block bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all hover:cursor-pointer hover:shadow-lg hover:shadow-blue-300">
          Get in touch
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
