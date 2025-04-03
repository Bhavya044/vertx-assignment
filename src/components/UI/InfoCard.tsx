import React from "react";

interface InfoCardProps {
  title?: string;
  quantity: string;
  percentageChange: string;
  additionalInfo: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  quantity,
  percentageChange,
  additionalInfo,
}) => {
  return (
    <div className="flex flex-col items-start  bg-black text-white rounded-lg">
      <span className="text-base font-semibold">{title}</span>
      <div className="py-1 flex gap-2.5">
        <span className="text-[32px] font-bold">{quantity}</span>
        <div className="flex flex-col justify-center">
          <span className="text-teal-700 text-xs">{percentageChange}</span>
          <span className="text-gray-500 text-xs ml-1">{additionalInfo}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
