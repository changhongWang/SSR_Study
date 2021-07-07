import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as homeReducer } from "../pages/Home/store";
import { reducer as userReducer } from "../store/user";
import clinetAxios from "../client/request";
import serverAxios from "../server/request";

const reducer = combineReducers({
  home: homeReducer,
  user: userReducer,
});

// 通过withExtraArgument传入axios 避免通过传入server形参区分调用不同的axios
export const getStore = () => {
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(serverAxios))
  );
};

export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(
    reducer,
    defaultState,
    applyMiddleware(thunk.withExtraArgument(clinetAxios))
  );
};
