import { ACTION_TYPE } from "./const";
import { SECRET_KEY } from "../../common/const";

const changeLoginStatus = (loginStatus) => ({
  type: ACTION_TYPE.CHANGE_LOGIN_STAT,
  loginStatus,
});

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
