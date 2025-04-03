import React from "react";
import { iconNames } from "../../utils/helper.config";

const iconMap: Record<iconNames, string> = {
  dashboard: "/icons/dashboard.svg",
  analytics: "/icons/analytics.svg",
  activity: "/icons/bell.svg",
  connect: "/icons/globe.svg",
  dealroom: "/icons/connect.svg",
  menu: "/icons/menu.svg",
  "right-arrow": "/icons/right-arrow.svg",
  verifiedBadge: "/icons/Twitter_Verified.png",
  linkedin: "/icons/Linkedin.png",
  twitter: "/icons/Twitter.png",
  gmail: "/icons/Gmail.png",
};

interface IconProps {
  iconName: keyof typeof iconMap;
  size?: number;
  className?: string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ iconName, size = 24, className }) => {
  const iconSrc = iconMap[iconName];
  if (!iconSrc) {
    return null;
  }

  return (
    <img
      src={iconSrc}
      alt={`${name} icon`}
      width={size}
      height={size}
      className={className}
    />
  );
};

export default Icon;
