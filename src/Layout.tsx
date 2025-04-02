import React from "react";
import Navbar from "./components/UI/Navbar";

const Layout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row h-full min-h-screen">
      {/* Navbar on the left for desktop, bottom for mobile */}
      <div className="order-last lg:order-first lg:w-1/5 xs:h-full">
        <Navbar activeTab="Analytics" />
      </div>

      {/* Main content area */}
      <div className="flex-1 h-full">{children}</div>
    </div>
  );
};

export default Layout;
