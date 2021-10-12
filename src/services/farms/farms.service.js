//import { mocks, mockImages } from "./mock";
import camelize from "camelize";
import { host, isMock } from "../../utils/env";
/*
export const farmsRequest = (location, key1, key2, key3, key4, key5) => {
  return fetch(
    `${host}/placesNearby?location=${location}&mock=${isMock}&key1=${key1}&key2=${key2}&key3=${key3}&key4=${key4}&key5=${key5}`
  ).then((res) => {
    return res.json();
  });

  /*  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
*/
export const farmsRequest = async (location, key1, key2, key3, key4, key5) => {
  console.log(location, key1, key2, key3, key4, key5);
  const response = await fetch(
    `${host}/placesNearby?location=${location}&mock=${isMock}&key1=${key1}&key2=${key2}&key3=${key3}&key4=${key4}&key5=${key5}`
  );

  const res = await response.json();
  console.log(res.status);
  if (!res.results) {
    throw new Error("Something went wrong!");
  }
  return res;
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
