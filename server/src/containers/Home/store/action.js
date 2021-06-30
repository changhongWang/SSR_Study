// 负责所有action
import axios from "axios";
import { SECRET_KEY, ACTION_TYPE } from "./const";

// action 不应该写成一个对象，而是应该由actionCreator来创建
const changeList = (list) => ({
  type: ACTION_TYPE.CHANGE_LIST,
  list,
});

export const getHomeList = () => {
  return (dispatch) => {
    axios
      .get(`http://47.95.113.63/ssr/api/news.json?secret=${SECRET_KEY}`)
      .then((res) => {
        if (res.status === 200) {
          const list = res.data.data;
          dispatch(changeList(list));
        }
        console.log(res);
      });
  };
};
