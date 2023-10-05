import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'redux/store';

// import Home from './views/Home';
import AppLayout from './layout/AppLayout';
import FrontLayout from './layout/FrontLayout';

function App() {

    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path='/*' element={<FrontLayout />} />
                    <Route path='/app/*' element={<AppLayout />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
