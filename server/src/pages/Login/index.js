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

const mapStateToProps = (state) => {
  return {
    isLogin: state.user.isLogin,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: () => {
    console.log("page login");
    dispatch(actions.login());
  },
  logout: () => {
    console.log("page log out");
    dispatch(actions.logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
