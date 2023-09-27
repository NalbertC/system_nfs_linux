import axios from "axios";

export const baseUrl = "http://localhost:5555";
// export const baseUrl = "http://10.42.0.1:5555";

export const api = axios.create({
  baseURL: baseUrl,
});
