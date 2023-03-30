import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import './app.css';
import Header from './components/Header';
import Home from './layout/Home';

function App() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path='/' Component={Home} />
            </Routes>

        </Router>
    );
}

export default App;
