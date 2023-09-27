import axios from "axios";

// export const baseUrl = "http://localhost:5555";
export const baseUrl = "http://192.168.1.111:5555";

export const api = axios.create({
  baseURL: baseUrl,
});
