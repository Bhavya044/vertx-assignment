import React from "react";
import { iconNames } from "../../utils/helper.config";

const iconMap: Record<iconNames, string> = {
  dashboard: "/dashboard.svg",
  analytics: "/analytics.svg",
  activity: "/bell.svg",
  connect: "/globe.svg",
  dealroom: "/connect.svg",
  menu: "/menu.svg",
  "right-arrow": "/right-arrow.svg",
  verifiedBadge: "/Twitter_Verified.png",
  linkedin: "/Linkedin.png",
  twitter: "/Twitter.png",
  gmail: "/Gmail.png",
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
