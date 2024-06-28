import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurant } = props;
  const { name, cuisines, avgRating } = restaurant?.info;
  const { deliveryTime } = restaurant?.info?.sla;
  return (
    <div className="w-80 h-96 m-4 bg-slate-50 rounded-lg border border-transparent border-solid hover:border hover:border-orange-300 hover:border-solid hover:bg-orange-100 truncate">
      <img
        className="w-80 h-60 rounded-lg"
        alt="restaurant-logo"
        src={CDN_URL + restaurant.info.cloudinaryImageId}
      />
      <div className="p-2">
        <h3 className="font-bold text-lg">{name}</h3>
        <h4 className="truncate">{cuisines.join(", ")}</h4>
        <h5 className="text-sm">🕐 Delivery in {deliveryTime} mins</h5>
        <h5 className="text-sm">⭐ Average rated {avgRating}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
