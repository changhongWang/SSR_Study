import React from "react";
import { Helmet } from "react-helmet";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

export const render = (store, routes, req, context) => {
  // 拿到异步数据，填充到store里，填充的数据根据path来
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `
		<html>
			<head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
			</head>
      <style type="text/css">${context.homeStyle}</style>
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
