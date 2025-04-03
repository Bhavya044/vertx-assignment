import React from "react";

interface AvatarProps {
  name?: string;
  isOnline?: boolean;
  logo?: string;
  onClick?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({
  name,
  isOnline = false,
  logo,
  onClick,
}) => {
  const initials = name
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative inline-block" onClick={() => onClick?.()}>
      <div
        className={`flex items-center text-xs justify-center rounded-full h-[30px] w-[30px] bg-gray-700 text-white font-semibold`}
      >
        {logo ? (
          <img
            src={logo}
            alt={name}
            className="rounded-full object-cover w-full h-full"
          />
        ) : (
          initials
        )}
      </div>

      {/* Status Dot */}
      {!logo ? (
        <span
          className="absolute bottom-0 right-0 w-2 h-2 rounded-full flex items-center justify-center 
        text-xs font-bold text-white"
          style={{ backgroundColor: isOnline ? "#22C55E" : "#EF4444" }}
        />
      ) : null}
    </div>
  );
};

export default Avatar;
