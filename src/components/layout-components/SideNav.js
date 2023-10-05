import React from "react";
import { Layout } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import MenuContent from './MenuContent'

const { Sider } = Layout;

export const SideNav = ({ routeInfo, hideGroupTitle, localization = true }) => {
  const props = {  routeInfo , hideGroupTitle, localization}
  return (
    <Sider 
      className='side-nav' 
      width={250} 
      collapsed={false}
    >
      <Scrollbars autoHide>
        <MenuContent 
          type='SIDE' 
          {...props}
        />
      </Scrollbars>
    </Sider>
  )
}


export default SideNav;
