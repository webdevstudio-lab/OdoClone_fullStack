import axios from "axios";
import Cookies from "js-cookie";
import { navigate } from "./navigation";

const options = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
  timeout: 80000,
};

export const API = axios.create(options);
export const RefreshToken = axios.create(options);

RefreshToken.interceptors.response.use((response) => response.data);

API.interceptors.response.use(
  (response) => response.data,
  async (error: any) => {
    const { config, response } = error;
    const { status, data } = response || {};

    console.log(error.code);

    if (error.code === "ERR_NETWORK")
      return Promise.reject({
        status: 500,
        message:
          "Impossible de se connecter au serveur , verifier votre connexion internet",
      });

    if (error.status === 401 && error.code === "ERR_BAD_REQUEST") {
      try {
        const { data } = await API.get("/auth/refresh");
        console.log(data);
        return RefreshToken(config);
      } catch (error) {
        navigate("/connexion", { replace: true });
      }
    }

    return Promise.reject({ status, ...data });
  }
);

export default API;
