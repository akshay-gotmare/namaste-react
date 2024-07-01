import React, { useState } from "react";
import MenuItems from "./MenuItems";

const ItemList = ({ data, isExpanded, setActiveIndex }) => {
  const handleCategoryClick = () => {
    console.log("clicked");
    setActiveIndex();
  };
  return (
    <div className=" w-6/12 m-auto shadow-lg">
      <div className="bg-gray-50 cursor-pointer">
        <div
          className="flex justify-between my-4 py-2"
          onClick={handleCategoryClick}
        >
          <span className="text-lg font-bold mx-4">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="mx-4">{isExpanded ? "..." : "🔻"}</span>
        </div>
        {isExpanded && <MenuItems data={data.itemCards} />}
      </div>
    </div>
  );
};

export default ItemList;
