import axios from "axios";

const api = axios.create({
  baseURL: "https://cinema-paradise-afs.herokuapp.com/",
});

export default api;
