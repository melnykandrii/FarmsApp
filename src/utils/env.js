const liveHost = "https://us-central1-nearmefunc.cloudfunctions.net";
const localHost = "https://afd6-24-203-155-215.ngrok.io/nearmefunc/us-central1";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = false;
export const host = isDevelopment ? localHost : liveHost;
