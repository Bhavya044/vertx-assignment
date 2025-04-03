import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Avatar from "./components/UI/Avatar";
import Header from "./components/Header";

const users = [
  { name: "Bhavya Suri", isOnline: true },
  { name: "John Doe", isOnline: false },
  { name: "Alice Smith", isOnline: true },
];

const Layout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Analytics");

  const handleSetActiveTab = (activeTab: string) => {
    setActiveTab(activeTab);
  };
  return (
    <div className="flex flex-col lg:flex-row h-full min-h-screen">
      {/* Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-[240px] border-r border-divider-100">
        <div className="flex items-center gap-3 border-b border-divider-100 h-[50px] px-3">
          {/* Logo */}
          <div className="flex justify-center items-center h-[50px]">
            <Avatar logo="/vertxLogo.jpeg" />
          </div>

          {/* Company Name */}
          <span className="font-bold text-lg ml-7.5">Vertxlabs, Inc</span>
        </div>

        {/* Sidebar Users & Navbar */}
        <div className="flex h-full">
          {/* User Avatars Sidebar */}
          <div className="hidden lg:flex flex-col items-center w-[50px] border-r border-divider-100">
            {users.map((user, index) => (
              <div
                key={user.name}
                className={`flex justify-center items-center h-[50px] w-full border-b border-divider-100 ${
                  index === 0 ? "bg-[#2c2323]" : "bg-black"
                }`}
              >
                <Avatar name={user.name} isOnline={user.isOnline} />
              </div>
            ))}
          </div>

          {/* Navbar */}
          <div className="ml-6">
            <Navbar
              handleSetActive={handleSetActiveTab}
              activeTab={activeTab}
            />
          </div>
        </div>
      </div>

      {/* Header (for both mobile & desktop) */}
      <div className="w-full block lg:hidden">
        <Header currentTab={activeTab} setCurrentTab={setActiveTab} />
      </div>

      {/* Main Content */}
      <div className="flex-1 h-full">
        <div className="flex flex-col">
          {/* Top Bar */}
          <div className="lg:flex hidden items-center justify-between h-[50px] px-8 border-b border-divider-100 text-base">
            <span className="font-semibold">{activeTab}</span>

            <div className="flex items-center gap-6">
              <div className="h-[50px] flex items-center px-8 py-2.5 text-center border-x border-divider-100">
                Activity
              </div>
              <span className="cursor-pointer hover:text-gray-400">
                Log out
              </span>
            </div>
          </div>

          {/* Header */}
          <div className="hidden lg:block">
            <Header currentTab={activeTab} />
          </div>
        </div>

        {children}
      </div>

      {/* Mobile Navbar at the Bottom */}
      <div className="lg:hidden order-last">
        <Navbar activeTab={activeTab} handleSetActive={handleSetActiveTab} />
      </div>
    </div>
  );
};

export default Layout;
