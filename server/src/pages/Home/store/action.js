// 负责所有action
import { SECRET_KEY } from "../../../common/const";
import { ACTION_TYPE } from "./const";

// action 不应该写成一个对象，而是应该由actionCreator来创建
const changeList = (list) => ({
  type: ACTION_TYPE.CHANGE_LIST,
  list,
});

const checkLogin = (axios) =>
  new Promise((resolve, reject) => {
    axios.get(`/api/isLogin.json?secret=${SECRET_KEY}`).then((res) => {
      if (res.status === 200 && res.data.success) {
        resolve(res.data.data.login);
      } else {
        resolve(false);
      }
    });
  });

export const getHomeList = () => {
  return (dispatch, getState, axios) => {
    // const res = await axios.get(`/api/news.json?secret=${SECRET_KEY}`);
    // console.log(res, 999);
    const res = async () => {
      const isLogin = await checkLogin(axios);
      console.log(99, isLogin);
      if (isLogin) {
        // 已登录 调翻译接口
        const res = await axios.get(
          `/api/translations.json?secret=${SECRET_KEY}`
        );
        if (res.status === 200) {
          dispatch(changeList(res.data.data));
        } else {
          dispatch(changeList([]));
          return Promise.reject(`异常， 状态码: ${res.status}`);
        }
      } else {
        const res = await axios.get(`/api/news.json?secret=${SECRET_KEY}`);
        if (res.status === 200) {
          dispatch(changeList(res.data.data));
        } else {
          dispatch(changeList([]));
          return Promise.reject(`异常， 状态码: ${res.status}`);
        }
        return res;
      }
    };

    // const res = checkLogin(axios).then((res) => {
    //   if (res) {
    //     // 已登录 调翻译接口
    //     return axios.get(`/api/news.json?secret=${SECRET_KEY}`).then((res) => {
    //       if (res.status === 200) {
    //         dispatch(changeList(res.data.data));
    //       } else {
    //         dispatch(changeList([]));
    //         reject(`异常， 状态码: ${res.status}`);
    //       }
    //     });
    //   } else {
    //     return axios.get(`/api/news.json?secret=${SECRET_KEY}`).then((res) => {
    //       if (res.status === 200) {
    //         dispatch(changeList(res.data.data));
    //       } else {
    //         dispatch(changeList([]));
    //         reject(`异常， 状态码: ${res.status}`);
    //       }
    //     });
    //   }
    // });
    return res();
  };
};
