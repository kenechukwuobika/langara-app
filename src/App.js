import { useState } from 'react';
import { Route, Routes, HashRouter as Router } from 'react-router-dom';

import EventContext from 'contexts/EventContext';

import Home from 'views/Home';
import Introduction from 'views/Introduction';
import Result from 'views/Result';
import Team from 'views/Team';

import Header from 'components/Header';

function App() {

    const [events, setEvents] = useState([]);

    return (
        <EventContext.Provider value={{ events, setEvents }}>
            <Router>
                <Header />
                
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/introduction' Component={Introduction} />
                    <Route path='/results/:query' Component={Result} />
                    <Route path='/team' Component={Team} />
                </Routes>
            </Router>
        </EventContext.Provider>
    );
}

export default App;
