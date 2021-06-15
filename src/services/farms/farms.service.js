//import { mocks, mockImages } from "./mock";
import camelize from "camelize";
import { host, isMock } from "../../utils/env";

export const farmsRequest = (location) => {
  return fetch(`${host}/placesNearby?location=${location}&mock=${isMock}`).then(
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

export const farmsTransform = ({ results = [] }) => {
  const mappedResults = results.map((farm) => {
    return {
      ...farm,
      address: farm.vicinity,
      isOpenNow:
        (farm.opening_hours && farm.opening_hours.open_now) ||
        !farm.permanently_closed,
      isClosedTemporarily: farm.business_status === "CLOSED_TEMPORARILY",
      rating: farm.rating,
    };
  });
  return camelize(mappedResults);
};
/*
farmsRequest()
  .then(farmsTransform)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((err) => {
    console.log(err);
  });
*/
