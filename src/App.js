import { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import {
    getAuth,
    onAuthStateChanged
} from "firebase/auth";

import AppLayout from 'layout/AppLayout';
import FrontLayout from 'layout/FrontLayout';
import AuthContext from 'contexts/AuthContext';

function App() {

    const [token, setToken] = useState(null);
    const [authUser, setAuthUser] = useState(null);

    const getToken = () => {
        const result = localStorage.getItem('auth_token');
        setToken(result)
    }

    useEffect(() => {
        getToken()
    }, [])

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setAuthUser(user)
            } 
        });
        
    }, [token])

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            <Router>
                <Routes>
                    <Route path='/*' element={<FrontLayout />} />
                    <Route path='/app/*' element={<AppLayout />} />
                </Routes>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
