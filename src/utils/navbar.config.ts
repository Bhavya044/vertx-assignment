import { iconNames } from "./helper.config";

export const mobileNavbarTabs: { iconName: iconNames; tabName: string }[] = [
  { iconName: "dashboard", tabName: "Dashboard" },
  { iconName: "analytics", tabName: "Analytics" },
  { iconName: "connect", tabName: "Connect" },
  { iconName: "activity", tabName: "Activity" },
  { iconName: "dealroom", tabName: "Dealroom" },
];

export const desktopNavbarTabs: { iconName?: iconNames; tabName: string }[] = [
  { iconName: "dashboard", tabName: "Dashboard" },
  { iconName: "analytics", tabName: "Analytics" },
  { iconName: "connect", tabName: "Connect" },
  { iconName: "dealroom", tabName: "Dealroom" },
  { tabName: "Profile" }, // Only on large screens
  { tabName: "Settings" }, // Only on large screens
];
