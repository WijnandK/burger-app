import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerappp.firebaseio.com/",
});

export default instance;
