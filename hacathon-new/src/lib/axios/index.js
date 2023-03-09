import axios from "axios";

export const instance = axios.create({
  baseURL: "https://talentsvalleyhackaton.onrender.com/api/",
});

export default instance;
