import API from "./api";

// ==========================
// Dashboard Summary
// ==========================
export const getDashboardSummary = () => {
  return API.get("/dashboard/summary");
};

// ==========================
// Dashboard Analytics
// ==========================
export const getAnalytics = (year) => {
  return API.get("/dashboard/analytics", {
    params: {
      year,
    },
  });
};