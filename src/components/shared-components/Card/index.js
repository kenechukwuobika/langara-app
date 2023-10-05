import React from 'react';
import Btn from 'components/shared-components/Btn';

const Card = props => {

    const renderBtn = () => {
        if(!props.btnText) return(<></>);
        return (
            <Btn
                backgroundColor='#00729F'
                textSize={14}
                rounded={true}
                onClick={props.onClick}
                >
                {props.btnText}
            </Btn>
        )
    }

    return (
        <div className="o-card">
            <div className="o-card-top">
                <p className="t-28 mb-0">{props.title}</p>
            </div>

            <div className="o-card-body">
                {props.children}
            </div>

            <div className="o-card-bottom">
                <div className="o-card-btn">
                    {renderBtn()}
                </div>
            </div>
        </div>
    )
}

export default Card;