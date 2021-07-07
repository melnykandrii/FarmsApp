const liveHost = "https://us-central1-farmsnearbyserv.cloudfunctions.net";
const localHost = "https://c9bc5c6cf9d3.ngrok.io/farmsnearbyserv/us-central1";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;
export const host = isDevelopment ? localHost : liveHost;
