import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurant } = props;
  const { name, cuisines, avgRating } = restaurant?.info;
  const { deliveryTime } = restaurant?.info?.sla;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        alt="restaurant-logo"
        src={CDN_URL + restaurant.info.cloudinaryImageId}
      />
      <div className="restaurant-details">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>🕐 Delivery in {deliveryTime} mins</h5>
        <h5>⭐ Average rated {avgRating}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
