import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import { actions } from "./store";

// 同构：一套React代码，在服务器端执行一次，再客户端再执行一次
class Home extends Component {
  render() {
    console.log(this.props.newsList);
    return (
      <div>
        <Header />
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
    );
  }

  componentDidMount() {
    if (!this.props.newsList.length) {
      this.props.getHomeList();
    }
  }
}

/***
 * 负责在服务器端渲染之前，把这个路由需要的数据提前加载好（异步SSR）
 */
Home.loadData = (store) => store.dispatch(actions.getHomeList(true));

const mapStateToProps = (state) => ({
  name: state.home.name,
  newsList: state.home.newsList,
});

const mapDispatchToProps = (dispatch) => ({
  getHomeList: () => {
    dispatch(actions.getHomeList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
