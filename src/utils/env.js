const liveHost = "https://us-central1-farmsnearbyserv.cloudfunctions.net";
const localHost = "https://25b2d245fb77.ngrok.io/farmsnearbyserv/us-central1";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;
export const host = isDevelopment ? localHost : liveHost;
