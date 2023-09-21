import axios from "axios";

export const baseUrl = "http://localhost:5555";

export const api = axios.create({
  baseURL: baseUrl,
});
