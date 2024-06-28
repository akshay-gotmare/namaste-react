import React, { useEffect, useState } from "react";
import { RESTAURANT_LIST } from "./constants";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST);
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return restaurantList;
};

export default useRestaurantList;
