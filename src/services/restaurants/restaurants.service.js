//import { mocks, mockImages } from "./mock";
import camelize from "camelize";
import { host } from "../../utils/env";

export const restaurantsRequest = (location) => {
  return fetch(`${host}/placesNearby?location=${location}&mock=true`).then(
    (res) => {
      return res.json();
    }
  );
  /*  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });*/
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow:
        (restaurant.opening_hours && restaurant.opening_hours.open_now) ||
        !restaurant.permanently_closed,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      rating: restaurant.rating,
    };
  });
  return camelize(mappedResults);
};
/*
restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((err) => {
    console.log(err);
  });
*/
