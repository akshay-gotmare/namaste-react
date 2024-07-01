import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);
  console.log("Resdata: ", resData);

  if (resData === null) {
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
  } = resData?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resData?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  const categories =
    resData?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("Cate: ", categories);

  return (
    <div className="restaurant-layout text-center ">
      <div className="restaurant-info my-3">
        <p className="text-2xl font-bold my-4">{name}</p>
      </div>
      <h4 className="text-base font-bold">{costForTwoMessage}</h4>
      {categories?.map((category, index) => (
        <ItemList
          key={category.card.card.title}
          data={category.card.card}
          isExpanded={index === activeIndex}
          setActiveIndex={() =>
            index === activeIndex ? setActiveIndex(null) : setActiveIndex(index)
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
