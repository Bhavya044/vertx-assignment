import React from "react";

interface TabProps {
  tabs: { name: string; id: string }[];
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

const Tabs: React.FC<TabProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="w-full mt-10 lg:mt-0 flex justify-between">
      <div className="flex  w-full justify-evenly lg:justify-start text-white text-sm overflow-x-auto whitespace-nowrap ">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`relative py-3 text-center ${
              index === 0 ? "lg:pr-4" : "lg:px-6"
            } lg:border-r lg:border-divider-100 lg:text-white  ${
              activeTab === tab.id
                ? "font-bold"
                : "text-gray-400 lg:text-inactive-100 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-20 bg-white lg:hidden" />
            )}
          </button>
        ))}
      </div>
      <span className="cursor-pointer hidden  px-6 h-[50px] lg:flex items-center  border-l text-white border-l-divider-100 mr-[-6px] ">
        More
      </span>
    </div>
  );
};

export default Tabs;
