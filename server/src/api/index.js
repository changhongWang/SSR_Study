import clientAxios from "../client/request";
import serverAxios from "../server/request";
import { SECRET_KEY } from "../common/const";

export const getNewsList = (server) =>
  new Promise((resolve, reject) => {
    // server为真 表示服务端渲染
    const urlPrefix = server ? "http://47.95.113.63/ssr" : "";
    console.log(serverAxios);
    const axios = server ? serverAxios : clientAxios;
    axios
      .get(`/api/news.json?secret=${SECRET_KEY}`)
      .then((res) => {
        console.log(888, res);
        if (res.status === 200) {
          const list = res.data.data;
          resolve(res.data);
        } else {
          reject(`异常， 状态码: ${res.status}`);
        }
      })
      .catch((e) => {
        reject("异常，异常信息: ", e);
      });
  });
