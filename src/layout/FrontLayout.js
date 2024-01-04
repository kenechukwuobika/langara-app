import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/front-views/Home';
import Introduction from '../views/front-views/Introduction';
import Result from '../views/front-views/Result';
import Team from '../views/front-views/Team';
import Login from '../views/front-views/Login';

import Header from '../components/Header';

const FrontLayout = () => {

    return (
        <>
            <Header />
            
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/introduction' Component={Introduction} />
                <Route path='/results/:query' Component={Result} />
                <Route path='/team' Component={Team} />
                <Route path='/login' Component={Login} />
            </Routes>
        </>
    )

}

export default FrontLayout;