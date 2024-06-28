import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);
  console.log(resData);

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
