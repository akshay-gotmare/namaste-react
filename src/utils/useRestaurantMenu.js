import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restaurantData, setRestaurantData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_MENU + resId);
    const json = await data.json();
    setRestaurantData(json.data);
  };
  //   console.log("Menu: ", restaurantData);
  return restaurantData;
};

export default useRestaurantMenu;
