import React from 'react';

const Banner = props => {
    return (
        <div className="o-banner">
            <div className="o-row flex align-center">
                <div className="o-col-xs-3">
                    <div className="o-banner-icon">
                        {props.children}
                    </div>
                
                </div>

                <div className="o-col-xs-9">
                    <div className="o-banner-content">
                        <p className="o-banner-title t-29 mb-0">{props.title}</p>
                        <p className="o-banner-text t-16 mb-0">{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;