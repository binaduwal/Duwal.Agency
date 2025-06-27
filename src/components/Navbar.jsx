import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const location=useLocation();
  console.log(location.pathname);
  const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Services", link: "/services" },
    { label: "Contact", link: "/contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 z-50 border-b border-gray-100  shadow-md">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 bg-blue-500 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
          <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
        </div>

        {/* mobile menu items */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-16 border-t border-gray-100 bg-white w-full left-0 py-2 space-y-4 text-lg">
            <div className="container mx-auto px-4 space-x-2 ">
              {navItems.map((item, index) => (
                <Link
                  onClick={() => {
                    setActiveLink(item.label);
                    setMenuOpen(false);
                  }}
                  key={index}
                  to={item.link}
                  className={`block text-md font-medium py-2 ${
                    location.pathname === item.link
                      ? "text-blue-500"
                      : "text-gray-700 hover:text-gray-500"
                  }`}
                >
                  {item.label}
                </Link>
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
        <div className=" hidden md:flex items-center gap-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={() => setActiveLink(item.label)}
              className={`text-sm  font-medium relative after:bottom-0  after:content-[''] 
                after:absolute after:left-0 after:h-0.5 hover:after:w-full after:bg-blue-600 after:transition-all ${
                  activeLink === item.label
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                } `}
            >
              {item.label}
            </a>
          ))}
        </div>
        <button className="hidden md:block bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all hover:cursor-pointer hover:shadow-lg hover:shadow-blue-300">
          Get in touch
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
