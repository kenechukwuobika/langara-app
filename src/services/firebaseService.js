import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore";

import { firebaseConfig } from '../configs/AppConfig';

export const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);