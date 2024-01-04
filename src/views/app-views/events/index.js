import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import EventList from './event-list';
import LoginPage from 'views/front-views/Login';
import EventContext from 'contexts/EventContext';


const Bookings = (props) => {
    const { match } = props;
    const [events, setEvents] = useState(null);

    const data = {
        events,
        setEvents
    }

    return (
		<EventContext.Provider value={data}>
            <Routes>
                <Route path='/' Component={EventList} />	
                {/* <Route path={`${match.url}/edit/:id`} component={EditBooking} /> */}
            </Routes>
        </EventContext.Provider>
	)
} 

export default Bookings;