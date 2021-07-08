import axios from "axios";
import { SECRET_KEY } from "../common/const";

const instance = axios.create({
  baseURL: "/",
  params: {
    secret: SECRET_KEY,
  },
});
export default instance;
