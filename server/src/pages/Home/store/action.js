// 负责所有action
import { SECRET_KEY } from "../../../common/const";
import { ACTION_TYPE } from "./const";

// action 不应该写成一个对象，而是应该由actionCreator来创建
const changeList = (list) => ({
  type: ACTION_TYPE.CHANGE_LIST,
  list,
});

export const getHomeList = () => {
  return (dispatch, getState, axios) => {
    return axios.get(`/api/news.json?secret=${SECRET_KEY}`).then((res) => {
      if (res.status === 200) {
        dispatch(changeList(res.data.data));
      } else {
        dispatch(changeList([]));
        reject(`异常， 状态码: ${res.status}`);
      }
    });
  };
};
