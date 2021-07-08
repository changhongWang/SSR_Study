import { ACTION_TYPE } from "./const";
import { SECRET_KEY } from "../../common/const";
import { parseCookie } from "../../common/utils";

const changeLoginStatus = (loginStatus) => ({
  type: ACTION_TYPE.CHANGE_LOGIN_STAT,
  loginStatus,
});

export const checkLogin = (req) => {
  return (dispatch, getState, axios) => {
    return new Promise((resolve) => {
      const cookieObj = parseCookie(req.headers.cookie);
      if (cookieObj.login) {
        dispatch(changeLoginStatus(true));
      } else {
        axios.get(`/api/isLogin.json?secret=${SECRET_KEY}`).then((res) => {
          console.log(res.data, 777);
          if (res.status === 200 && res.data.success) {
            dispatch(changeLoginStatus(res.data.data.login));
          } else {
            dispatch(changeLoginStatus(false));
          }
        });
      }
      resolve();
    });
  };
};

export const login = () => {
  return (dispatch, getState, axios) => {
    console.log("actions login");
    return axios.get(`/api/login.json?secret=${SECRET_KEY}`).then((res) => {
      console.log(res.data.data.login);
      if (res.status === 200 && res.data.success) {
        dispatch(changeLoginStatus(res.data.data.login));
      } else {
        // Todo 异常处理
      }
    });
  };
};

export const logout = () => {
  return (dispatch, getState, axios) => {
    console.log("actions log out");
    return axios.get(`/api/logout.json?secret=${SECRET_KEY}`).then((res) => {
      if (res.status === 200 && res.data.success) {
        dispatch(changeLoginStatus(!res.data.data.logout));
      }
    });
  };
};
