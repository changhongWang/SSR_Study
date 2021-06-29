/*
 * @Description: 
 * @Author: changhong.wang
 * @Date: 2021-06-30 05:24:48
 * @LastEditors: changhong.wang
 * @LastEditTime: 2021-06-30 05:26:55
 */
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';

export default (
    <div>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
    </div>
)