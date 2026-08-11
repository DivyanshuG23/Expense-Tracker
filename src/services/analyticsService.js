import API from "./api";

// Get Analytics
export const getAnalytics = () => {
  return API.get("/analytics");
};