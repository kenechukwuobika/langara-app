import React, { createContext } from 'react';

const EventContext = createContext();

export const EventProvider = (props) => {
    const { data, children } = props;

    return (
        <EventContext.Provider value={{...data}}>
            {children}
        </EventContext.Provider>
    );
};

export default EventContext;
