import React from "react";

const CountrySelector: React.FC = () => {
  return (
    <div className="md:flex hidden space-x-[28px] absolute bottom-0 left-[180px] transform -translate-x-1/2 border border-divider-100 bg-black py-1.5 px-5 rounded-full">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
        <span className="text-white text-xs">India</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
        <span className="text-white text-xs">USA</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <span className="text-white text-xs">Canada</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
        <span className="text-white text-xs">UAE</span>
      </div>
    </div>
  );
};

export default CountrySelector;
