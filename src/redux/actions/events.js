import { notification } from 'antd';
import { doc, getDocs, addDoc, collection, query, where } from "firebase/firestore";

import {
 
    CHECKOUT,
    GET_BOOKINGS,
	CREATE_BOOKING,
	GET_BOOKING,
	UPDATE_BOOKING,
	DELETE_BOOKING,
    SHOW_LOADING,
} from '../constants/Actions';

import eventService from 'services/eventService';
import { app, db } from 'services/firebaseService';

export const getEvents = () => async (dispatch, getState) => {
    try {
        const categories = await getDocs(collection(db, "categories"));
        console.log(categories.docs)

        const arr = categories.docs.map( category => category.data() )
        console.log(arr)
        
        dispatch({
            type: GET_BOOKINGS,
            events: arr
        });
    } catch (error) {
        notification.error({
            message: error.response?.data.message || "Something went wrong, Please try again."
        })
    }
}

// export const getEvents = (arr) => {
//     return ({
//         type: GET_BOOKINGS,
//         events: arr
//     });
// }

// export const getEvents = () => (dispatch) => {
//     firebase.database().ref("categories").on("value", function(snapshot){ 
//         var personData = snapshot.val();
//         var actionSetPersonData = getEvents(personData);
//         console.log(actionSetPersonData)
//         dispatch({
//             type: GET_BOOKINGS,
//             events: actionSetPersonData
//         });
//     }, function(error) { console.log(error); });
// }

export const createBooking = () =>  (dispatch, getState) => {
    eventService.createBooking().then(resp => {
        if(resp.status === 'success'){
            notification.success({ message: "Booking created successfully" })
            dispatch({
                type: CREATE_BOOKING,
                booking: resp.booking
            });
        }
    }).catch(error => {
        notification.error({
            message: error.response?.data.message || "Something went wrong, Please try again."
        })
    })
}

export const getBooking = (id) => (dispatch, getState) => {
    eventService.getBooking(id).then(resp => {
        if(resp.status === 'success'){
            dispatch({
            type: GET_BOOKING,
            booking: resp.booking
            });
        }
    }).catch(error => {
        notification.error({
            message: error.response?.data.message || "Something went wrong, Please try again."
        })
    })
}

export const updateBooking = () =>  (dispatch, getState) => {
    eventService.createBooking().then(resp => {
        if(resp.status === 'success'){
            notification.success({ message: "Booking updated successfully" })
            dispatch({
            type: UPDATE_BOOKING,
            booking: resp.booking
            });
        }
    }).catch(error => {
        notification.error({
            message: error.response?.data.message || "Something went wrong, Please try again."
        })
    })
}

export const deleteBooking = () =>  (dispatch, getState) => {
    eventService.createBooking().then(resp => {
        if(resp.status === 'success'){
            notification.success({ message: "Booking deleted successfully" })
            dispatch({
            type: DELETE_BOOKING,
            booking: resp.booking
            });
        }
    }).catch(error => {
        notification.error({
            message: error.response?.data.message || "Something went wrong, Please try again."
        })
    })
}

export const showLoading = () => {
    return {
      type: SHOW_LOADING,
    };
};