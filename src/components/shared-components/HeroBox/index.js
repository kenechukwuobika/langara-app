import React from 'react';
import HeroSub from 'assets/images/hero-sub.png'
import Btn from 'components/shared-components/Btn';

const HeroBox = props => {
  return (
    <div className="o-row">
     <div className="o-col-12">
        <div className="o-hero">
            <div className="o-col-xs-8">
            <div className="o-hero-border">
                
                <div className="o-hero-content">
                <h1 className="o-hero-heading">{props.heading}</h1>
                <div className="o-hero-sub">
                    <h2 className="t-40 blue">{props.subHeading}</h2>
                </div>
                <div className="o-hero-text">
                    <p className="t-24 white">{props.text}</p>
                </div>

                <div className="o-hero-btn">
                    <Btn
                    link={props.btnLink}
                    backgroundColor={props.btnBackground}
                    textSize={props.btnTextSize}
                    >
                    {props.btnText}
                    </Btn>
                </div>
                </div>

                <img src={HeroSub} className="o-hero-img" alt="hero" />
                

            </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default HeroBox;