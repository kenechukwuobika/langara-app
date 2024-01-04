import React from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { signOut, getAuth } from "firebase/auth";

const AppHeader = props => {

	const { Header } = Layout;
    const auth = getAuth();

    const onSignOut = () => {
        signOut(auth)
    }

	return (
		<Header className="header">
			<div className="logo" />
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
				<Menu.Item key="1"> <Link to="/">Go To Website</Link> </Menu.Item>
				<Menu.Item key="2"> <Link onClick={onSignOut} to="/">Sign out</Link> </Menu.Item>
			</Menu>
		</Header>
	)
}


export default AppHeader;