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
      <div className="lg:order-first lg:w-[240px] xs:h-full hidden lg:flex lg:flex-row  border-r border-r-divider-100 ">
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-3 border-b border-divider-100 w-full">
            {/* Logo inside a fixed-size container */}
            <div
              className={` flex justify-center items-center  h-[50px] w-[72px]`}
            >
              <Avatar logo="/vertxLogo.jpeg" />
            </div>

            {/* Company Name */}
            <span className="font-bold ml-3 text-lg  w-full">
              Vertxlabs, Inc
            </span>
          </div>
          <div className="flex h-full">
            <div className="hidden lg:flex flex-col items-center  w-[50px] border-r border-r-divider-100">
              {users.map((user, index) => (
                <div
                  key={user.name}
                  className={`border-b border-b-divider-100 flex justify-center items-center h-[50px] w-full ${
                    index === 0 ? "bg-[#2c2323]" : "bg-black"
                  }`}
                >
                  <Avatar name={user.name} isOnline={user.isOnline} />
                </div>
              ))}
            </div>
            <div className="ml-6">
              <Navbar activeTab="Analytics" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="order-last lg:hidden">
        <Navbar activeTab="Analytics" />
      </div>
      <div className="flex-1 h-full">{children}</div>
    </div>
  );
};

export default Layout;
