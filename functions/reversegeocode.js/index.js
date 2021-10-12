const { latlngs: coordsMock } = require("./reverse-geocode.mock");
const url = require("url");
const functions = require("firebase-functions");

module.exports.reverseGeocodeRequest = (request, response, client) => {
  const { mycoord, mock } = url.parse(request.url, true).query;
  if (mock === "true") {
    const coordMock = coordsMock[mycoord];
    return response.json(coordMock);
  }
  client
    .geocode({
      params: {
        latlng: mycoord,
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((res) => {
      return response.json(res.data);
    })
    .catch((e) => {
      response.status(400);
      return response.send(e.response.data.error_message);
    });
};
