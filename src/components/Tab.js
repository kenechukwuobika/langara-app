import { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

const Tab = (props) => {
    const { tabItem, setTabItem, items, type } = props;

    const displayTabItems = () => {
        return items.map((item, index) => {
            return(
                <div className='tab__item' key={index}>
                    <Link
                        onClick={() => setTabItem(item)} 
                        to={`?${type}=${item}`} 
                        className={`tab__link ${item === tabItem ? 'tab__link--active' : ''}`}
                    >
                        {item}
                    </Link>
                </div>        
            )
        })
    }

    return (
        <div className="tab tab__fill">
            {displayTabItems()}
        </div>
    )
}

export default Tab;