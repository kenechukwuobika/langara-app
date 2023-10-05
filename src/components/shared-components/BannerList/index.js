import React from 'react';
import Banner from '../Banner';
import { 
	HeadsetIcon,
  HighQualityIcon,
  SecureIcon,
} from 'assets/svg'

const BannerList = () => {
  return (
    <div className="o-banner-list">
      <div className="o-row">
    <div className="o-col-xs-4">
      <Banner 
        title="Customer Support"
        text="24/7 We are customer care best support"
      >
        <HeadsetIcon />
      </Banner>
    </div>
    <div className="o-col-xs-4">
      <Banner 
        title="Secure Payment"
        text="Pay with Stripe, the world's top payment method"
        icon={SecureIcon}
        >
        <SecureIcon />
      </Banner>
    </div>
    <div className="o-col-xs-4">
      <Banner 
        title="Quality Products"
        text="we offer the best quality products to help you with your daily activities"
        >
        <HighQualityIcon />
      </Banner>
    </div>
      </div>
    </div>
  )
}

export default BannerList;