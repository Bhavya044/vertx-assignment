import React from "react";
import Card from "../../UI/Card";
import Icon from "../../UI/Icon";
import Label from "../../UI/Label";

interface ProfileCardProps {
  name: string;
  role: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role }) => {
  return (
    <Card>
      <div className="flex flex-col md:flex-row md:gap-9 space-y-3.5">
        <img src="/Rectangle.png" className="h-36 w-36" />
        <div className="flex flex-col w-full">
          <div className="flex items-center w-80 justify-between">
            <span className="text-2xl font-bold">{name}</span>
            <Icon iconName="verifiedBadge" />
          </div>
          <span className="text-xs flex items-center gap-1 md:mt-1">
            {role}{" "}
            <div className="bg-white h-3 w-3 flex items-center justify-center">
              <img
                src="/Vertx-New.png"
                alt="Logo"
                className="h-[7px] w-[7px]"
              />
            </div>
          </span>
          <span className="mt-2 md:mt-3.5 flex md:flex-col flex-row justify-between items-center md:items-start md:gap-8">
            <Label text="Entrepreneur" bgColor="white" />
            <div className="flex items-center gap-2">
              <Icon iconName="linkedin" size={20} />
              <Icon iconName="twitter" size={20} />
              <Icon iconName="gmail" size={20} />
            </div>
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
