import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { env } from 'configs/EnvironmentConfig';
import Utils from 'utils'

const ProductTable = (props) => {

    const { item, onRemoveItem, onUpdateCartQuantity } = props;

    const [ cartItem, setCartItem] = useState({})
    const [ quantity, setQuantity ] = useState(item.quantity)

    useEffect(() => {
        setCartItem(item)
    }, [item])

    const onQuantityChange = (e) => {
        let newQuantity = e.target.value * 1
        newQuantity <= 1 ? setQuantity(1) : setQuantity(newQuantity);
    }

    const onQuantityIncrease = id => {
        const newQuantity = quantity+1;
        setQuantity(newQuantity);
        onUpdateCartQuantity(id, newQuantity)
    }

    const onQuantityDecrease = id => {
        if(quantity > 1){
            const newQuantity = quantity-1;
            setQuantity(newQuantity);
            onUpdateCartQuantity(id, newQuantity)
        }
    }


  if(item){
    return (
        <tr key={item._id}>
            <td>
                <div className="o-table-desc">
                    <img className="o-table-img" src={`${env.API_ENDPOINT_URL}/images/products/${item.coverImage}`} alt={item.name} />
                
                    <div>
                        <div className="o-table-name">
                            <Link to={`products/${item._id}`} className="t-24">{Utils.titleCase(item.name)}</Link>
                        </div>
    
                        <div className="o-table-price">
                            <span className="t-14 grey">Unit Price: ${Utils.formatNumber(item.price)}/day</span>
                        </div>
                    </div>
                </div>
            </td>
                
            <td>
                <div className="o-product-quantity">
                    <div className="number-input">
                        <button onClick={() => onQuantityDecrease(item._id)}></button>
                        <input className="quantity" min="0" name="quantity" onChange={onQuantityChange} value={Utils.formatNumber(quantity)} type="number" />
                        <button onClick={() => onQuantityIncrease(item._id)} className="plus"></button>
                    </div>
                </div>
            </td>
    
            <td><span className="t-24">{(item.startDate.split('T')[0]).replace(/['"]+/g, '')}</span></td>
            
            <td><span className="t-24">{(item.endDate.split('T')[0]).replace(/['"]+/g, '')}</span></td>
            
            <td><span className="t-24">${Utils.formatNumber(item.depositClaim)}</span></td>
            
            <td><span className="t-24">${Utils.formatNumber(item.totalPrice)}</span></td>
            <td><span className="t-24"><Link onClick={() => onRemoveItem(item._id)} to="#">remove</Link></span></td>
        </tr>
    )
  }

  return(<div></div>)
}

export default ProductTable;