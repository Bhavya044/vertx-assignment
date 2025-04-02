import React from "react";
import Navbar from "./components/UI/Navbar";
import Avatar from "./components/UI/Avatar";

const users = [
  { name: "Bhavya Suri", isOnline: true },
  { name: "John Doe", isOnline: false },
  { name: "Alice Smith", isOnline: true },
];

const Layout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row h-full min-h-screen">
      {/* Navbar on the left for desktop, bottom for mobile */}

      <div className="lg:order-first lg:w-1/5 xs:h-full hidden lg:flex">
        <div className="hidden lg:flex flex-col items-center  w-[50px] border-r border-r-divider-100">
          {users.map((user, index) => (
            <div
              key={user.name}
              className={`border-b border-b-divider-100 flex justify-center items-center h-[50px] w-full ${
                index === 0 ? "bg-[#2c2323]" : "bg-black"
              }`}
            >
              <Avatar name={user.name} size="sm" isOnline={user.isOnline} />
            </div>
          ))}
        </div>
        <Navbar activeTab="Analytics" />
      </div>
      <div className="order-last lg:hidden">
        <Navbar activeTab="Analytics" />
      </div>

      {/* Main content area */}
      <div className="flex-1 h-full">{children}</div>
    </div>
  );
};

export default Layout;
