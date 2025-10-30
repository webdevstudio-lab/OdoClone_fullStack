import axios from "axios";
import toast from "react-hot-toast";

const options = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const API = axios.create(options);

const APIRefreshClient = axios.create(options);
APIRefreshClient.interceptors.response.use((response) => response);

API.interceptors.response.use(
  (response) => response,

  async (error) => {
    const { config, response } = error;
    const { data, status } = response || {};

    //server connexion or internet error
    if (error.code === "ERR_NETWORK") {
      return Promise.reject(error);
    }

    //try to refresh token behind the scene
    if (status === 401 && data?.errorCode === "AUTH_TOKEN_NOT_FOUND") {
      try {
        await APIRefreshClient.get("/auth/refresh");
        return APIRefreshClient(config);
      } catch (error) {
        window.location.href = "/";
      }
    }
    return Promise.reject({ ...data, status });
  }
);

export default API;
