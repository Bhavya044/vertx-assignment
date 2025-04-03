import { useNavigate } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
import { desktopNavbarTabs, mobileNavbarTabs } from "../utils/helper.config";
import Icon from "./UI/Icon";

interface INavbar {
  activeTab: string;
  handleSetActive: (active: string) => void;
}

const Navbar: React.FC<INavbar> = ({ activeTab, handleSetActive }) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const navTabs = isMobile ? mobileNavbarTabs : desktopNavbarTabs;

  return (
    <div
      className="border-t border-divider-100 lg:border-0 lg:p-0 p-2 
      lg:static fixed bottom-0 left-0 w-full bg-black"
    >
      <div className="flex justify-between lg:flex-col h-full lg:h-[282px] mt-4 mb-2.5 mx-4">
        {navTabs?.map((tab) => (
          <div
            key={tab.tabName}
            onClick={() => {
              handleSetActive(tab.tabName);
              navigate(tab?.redirect ?? "/");
            }}
            className="flex flex-col justify-center items-center cursor-pointer lg:items-start h-full gap-0.5"
          >
            {tab.iconName ? (
              <Icon
                iconName={tab.iconName}
                color="white"
                className="block lg:hidden"
                size={32}
              />
            ) : null}
            <span
              className={`text-gray-300 ${
                activeTab === tab.tabName
                  ? "lg:text-gray-300"
                  : "lg:text-inactive-100"
              } lg:text-sm  text-xs`}
            >
              {tab.tabName}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
