import axios from "axios";
import { baseUrl } from "./url";

// Create Axios instance
const api = axios.create({
  baseURL: baseUrl,
});

// Add request interceptor
api.interceptors.request.use(
  (config) => {
    // Get token from local storage
    const { token } = JSON.parse(localStorage.getItem("user")) || {};

    // Set Bearer token if it exists
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Set Content-Type header based on request type
    if (config.method === "post" || config.method === "put") {
      // Set Content-Type as 'multipart/form-data' for file uploads
      if (config.data instanceof FormData) {
        config.headers["Content-Type"] = "multipart/form-data";
      } else {
        config.headers["Content-Type"] = "application/json";
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      // Remove user from local storage
      localStorage.removeItem("user");
    }
    return Promise.reject(error);
  }
);

export default api;
