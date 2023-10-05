import React from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const AppHeader = props => {

	const { Header } = Layout;

	return (
		<Header className="header">
			<div className="logo" />
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
				<Menu.Item key="1"> <Link to="/">Go To Website</Link> </Menu.Item>
			</Menu>
		</Header>
	)
}


export default AppHeader;