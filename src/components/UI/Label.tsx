import React from "react";

interface LabelProps {
  text: string;
  bgColor: string;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ text, bgColor, className }) => {
  return (
    <div
      className={`px-1 py-0.5 w-max rounded-xs text-black text-[8px] font-jetBrains font-semibold ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {text}
    </div>
  );
};

export default Label;
