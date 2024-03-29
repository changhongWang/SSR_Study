import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import StyleHoc from "../../components/StyleHoc";
import { actions } from "./store";
import styles from "./index.css";

// 同构：一套React代码，在服务器端执行一次，再客户端再执行一次
class Home extends Component {
  render() {
    console.log(this.props.newsList);
    return (
      <Fragment>
        <Helmet>
          <title>This is SSR News Page - Beautiful</title>
          <meta name="description" content="lalalalal"></meta>
        </Helmet>
        <div className={styles.bg}>
          <div>This is {this.props.name}!</div>
          <button
            onClick={() => {
              alert("click1");
            }}
          >
            click
          </button>
          <ul>
            {this.props.newsList &&
              this.props.newsList.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
          </ul>
        </div>
      </Fragment>
    );
  }

  componentDidMount() {
    // if (!this.props.newsList.length) {
    this.props.getHomeList();
    // }
  }
}

const mapStateToProps = (state) => ({
  name: state.home.name,
  newsList: state.home.newsList,
});

const mapDispatchToProps = (dispatch) => ({
  getHomeList: () => {
    dispatch(actions.getHomeList());
  },
});

const exportHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyleHoc(Home, styles));

/***
 * 负责在服务器端渲染之前，把这个路由需要的数据提前加载好（异步SSR）
 */
exportHome.loadData = (store) => store.dispatch(actions.getHomeList());
export default exportHome;
