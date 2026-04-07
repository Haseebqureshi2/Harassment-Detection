import axios from "axios";

const axiosClient = axios.create({
  // baseURL: "http://localhost:5000/api",
    baseURL: "https://harassment-detection-production.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});


axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;