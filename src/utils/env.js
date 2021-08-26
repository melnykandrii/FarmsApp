const liveHost = "https://us-central1-farmsnearbyserv.cloudfunctions.net";
const localHost =
  "https://079c-24-203-155-215.ngrok.io/farmsnearbyserv/us-central1";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;
export const host = isDevelopment ? localHost : liveHost;
