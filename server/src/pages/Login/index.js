import React from "react";
import { connect } from "react-redux";
import { actions } from "../../store/user";

const renderLoggedIn = (props) => {
  return (
    <div>
      <div>Welcome! Wang</div>
      <button
        onClick={() => {
          props.logout();
        }}
      >
        点此登出
      </button>
    </div>
  );
};

const renderNotLogIn = (props) => {
  return (
    <div>
      <div>未登录</div>
      <button
        onClick={() => {
          props.login();
        }}
      >
        点此登录
      </button>
    </div>
  );
};
const Login = (props) => {
  return (
    <div>{props.isLogin ? renderLoggedIn(props) : renderNotLogIn(props)}</div>
  );
};

/***
 * 负责在服务器端渲染之前，把这个路由需要的数据提前加载好（异步SSR）
 */
Login.loadData = (store, req) => store.dispatch(actions.checkLogin(req));

const mapStateToProps = (state) => {
  return {
    isLogin: state.user.isLogin,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: () => {
    dispatch(actions.login());
  },
  logout: () => {
    dispatch(actions.logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
