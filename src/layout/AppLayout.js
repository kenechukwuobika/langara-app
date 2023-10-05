import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Events from 'views/app-views/events';
import { Layout } from 'antd';

import AppHeader from '../components/layout-components/AppHeader';
import AppSideBar from '../components/layout-components/AppSideBar';
import navigationConfig from "../configs/NavigationConfig";

const AppLayout = () => {
    const token = localStorage.getItem("auth_token");
    const { Content } = Layout
    // const history = useNavigate();

    // if(!token) {
    //     history('/login')
    // }

    return (
            <Layout>
                <AppHeader />
                
                    <Layout>

                        <AppSideBar navigation={navigationConfig.dashBoardNavTree} />

                        <Layout style={{ padding: '0 24px 24px' }}>
                        
                        <Content
                            className="site-layout-background"
                            style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            }}
                        >
                            <Routes>
                                <Route path='/events/*' Component={Events} />
                            </Routes>
                        </Content>
                        </Layout>
                    </Layout>

            </Layout>
    )

}

export default AppLayout;