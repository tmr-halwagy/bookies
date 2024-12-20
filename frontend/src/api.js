import axios from "axios";
import { ACCESS_TOKEN,GOOGLE_ACCESS_TOKEN} from "./token";

const apiUrl = "http://127.0.0.1:8000";

const api = axios.create({
  baseURL: apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    const googleAccessToken = localStorage.getItem("GOOGLE_ACCESS_TOKEN");
    if (googleAccessToken) {
      config.headers["X-Google-Access-Token"] = googleAccessToken;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
