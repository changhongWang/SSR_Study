/*
 * @Description: 
 * @Author: changhong.wang
 * @Date: 2021-06-30 05:24:48
 * @LastEditors: changhong.wang
 * @LastEditTime: 2021-06-30 05:27:54
 */
import React from 'react';
import Header from '../components/Header';
const Home = () => {
	return (
		<div>
			<Header />
			<div>This is Dell Lee!</div>
			<button onClick={()=>{alert('click1')}}>
				click
			</button>
		</div>
	)
}

export default Home;