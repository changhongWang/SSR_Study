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
      console.log(req.url, 989);
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
      promises.push(item.route.component.loadData(store));
  });
  Promise.all(promises).then(() => {
    res.send(render(store, routes, req));
  });
});

const server = app.listen(3000);
