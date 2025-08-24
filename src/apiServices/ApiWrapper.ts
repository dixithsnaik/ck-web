import axios from "axios";

const baseURL = import.meta.env.VITE_MANAGEMENT_SERVER;

export const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});