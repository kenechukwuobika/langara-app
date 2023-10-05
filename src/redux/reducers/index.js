import { combineReducers } from 'redux';
import BookingReducer from './BookingReducer';

const reducers = combineReducers({
    bookingReducer: BookingReducer
});

export default reducers;