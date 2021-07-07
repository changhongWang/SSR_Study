import { ACTION_TYPE } from "./const";

const defaultState = {
  isLogin: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPE.CHANGE_LOGIN_STAT:
      return {
        ...state,
        isLogin: action.loginStatus,
      };
    default:
      return state;
  }
};
