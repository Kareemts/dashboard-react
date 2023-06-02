import axios from "axios";

export const axiosUrl = axios.create({
  baseURL: "https://dashbortbackend.onrender.com/api/admin",
  timeout: 5000,
});

axiosUrl.interceptors.request.use(function (config) {
  config.headers["Access-Control-Allow-Origin"] = "*";

  return config;
});
