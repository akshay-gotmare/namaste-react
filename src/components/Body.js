import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import resData from "../utils/mockData";

const Body = () => {
  //   const [RestaurantList, setRestaurantList] = useState(resData);
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchedRestaurant, setSearchedRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    setRestaurantList(
      // Optional Chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchedRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={(e) => {
              console.log(e.target.value);
              const filteredList = restaurantList.filter((item) =>
                item.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              );
              setSearchedRestaurant(filteredList);
            }}
          />
          <button className="search-btn">Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {searchedRestaurant.map((item) => (
          <Link to={`/restaurant/${item.info.id}`} key={item.info.id}>
            <RestaurantCard restaurant={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
