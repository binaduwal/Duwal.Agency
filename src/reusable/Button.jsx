import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 mt-3 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
