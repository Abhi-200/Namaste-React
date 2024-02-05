import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    cloudinaryImageId
  } = resData.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="m-2 p-2 w-[250px] rounded-lg bg-gray-100 hover:bg-blue-300">
      <img
        className="rounded-lg w-[250px] h-[200px]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="text-sm">{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;