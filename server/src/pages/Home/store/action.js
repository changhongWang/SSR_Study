// 负责所有action
import { getNewsList } from "../../../api";
import { ACTION_TYPE } from "./const";

// action 不应该写成一个对象，而是应该由actionCreator来创建
const changeList = (list) => ({
  type: ACTION_TYPE.CHANGE_LIST,
  list,
});

export const getHomeList = (server) => {
  return (dispatch) => {
    return getNewsList(server)
      .then((res) => {
        dispatch(changeList(res.data));
      })
      .catch((e) => {
        console.log(e);
        dispatch(changeList([]));
      });
  };
};
