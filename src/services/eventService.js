import { doc, getDocs, addDoc, collection, query, where } from "firebase/firestore";
import { notification } from 'antd';

import { app, db } from 'services/firebaseService';


export const getEvents = async () => {
    try {
        const events = await getDocs(collection(db, "events"));
        return events.docs.map( (event, index) => {
            return {
                key: index + 1, ...event.data()
            }
        })
        

    } catch (error) {
        notification.error({
            message: error.response?.data.message || "Something went wrong, Please try again."
        })
    }
}