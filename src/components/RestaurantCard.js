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
    <div className="m-2 p-2 w-[300px] border border-l-gray-500 rounded-lg transition ease-in-out delay-90 hover:-translate-y-1 hover:scale-110 hover:duration-300">
      <img
        className="rounded-lg w-[300px] h-[200px]"
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

export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;