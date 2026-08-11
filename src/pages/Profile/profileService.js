import API from "../../services/api";

// Get Profile
export const getProfile = () => {
  return API.get("/profile");
};

// Update Profile
export const updateProfile = (data) => {
  return API.put("/auth/me", data);
};