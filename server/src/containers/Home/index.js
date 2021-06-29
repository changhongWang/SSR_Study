import React from 'react';
import { connect } from 'react-redux';

// 同构：一套React代码，在服务器端执行一次，再客户端再执行一次

const Home = (props) => {
	return (
		<div>
			<div>This is {props.name}!</div>
			<button onClick={()=>{alert('click1')}}>
				click
			</button>
		</div>
	)
}

const mapStateToProps = state => ({
	name: state.name
})

export default connect(mapStateToProps, null)(Home);
