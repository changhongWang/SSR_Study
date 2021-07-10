import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../../store/user";
import styles from "./index.css";

class Login extends Component {
  componentWillMount() {}
  renderLoggedIn() {
    return (
      <div>
        <div>Welcome! Wang</div>
        <button
          onClick={() => {
            this.props.logout();
          }}
        >
          点此登出
        </button>
      </div>
    );
  }
  renderNotLogIn() {
    return (
      <div>
        <div>未登录</div>
        <button
          onClick={() => {
            this.props.login();
          }}
        >
          点此登录
        </button>
      </div>
    );
  }
  render() {
    return (
      <div className={styles.test_a}>
        {this.props.isLogin ? this.renderLoggedIn() : this.renderNotLogIn()}
      </div>
    );
  }
}

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
