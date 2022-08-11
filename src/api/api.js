import axios from "axios";

const api = axios.create({
  baseURL: "https://62f1e81025d9e8a2e7d2a81a.mockapi.io/api/",
});

export default api;
