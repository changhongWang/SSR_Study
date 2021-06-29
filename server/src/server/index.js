/*
 * @Description: 
 * @Author: changhong.wang
 * @Date: 2021-06-30 05:24:48
 * @LastEditors: changhong.wang
 * @LastEditTime: 2021-06-30 05:27:24
 */
import express from 'express';
import { render } from './utils';
const app = express();
app.use(express.static('public'));

/**
 * StaticRouter 是服务器端的路由，并不运行在浏览器上，所以无法获取到浏览器的路径(location)
 * 要从用户请求的路径传递给StaticRouter req.path
 */
app.get('*', function (req, res) {
  res.send(render(req))
});

app.listen(3000);