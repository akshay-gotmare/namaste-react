import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

const MenuItems = ({ data }) => {
  const items = data;
  const dispatch = useDispatch();
  console.log("MenuItems:", items);
  return (
    <div className="h-auto">
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="flex hover:bg-gray-200 my-1 border-b"
          >
            <div className="text-left w-9/12">
              <div className="my-2 mx-4 py-4">
                <div className="mb-3 font-bold text-sm">
                  <span>{item.card.info.name}</span>
                  <span>
                    - ₹
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </span>
                </div>
                <div className="text-xs text-gray-400 h-auto">
                  {item.card.info.description}
                </div>
              </div>
            </div>
            <div className="w-3/12 m-2 center">
              <div className="w-24 float-right">
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="rounded-lg "
                />
                <div
                  className="w-auto py-2 rounded-lg bg-black text-white"
                  onClick={() => dispatch(addItem(item))}
                >
                  Add +
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
