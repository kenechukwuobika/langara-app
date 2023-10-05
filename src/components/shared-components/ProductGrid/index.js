import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { env } from 'configs/EnvironmentConfig'
import Btn from 'components/shared-components/Btn';
import Rating from 'components/shared-components/Rating';
import { addToCart } from 'redux/actions/cart';

const Product = (props) => {

    const { product, col } = props;

    return (
        <div key={product.id} className={`o-col-xs-${col}`}>
            <div className="o-card-product">
                <Link to={`/products/${product._id}`}>
                    <img className="o-card-product-img" src={`${env.API_ENDPOINT_URL}/images/products/${product.coverImage}`} alt={product.name} />
                </Link>
                <div className="o-card-product-name">
                    <Link to={`/products/${product.name}`} className="t-20">{product.name}</Link>
                </div>
                <div className="o-card-product-ratings">
                    <Rating 
                        rating={product.rating}
                    />
                </div>
                <div className="o-card-product-price">
                    <span className="t-20 grey">${product.price}/day</span>
                </div>
                <div className="o-card-product-btn">
                    <Btn
                        link={`/products/${product._id}`}
                        backgroundColor='#00729F'
                        textSize={18}
                        rounded={true}
                        >
                        VIEW PRODUCT
                    </Btn>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ cartReducer }) => {
    const { cart } = cartReducer;
    return { cart };
}

const mapDispatchToProps = {
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);