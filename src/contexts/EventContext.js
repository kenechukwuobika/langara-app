import React, { createContext } from 'react';

const EventContext = createContext();

export const EventProvider = (props) => {
    const { 
        events,
        setEvents,
        event,
        setEvent, 
        children 
    } = props;

    return (
        <EventContext.Provider value={{
            events,
            setEvents,
            event,
            setEvent
        }}>
            {children}
        </EventContext.Provider>
    );
};

export default EventContext;
