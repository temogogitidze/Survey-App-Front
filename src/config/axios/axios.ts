import axios from "axios";
import { useAuthStore } from "@/store/useAuthStore";

const axiosClient = axios.create({
  baseURL: "http://localhost:8000/api",
});
axiosClient.interceptors.request.use((config) => {
  const store = useAuthStore();
  config.headers.Authorization = `Bearer ${sessionStorage.getItem("TOKEN")}`;
  return config;
});

export default axiosClient;
