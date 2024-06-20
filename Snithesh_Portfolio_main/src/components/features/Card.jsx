import React from "react";

const Card = ({ title, icon }) => {
  return (
    <div className="w-[200px] px-4 h-[200px] py-10 rounded-lg shadow-shadowOne flex items-center justify-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-6xl text-designColor">
          <span>{icon}</span>
        </div>

        <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Card;
