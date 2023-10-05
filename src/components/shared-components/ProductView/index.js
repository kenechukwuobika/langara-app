import React from 'react';
import { env } from 'configs/EnvironmentConfig';
import Utils from 'utils'

const ProductView = (props) => {

    const { item } = props;

    return (
        <div key={item._id}>
            <div className="o-table-desc">
                <img className="o-table-img" src={`${env.API_ENDPOINT_URL}/images/products/${item.coverImage}`} alt={item.name} />
            
                <div>
                    <div className="o-table-name">
                        <span className="t-24 dark-blue">{Utils.titleCase(item.name)}</span>
                    </div>

                    <div className="o-table-price">
                        <span className="t-14 grey">Unit Price: ${Utils.formatNumber(item.price)}/day</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProductView;