import React from "react";

const TopBar: React.FC<{ activeTab: string }> = ({ activeTab }) => {
  return (
    <div className="lg:flex hidden items-center justify-between h-[50px] px-8 border-b border-divider-100 text-base">
      <span className="font-semibold">{activeTab}</span>
      <div className="flex items-center gap-6">
        <div className="h-[50px] flex items-center px-8 py-2.5 text-center border-x border-divider-100">
          Activity
        </div>
        <span className="cursor-pointer hover:text-gray-400">Log out</span>
      </div>
    </div>
  );
};

export default React.memo(TopBar); // Prevent unnecessary re-renders
