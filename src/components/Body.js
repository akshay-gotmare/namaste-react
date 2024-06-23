import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";

const Body = () => {
  const [RestaurantList, setRestaurantList] = useState(resData);
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = RestaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {RestaurantList.map((item) => (
          <RestaurantCard key={item.info.id} restaurant={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
