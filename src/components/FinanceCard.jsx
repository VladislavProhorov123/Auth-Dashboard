import React from "react";

export default function FinanceCard({
  icon,
  bgIcon,
  bgCard,
  title,
  subtitle,
  info,
}) {
  return (
    <div
      className={`w-full  h-[184px] 
        rounded-xl 
        shadow-md 
        p-4 
        ${bgCard} 
        transform 
        transition-all 
        duration-200 
        hover:shadow-xl 
        hover:-translate-y-1
        flex flex-col
        justify-between`}
    >
      <div
        className={` w-12 h-12 rounded-full flex items-center justify-center 
          ${bgIcon} 
          shadow-inner`}
      >
        {icon}
      </div>
      <div className="mt-4 flex flex-col justify-between flex-1">
        <h2 className="text-lg font-bold text-gray-900 truncate">{title}</h2>
        <p className="text-xl font-semibold text-gray-800 mt-1">{subtitle}</p>
        <p className="text-sm text-gray-500 mt-1">{info}</p>
      </div>
    </div>
  );
}
