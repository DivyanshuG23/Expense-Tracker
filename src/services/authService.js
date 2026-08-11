import API from "./api";

// Register
export const registerUser = (userData) => {
  return API.post("/auth/register", userData);
};

// Login
export const loginUser = (userData) => {
  return API.post("/auth/login", userData);
};

// Google Login
export const googleLogin = (idToken) => {
  return API.post("/auth/google", {
    idToken,
  });
};

// Current User
export const getCurrentUser = () => {
  return API.get("/auth/me");
};

// Logout
export const logoutUser = () => {
  return API.post("/auth/logout");
};