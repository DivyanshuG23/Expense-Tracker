import axios from "axios";

const API = axios.create({
  baseURL: "https://expense-tracker-backend-jc0i.onrender.com/api",
  withCredentials: true,
});

export default API;