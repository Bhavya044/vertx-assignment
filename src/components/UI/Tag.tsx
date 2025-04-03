import React from "react";

const Tag: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  return (
    <div
      className={`border border-divider-100 rounded-full py-1.5 px-2.5 text-white  text-xs w-max ${className} `}
    >
      {text}
    </div>
  );
};

export default Tag;
