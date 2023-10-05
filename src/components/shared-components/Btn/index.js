import React from 'react'
import { Link } from 'react-router-dom';

const Btn = props => {

    const style = {
        backgroundColor: props.backgroundColor,
        borderRadius: props.rounded ? '5px' : '',
        ...props.style
    };

    if(props.link){
        return (
            <Link to={props.link} className="o-btn" style={style}>
                <p style={{ color: props.textColor }} className={`o-btn-text mb-0 t-${props.textSize}`}>{props.children}</p>
            </Link>
        )
    }

    return (
		<button onClick={props.onClick} className="o-btn" style={style}>
            <p style={{ color: props.textColor }} className={`o-btn-text mb-0 t-${props.textSize}`}>{props.children}</p>
        </button>
	)
	
}

export default Btn
