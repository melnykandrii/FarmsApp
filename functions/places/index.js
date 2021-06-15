const { mocks, addMockImage } = require("./mock");
const url = require("url");
const functions = require("firebase-functions");

const addGoogleImage = (farm) => {
  const ref = farm.photos[0].photo_reference;
  if (!ref) {
    farm.photos = [
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/strawberries-1296x728-feature.jpg",
    ];
    return farm;
  }
  farm.photos = [
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${
      functions.config().google.key
    }`,
  ];
  return farm;
};

module.exports.placesRequest = (request, response, client) => {
  const { location, mock } = url.parse(request.url, true).query;
  if (mock === "true") {
    const data = mocks[location];
    if (data) {
      data.results = data.results.map(addMockImage);
    }
    return response.json(data);
  }
  client
    .placesNearby({
      params: {
        location: location,
        radius: 70000,
        keyword: "self+picking+strawberry+farm",
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((res) => {
      res.data.results = res.data.results.map(addGoogleImage);
      return response.json(res.data);
    })
    .catch((e) => {
      response.status(400);
      return response.send(e.response.data.error_message);
    });
};
