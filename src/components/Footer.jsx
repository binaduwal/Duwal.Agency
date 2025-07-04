import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { footerLinks } from "../assets/data";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm">
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left Side - Logo, Description, Social */}
          <div className="lg:w-1/3">
            {/* Brand Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1 cursor-pointer">
                <div className="w-4 h-4 bg-blue-500 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
              </div>
              <span className="text-black font-semibold text-xl">Duwal Agency</span>
            </div>

            <p className="text-gray-600 mb-4">
              The copy warned the little children, because they were old; and the
              children had all their tools.
            </p>

            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaLinkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-black hover:bg-blue-500 hover:text-white transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:w-2/3">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="font-semibold mb-3 capitalize">{section}</h4>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-10 pt-4 flex flex-col md:flex-row justify-between text-gray-500 text-xs">
          <p>© 2023 Duwal Agency. All rights reserved.</p>
          <p>Created by Duwal Agency</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
