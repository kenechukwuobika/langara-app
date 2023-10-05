import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import reducer from "../reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({ 
    reducer,
    devTools: composeWithDevTools(applyMiddleware(thunk)),
    
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['GET_BOOKINGS'],  
        },
    })
    
        
});

export default store;

