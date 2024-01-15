import { collection, doc, getDocs, getDoc, updateDoc, addDoc } from "firebase/firestore";
import { notification } from 'antd';

import { db } from 'services/firebaseService';


export const getEvents = async () => {
    try {
        const events = await getDocs(collection(db, "events"));
        return events.docs.map((event, index) => {
            return {
                key: index+1,
                id: event.id,
                 ...event.data()
            }
        })
        

    } catch (error) {
        notification.error({
            message: error.response?.data.message || "Something went wrong, Please try again."
        })
    }
}

export const createEvent = async (data) => {
    try {
        const event = await addDoc(collection(db, "events"), data);
        return event

    } catch (error) {
        console.log(error)
        notification.error({
            message: error.response?.data.message || "Something went wrong, Please try again."
        })
    }
}

export const getEvent = async (id) => {
    try {
        const docRef = doc(db, "events", id);
        const docSnap = await getDoc(docRef);
            if(docSnap.exists()) {
            return docSnap.data();
        }
        

    } catch (error) {
        notification.error({
            message: error.response?.data.message || "Something went wrong, Please try again."
        })
    }
}

export const updateEvent = async (id, data) => {
    try {
        await updateDoc(doc(db, "events", id), data);
        return true;
    } catch (error) {
        notification.error({
            message: error.response?.data.message || "Something went wrong, Please try again."
        })
    }
}