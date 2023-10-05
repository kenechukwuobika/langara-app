import React from 'react';
import { Route, Routes } from 'react-router-dom';

import EventList from './event-list';
import LoginPage from 'views/front-views/Login';
// import EditBooking from './edit-booking';


const Bookings = (props) => {
    const { match } = props;
    return (
		<Routes>
			<Route path='/' Component={EventList} />	
			{/* <Route path={`${match.url}/edit/:id`} component={EditBooking} /> */}
		</Routes>
	)
} 

export default Bookings;