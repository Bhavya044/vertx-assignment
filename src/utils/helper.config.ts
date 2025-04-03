export type iconNames =
  | "dashboard"
  | "analytics"
  | "connect"
  | "activity"
  | "dealroom"
  | "menu"
  | "right-arrow";

export const users = [
  { name: "Bhavya Suri", isOnline: true },
  { name: "John Doe", isOnline: false },
  { name: "Alice Smith", isOnline: true },
];

export const mobileNavbarTabs: {
  iconName: iconNames;
  tabName: string;
  redirect?: string;
}[] = [
  { iconName: "dashboard", tabName: "Dashboard" },
  {
    iconName: "analytics",
    tabName: "Analytics",
    redirect: "/analytics/overview",
  },
  { iconName: "connect", tabName: "Connect" },
  { iconName: "activity", tabName: "Activity" },
  { iconName: "dealroom", tabName: "Dealroom" },
];

export const desktopNavbarTabs: {
  iconName?: iconNames;
  tabName: string;
  redirect?: string;
}[] = [
  { iconName: "dashboard", tabName: "Dashboard" },
  {
    iconName: "analytics",
    tabName: "Analytics",
    redirect: "/analytics/overview",
  },
  { iconName: "connect", tabName: "Connect" },
  { iconName: "dealroom", tabName: "Dealroom" },
  { tabName: "Profile", redirect: "/profile/overview" },
  { tabName: "Settings" },
];

export const countryData = [
  {
    country: "India",
    flag: "/flags/India.png",
    percentage: 40,
    color: "rgba(72, 52, 212, 1)",
  },
  {
    country: "USA",
    flag: "/flags/USA.png",
    percentage: 25,
    color: "rgba(189, 83, 2, 1)",
  },
  {
    country: "Canada",
    flag: "/flags/canada.png",
    percentage: 10,
    color: "rgba(233, 193, 107, 1)",
  },
  {
    country: "UAE",
    flag: "/flags/uae.jpg",
    percentage: 7,
    color: "rgba(87, 149, 96, 1)",
  },
];
