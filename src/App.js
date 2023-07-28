import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Home from './layout/Home';
import Introduction from './layout/Introduction';
import Result from './layout/Result';
import Team from './layout/Team';

function App() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/introduction' Component={Introduction} />
                <Route path='/results/:query' Component={Result} />
                <Route path='/team' Component={Team} />
            </Routes>

        </Router>
    );
}

export default App;
