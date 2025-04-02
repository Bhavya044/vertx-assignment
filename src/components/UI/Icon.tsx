import React from "react";
import { iconNames } from "../../utils/helper.config";

const iconMap: Record<iconNames, string> = {
  dashboard: "/dashboard.svg",
  analytics: "/analytics.svg",
  activity: "/bell.svg",
  connect: "/globe.svg",
  dealroom: "/connect.svg",
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
      style={{ outline: "2px solid black" }}
    />
  );
};

export default Icon;
