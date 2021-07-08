import axios from "axios";
import { SECRET_KEY } from "../common/const";

const instance = axios.create({
  baseURL: "http://47.95.113.63/ssr",
  params: {
    secret: SECRET_KEY,
  },
});

export default instance;
