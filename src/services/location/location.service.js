import camelize from "camelize";
import { host, isMock } from "../../utils/env";

//import { locations } from "./location.mock";

/*export const locationRequest = async (searchTerm) => {
  const res = await fetch(
    `http://localhost:5001/mealsnearme/us-central1/geocode?city=${searchTerm}`
  );
  return await res.json();
  /*return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });*/
//};
/*
export const locationRequest = (searchTerm) => {
  return fetch(`${host}/geocode?city=${searchTerm}&mock=${isMock}`).then(
    (res) => {
      return res.json();
    }
  );
};

export const revLocationRequest = (mylocation) => {
  return fetch(
    `${host}/reverseGeocode?mycoord=${mylocation.lat},${mylocation.lng}&mock=${isMock}`
  ).then((res) => {
    return res.json();
  });
};
*/
export const locationRequest = async (searchTerm) => {
  const response = await fetch(
    `${host}/geocode?city=${searchTerm}&mock=${isMock}`
  );

  const res = await response.json();
  console.log(res);
  if (!res.status === "OK") {
    throw new Error("Something went wrong!");
  }
  return res;
};

export const revLocationRequest = async (mylocation) => {
  const response = await fetch(
    `${host}/reverseGeocode?mycoord=${mylocation.lat},${mylocation.lng}&mock=${isMock}`
  );

  const res = await response.json();
  console.log(res.status);
  if (!res.status === "OK") {
    throw new Error("Something went wrong!");
  }
  return res;
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
