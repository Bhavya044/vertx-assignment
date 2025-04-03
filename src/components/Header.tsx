import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for routing
import Avatar from "./UI/Avatar";
import Tabs from "./UI/Tabs";
import Icon from "./UI/Icon";

const tabGroups: Record<string, { name: string; id: string }[]> = {
  Analytics: [
    { name: "Overview", id: "overview" },
    { name: "Reports", id: "reports" },
    { name: "Demographics", id: "demographics" },
  ],
  Profile: [
    { name: "Overview", id: "overview" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Experience", id: "experience" },
    { name: "Media", id: "media" },
  ],
};

interface HeaderProps {
  currentTab: string;
  setCurrentTab?: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentTab, setCurrentTab }) => {
  const tabs = tabGroups[currentTab] || [];
  const navigate = useNavigate(); // Initialize navigation
  const [activeTab, setActiveTab] = useState(tabs.length > 0 ? tabs[0].id : "");

  useEffect(() => {
    setActiveTab(tabs[0]?.id);
  }, [currentTab]);

  useEffect(() => {
    if (currentTab === "Analytics" && activeTab === "overview") {
      navigate("/analytics/overview"); // Push navigation route
    } else if (currentTab === "Profile" && activeTab === "overview") {
      navigate("/profile/overview"); // Push navigation rout
    } else {
      navigate("/");
    }
  }, [currentTab, activeTab, navigate]);

  return (
    <header className="w-full">
      {/* Mobile View */}
      <div className="lg:hidden p-2.5">
        <div className="flex items-center justify-between">
          <Avatar
            name="Bhavya Suri"
            onClick={() => setCurrentTab?.("Profile")}
          />
          <img src="/Vertx-New.png" alt="Logo" className="h-8 w-8" />
          <Icon iconName="menu" size={30} className="border-0" />
        </div>
        {/* Tabs Below Navbar */}
        {tabs.length > 0 && (
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex lg:flex-row items-center border-b px-8 border-b-divider-100">
        {tabs.length > 0 && (
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
      </div>
    </header>
  );
};

export default Header;
