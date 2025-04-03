import { useState } from "react";
import Navbar from "./components/Navbar";
import Avatar from "./components/UI/Avatar";
import Header from "./components/Header";
import { users } from "./utils/helper.config";
import TopBar from "./components/TopBar";

const Layout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Analytics");

  const handleSetActiveTab = (activeTab: string) => {
    setActiveTab(activeTab);
  };
  return (
    <div className="flex flex-col lg:flex-row h-full min-h-screen">
      <div className="hidden lg:flex lg:flex-col lg:w-[240px] border-r border-divider-100">
        <div className="flex items-center gap-3 border-b border-divider-100 h-[50px] px-3">
          <div className="flex justify-center items-center h-[50px]">
            <Avatar logo="/vertxLogo.jpeg" />
          </div>

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
          <TopBar activeTab={activeTab} />

          <div className="hidden lg:block  pb-[60px] lg:pb-0">
            <Header currentTab={activeTab} />
          </div>
        </div>
        <div className="flex-1 h-full pb-20 lg:pb-0">
          <div className="p-6">{children}</div>
        </div>
      </div>

      {/* Mobile Navbar at the Bottom */}
      <div className="lg:hidden order-last">
        <Navbar activeTab={activeTab} handleSetActive={handleSetActiveTab} />
      </div>
    </div>
  );
};

export default Layout;
