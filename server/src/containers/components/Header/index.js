/*
 * @Description: 
 * @Author: changhong.wang
 * @Date: 2021-06-30 05:28:15
 * @LastEditors: changhong.wang
 * @LastEditTime: 2021-06-30 05:28:16
 */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h5>header Here</h5>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </header>
    )
}
