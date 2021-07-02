import { ACTION_TYPE } from "./const";

const defaultState = {
  name: "dell",
  newsList: [],
};

// reducer 必须是一个纯函数
export default (state = defaultState, action) => {
  console.log(action, state);
  switch (action.type) {
    case ACTION_TYPE.CHANGE_LIST:
      return {
        ...state,
        newsList: action.list,
      };
    default:
      return state;
  }
};
