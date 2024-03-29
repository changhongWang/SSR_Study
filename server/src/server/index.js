import express from "express";
import proxy from "express-http-proxy";
import { matchRoutes } from "react-router-config";
import { getStore } from "../store";
import { render } from "./utils";
import routes from "../Routes";

const app = express();
app.use(express.static("public"));

app.use(
  "/api",
  proxy("http://47.95.113.63", {
    proxyReqPathResolver: function (req) {
      return `/ssr/api${req.url}`;
    },
  })
);

app.get("*", function (req, res) {
  const store = getStore();
  const matchedRoutes = matchRoutes(routes, req.path);

  const promises = [];

  matchedRoutes.forEach((item) => {
    item.route.component.loadData &&
      promises.push(item.route.component.loadData(store, req));
  });

  Promise.all(promises).then(() => {
    const context = {};
    const html = render(store, routes, req, context);

    if (context.NOT_FOUND) {
      res.status(404);
    }
    res.send(html);
  });
});

const server = app.listen(3000);
