import axios from "axios";

export const instance = axios.create({
  baseURL: "https://hakathon2023.onrender.com/api",
});

export default instance;
