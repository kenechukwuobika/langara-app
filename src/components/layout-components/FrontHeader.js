import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Menu } from 'antd'
import { connect } from 'react-redux';
// import io from "socket.io-client";
// import { env } from 'configs/EnvironmentConfig'
import {
	MenuIcon,
	CaretDownIcon,
	SearchIcon,
	MessageIcon,
	CartIcon,
	UserIcon,
} from 'assets/svg'
import { getCart } from 'redux/actions/cart';
import { getProducts } from 'redux/actions/product';
import { getCategories } from 'redux/actions/category';
import { getMessageCount } from 'redux/actions/messages';
import Btn from 'components/shared-components/Btn';
import ProductView from 'components/shared-components/ProductView';
import utils from 'utils';

const FrontHeader = props => {
	// const socket = io.connect(env.API_ENDPOINT_URL);
	
	const [searchTerm, setSearchTerm] = useState('');
	const { cart, getCart, authUser, products, getProducts, messageCount, getMessageCount, getCategories, categories } = props;


	useEffect(() => {
		getCart();
		getCategories()
	}, [getCart, getCategories])

	useEffect(() => {
		if(authUser){
			// socket.emit('get-unread-messages', {user: authUser})

			// socket.on('get-unread-messages-success', (data) => {
			// 	console.log(data)
			// 	getMessageCount(data)
			// })
		}
	}, [authUser])

	const onChangeTerm = (e) => {
		if(!products){
			getProducts();
		}
		setSearchTerm(e.target.value);
	}

	const displayIcons = () => (
		<div className="o-navbar-icons">
			<div className="o-navbar-icon">
				<Link to="/cart">
					{ cart && cart.length !== 0 && <span className="o-navbar-badge">{cart.length}</span>}
					<CartIcon />
				</Link>
			</div>
			{authUser && authUser.__t !== 'admin' && <div className="o-navbar-icon">
				<Link to={`/app/${authUser && authUser.__t}/messages`}>
					{ messageCount && <span className="o-navbar-badge">{messageCount}</span>}
					<MessageIcon />
				</Link>
			</div>}
			<Dropdown overlay={userMenu} trigger={['click']} placement="bottomLeft">
				<div className="o-navbar-icon">
					<UserIcon />
				</div>
			</Dropdown>
		</div>
	)

	const displayAuthBtns = () => (
		<div className="o-navbar-buttons">
			<Btn
			link='/login'
			textSize={16}
			style={{ 
				backgroundColor: "transparent",
				border: "#fff 2px solid",
				borderRadius: "50px",
				marginRight: "2rem"
			}}>Login</Btn>

			<Btn
			link='/register'
			textSize={16}
			textColor="#2A4272"
			style={{ 
				backgroundColor: "#fff",
				color: "black !important",
				border: "#fff 2px solid",
				borderRadius: "50px"
			}}>Signup</Btn>
		</div>
	)

	const categoriesMenu = (
		<Menu>
			{
				categories && categories.map(category => (<Menu.Item key={category._id}>
					<Link to={`/categories/${category._id}`}>
						{category.name}
					</Link>
				</Menu.Item>)
			)}
		</Menu>
	)
	

	const userMenu = (
		<Menu>
		  <Menu.Item key="Welcome">
		  	<p>
			  {`Welcome Back ${authUser && utils.titleCase(authUser.firstName)} ${authUser && utils.titleCase(authUser.lastName)}`}
			</p>
		  </Menu.Item>
		  <Menu.Item key="dashboard">
		  	<Link to={`/app/${authUser && authUser.__t}`}>
			  Dashboard
			</Link>
		  </Menu.Item>
		  <Menu.Item key="profile">
			<Link to={`/app/${authUser && authUser.__t}/profile`}>
			  Profile
			</Link>
		  </Menu.Item>
		  <Menu.Item key="sign out">
		  		<Link to={`/signout`}>
					Sign Out
				</Link>
		  </Menu.Item>
		</Menu>
	);

	const searchMenu = () => {
		if(!searchTerm || !products) return (<div></div>)
		const searched = [];
		products?.forEach(element => {
			if(element.name.toLowerCase().includes(searchTerm.toLowerCase())){
				searched.push(
					<Menu.Item key={element._id}>
						<Link to={`/products/${element._id}`}>
							<ProductView 
								item={element}
							/>	
						</Link>
					</Menu.Item>
				)		
			}
		});

		if(searched.length === 0){
			searched.push(
			<Menu.Item key={"no-result"}>
				<span>{`No result for '${searchTerm}'`}</span>
			</Menu.Item>)
		}else{
			searched.push(<div>
				<Btn
					link={`/search/${searchTerm}`}
					textSize={16}
					backgroundColor='#2A4272'
				>
					View all
				</Btn>
			</div>)
		}
		
		return (
			<Menu>
				{searched}
			</Menu>
		)
	}
	
	return (
		<header className="o-navbar t-semibold">
			<div className="o-container">
				<div className="o-row">
					<div className="o-col-xs-6 o-navbar-left">
						<Dropdown overlay={categoriesMenu} trigger={['click']} placement="bottomLeft">
							<div className="bg-grey-light o-navbar-cat">
								<MenuIcon />
								<div className="o-navbar-cat-text">
									<p className="dark-blue t-20 mb-0">ALL CATEGORIES</p>
								</div>
								<CaretDownIcon />
							</div>
						</Dropdown>
						<ul className="o-navbar-list">
							<li className="t-20">
								<Link className="o-navbar-link" to="/">Home</Link>
							</li>
							<li className="t-20">
								<Link className="o-navbar-link" to="/products">Products</Link>
							</li>
							<li className="t-20">
								<Link className="o-navbar-link" to="/contact">Contact</Link>
							</li>
							<li className="t-20">
								<Link className="o-navbar-link" to="/about">About</Link>
							</li>
						</ul>
					</div>

					<div className="o-col-xs-4 o-navbar-mid">
						<form className="o-form-search">
							<Dropdown overlay={searchMenu()} trigger={['click']} placement="bottomLeft">
								<div className="o-form-group">
									<div className="o-form-icon">
										<SearchIcon />
									</div>
									<input className="o-input o-input-search" type="text" onChange={onChangeTerm} value={searchTerm} placeholder="Search Products..." />
								</div>
							</Dropdown>
						</form>
					</div>

					<div className="o-col-xs-2 o-navbar-right">
						{/* {displayIcons()} */}
						{authUser ? displayIcons() : displayAuthBtns()}
					</div>
				</div>
			</div>
		</header>
	)
}

const mapStateToProps = ({ cartReducer, auth, productReducer, messageReducer, categoryReducer }) => {
    const { authUser } = auth;
    const { cart } = cartReducer;
    const { products } = productReducer;
    const { messageCount } = messageReducer;
    const { categories } = categoryReducer;
    return { cart, authUser, products, messageCount, categories };
}

const mapDispatchToProps = {
	getCart,
	getProducts,
	getMessageCount,
	getCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontHeader);