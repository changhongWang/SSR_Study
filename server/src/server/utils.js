import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { getStore } from "../store";

export const render = (store, routes, req) => {
  // 拿到异步数据，填充到store里，填充的数据根据path来
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          {routes.map((route) => (
            <Route {...route} key={route.key} />
          ))}
        </div>
      </StaticRouter>
    </Provider>
  );

  return `
		<html>
			<head>
				<title>ssr</title>
			</head>
			<body>
				<div id="root">${content}</div>
        <script>
              window.context = {
                state: ${JSON.stringify(store.getState())}
              }
        </script>
				<script src='/index.js'></script>
			</body>
		</html>
  `;
};
