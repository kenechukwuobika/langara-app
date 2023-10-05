import {
	CHECKOUT,
	CREATE_BOOKING,
	GET_BOOKINGS,
	GET_BOOKING,
	UPDATE_BOOKING,	
	DELETE_BOOKING,
	SHOW_LOADING
} from '../constants/Actions';

const initState = {
	alert: null,
	displayAlert: false,
	loading: false,
	showMessage: false,
	redirect: ''
}

const BookingReducer = (state = initState, action) => {
	switch (action.type) {
		
		case CHECKOUT:
			return {
				...state,
				booking: action.booking,
				loading: false,
				redirect: '/app',
				displayAlert: true,
				alert: {
					type: "success",
					message: "Your booking was successful"
				}
			}
		
		case CREATE_BOOKING:
			return {
				...state,
				booking: action.booking,
				loading: false,
				alert: {
					type: "success",
					message: "Booking was created successfully"
				}
			}

		case GET_BOOKINGS:
			return {
				...state,
				bookings: action.bookings
			}

		case GET_BOOKING:
			return {
				...state,
				booking: action.booking
			}

		case UPDATE_BOOKING:
			return {
				...state,
				booking: action.booking,
				loading: false,
				alert: {
					type: "success",
					message: "Booking was updated successfully"
				}
			}

		case DELETE_BOOKING:
			return {
				...state,
				booking: action.booking,
				loading: false,
				alert: {
					type: "success",
					message: "Booking was deleted successfully"
				}
			}

		case SHOW_LOADING:
			return {
				...state,
				loading: true
			}
		
		default:
			return state;
	}
}

export default BookingReducer