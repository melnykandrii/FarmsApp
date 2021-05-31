import React from "react";
import { RestaurantCompactInfo } from "../../restaurants/components/restaurant-compact-info.component";

//const Label = styled.Text``;
//<Label>{restaurant.name}</Label>
export const MapCallout = ({ restaurant }) => {
  return (
    <>
      <RestaurantCompactInfo isMap restaurant={restaurant} />
    </>
  );
};
