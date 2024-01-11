import { getDocs, collection } from "firebase/firestore";
import { notification } from 'antd';

import { db } from 'services/firebaseService';


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