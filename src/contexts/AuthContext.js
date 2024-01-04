import React, { createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = (props) => {
    const { data, children } = props;

    return (
        <AuthContext.Provider value={{...data}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
