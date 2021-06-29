/*
 * @Description: 
 * @Author: changhong.wang
 * @Date: 2021-06-30 05:24:48
 * @LastEditors: changhong.wang
 * @LastEditTime: 2021-06-30 05:27:11
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../Routes';

export const render = (req) => {
    const content = renderToString((
        <StaticRouter location={req.path} context={{}} >
            {Routes}
        </StaticRouter>
    ));
    return `
    <html>
      <head>
        <title>SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `
}