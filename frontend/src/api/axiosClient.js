import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 60000,
  withCredentials: true, // useful later for auth cookies
});

// 🔥 Optional: Global response error handler
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.error ||
      error.response?.data?.message ||
      error.message ||
      "Something went wrong";

    return Promise.reject(new Error(message));
  }
);

export default axiosClient;
