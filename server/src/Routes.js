import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import App from "./App";

export default [
  {
    path: "/",
    component: App,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
        loadData: (store) => Home.loadData(store),
        key: "home",
      },
      {
        path: "/login",
        component: Login,
        exact: true,
        key: "login",
      },
      {
        component: NotFound,
      },
    ],
  },
];

// export default (
// 	<div>
// 		<Route path='/' exact component={Home}></Route>
// 		<Route path='/login' exact component={Login}></Route>
// 	</div>
// )
