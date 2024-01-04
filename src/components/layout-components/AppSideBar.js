import React from 'react'
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import Icon from "../util-components/Icon";

const AppSideBar = props => {
	const { SubMenu } = Menu;
	const { Sider } = Layout;
	

	return (
		<Sider width={200} className="site-layout-background">
		<Menu
			theme="light"
			mode="inline"
			style={{ height: "100vh", borderRight: 0 }}
      	>
			{props.navigation.map((menu) =>
			menu.submenu.length > 0 ? (
				<Menu.ItemGroup
				key={menu.key}
				title={menu.title}
				>
				{menu.submenu.map((subMenuFirst) =>
					subMenuFirst.submenu.length > 0 ? (
					<SubMenu
						icon={
						subMenuFirst.icon ? (
							<Icon type={subMenuFirst?.icon} />
						) : null
						}
						key={subMenuFirst.key}
						title={subMenuFirst.title}
					>
						{subMenuFirst.submenu.map((subMenuSecond) => (
						<Menu.Item key={subMenuSecond.key}>
							{subMenuSecond.icon ? (
							<Icon type={subMenuSecond?.icon} />
							) : null}
							<span>
							{subMenuSecond.title}
							</span>
							<Link to={subMenuSecond.path} />
						</Menu.Item>
						))}
					</SubMenu>
					) : (
					<Menu.Item key={subMenuFirst.key}>
						{subMenuFirst.icon ? <Icon type={subMenuFirst.icon} /> : null}
						<span>{subMenuFirst.title}</span>
						<Link to={subMenuFirst.path} />
					</Menu.Item>
					)
				)}
				</Menu.ItemGroup>
			) : (
				<Menu.Item key={menu.key}>
				{menu.icon ? <Icon type={menu?.icon} /> : null}
				<span>{menu?.title}</span>
				{menu.path ? <Link to={menu.path} /> : null}
				</Menu.Item>
			)
			)}
			</Menu>
        </Sider>
	)
}
export default AppSideBar;