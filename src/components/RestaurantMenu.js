import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { RESTAURANT_MENU } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const { resId } = useParams();

  console.log(resId);

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const data = await fetch(RESTAURANT_MENU + resId);
    const json = await data.json();
    setRestaurantData(json.data.cards);
    console.log({ restaurantData });
  };

  if (restaurantData.length === 0) {
    return (
      <>
        <Shimmer />
        <Shimmer />
      </>
    );
  }
  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    totalRatingsString,
  } = restaurantData[2]?.card?.card?.info;

  const { itemCards } =
    restaurantData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  return (
    <div className="restaurant-layout">
      <div className="restaurant-info"></div>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{costForTwoMessage}</h4>
      <div className="restaurant-menu">
        <ul>
          {itemCards ? (
            itemCards.map((item) => (
              <li key={item.card.info.id}>{item.card.info.name}</li>
            ))
          ) : (
            <li>No data found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
