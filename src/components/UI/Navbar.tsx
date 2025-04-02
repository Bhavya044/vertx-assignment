import useIsMobile from "../../hooks/useIsMobile";
import { desktopNavbarTabs, mobileNavbarTabs } from "../../utils/navbar.config";
import Icon from "./Icon";

interface INavbar {
  activeTab: string;
}
const Navbar: React.FC<INavbar> = ({ activeTab }) => {
  const isMobile = useIsMobile();
  const navTabs = isMobile ? mobileNavbarTabs : desktopNavbarTabs;
  return (
    <div className="border-t border-t-divider-100 lg:border-0 py-4 px-7 h-full ">
      <div className="flex justify-between flex-row lg:flex-col h-full sm:h-1/2 ">
        {navTabs?.map((tab) => (
          <div className="flex flex-col justify-center items-center  lg:items-start h-full gap-1.5 xs:gap-4">
            {tab.iconName ? (
              <Icon
                iconName={tab.iconName}
                color="white"
                className="block lg:hidden"
                size={35}
              />
            ) : null}
            <span
              className={`text-gray-300 ${
                activeTab === tab.tabName
                  ? "lg:text-gray-300"
                  : "lg:text-inactive-100"
              } lg:text-sm tracking-widest`}
            >
              {" "}
              {tab.tabName}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
