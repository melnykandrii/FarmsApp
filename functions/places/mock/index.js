const antwerp = require("./antwerp");
const chicago = require("./chicago");
const toronto = require("./toronto");
const san_francisco = require("./san_francisco");
const montreal = require("./montreal");

module.exports.mocks = {
  "51.219448,4.402464": antwerp,
  "43.653225,-79.383186": toronto,
  "41.878113,-87.629799": chicago,
  "37.7749295,-122.4194155": san_francisco,
  "45.5016889,-73.567256": montreal,
};

const mockImages = [
  "https://images.indianexpress.com/2020/02/strawberry-1200.jpg",
  "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/strawberries-1296x728-feature.jpg",
  "https://cdn.britannica.com/22/75922-050-D3982BD0/flowers-fruits-garden-strawberry-plant-species.jpg",
  "https://www.thespruce.com/thmb/ejJt-HgM39cVpPCVBFDKU1uqGZg=/4267x3200/smart/filters:no_upscale()/organically-control-strawberry-insect-pests-2539824-01-9adf2750f56244c9a380a4e3d9f6a9c4.jpg",
  "https://www.pennington.com/-/media/images/pennington2-na/us/blog/fertilizer/how-to-grow-strawberries/strawberry-h.jpg",
  "https://post.healthline.com/wp-content/uploads/2020/06/female-holding-strawberry-thumb.20190724214812593-732x549.jpg",
  "https://i.cbc.ca/1.6052514.1622755391!/fileImage/httpImage/image.jpeg_gen/derivatives/16x9_780/strawberry-season-2021.jpeg",
  "https://www.birchwoodcredit.com/wp-content/uploads/2021/04/Batch1_StrawberryPicking_Header-1200x720.png",
];

module.exports.addMockImage = (restaurant) => {
  const randomImage =
    mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
  restaurant.photos = [randomImage];
  return restaurant;
};
