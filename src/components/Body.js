import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const restaurantList = useRestaurantList();
  const [searchedRestaurantList, setSearchedRestaurant] = useState([]);

  useEffect(() => {
    const data = restaurantList;
    setSearchedRestaurant(data);
  }, [restaurantList]);

  if (restaurantList.length === 0) {
    return (
      <div className="shimmer-container">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  }
  return (
    <div className="body">
      <div className="flex p-3 justify-center">
        <div className="mx-5">
          <input
            type="text"
            className="bg-slate-200 hover:bg-stone-300 mx-5 w-80 h-10 pl-6 pr-2 rounded-lg"
            onChange={(e) => {
              console.log(e.target.value);
              const filteredList = restaurantList.filter((item) =>
                item.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              );
              setSearchedRestaurant(filteredList);
            }}
            placeholder="Search"
          />
          {/* <button className="search-btn">Search</button> */}
        </div>
        <button
          className="filter-btn mx-5 w-48 h-9 border border-solid hover:border hover:bg-black hover:text-white shadow-md truncate"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setSearchedRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {searchedRestaurantList.map((item) => (
          <Link to={`/restaurant/${item.info.id}`} key={item.info.id}>
            <RestaurantCard restaurant={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
