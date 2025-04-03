import React, { JSX } from "react";

interface ICard {
  title?: string;
  action?: JSX.Element;
  children: React.ReactNode;
  className?: string;
}
const Card: React.FC<ICard> = ({ action, title, children, className }) => {
  return (
    <div
      className={`flex flex-col gap-3.5 p-3.5 border border-divider-100 rounded-lg ${className} `}
    >
      {title || action ? (
        <div className="flex justify-between">
          {title ? <span className="text-xl font-bold"> {title}</span> : null}
          {action}
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default Card;
