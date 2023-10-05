import { doc, getDocs, addDoc, collection, query, where } from "firebase/firestore";

import { app, db } from 'services/firebaseService';

const eventService = {}

eventService.getEvents = async () => {
    const categories = await getDocs(collection(db, "categories"));
    console.log(categories[0].data())
    return categories
}

export default eventService;