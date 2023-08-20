
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCIA3Qf7dqrWMzyIjTiiQOScdrn9QB_CjI",
    authDomain: "chat-app12-4d53d.firebaseapp.com",
    projectId: "chat-app12-4d53d",
    storageBucket: "chat-app12-4d53d.appspot.com",
    messagingSenderId: "861606289100",
    appId: "1:861606289100:web:b9679781657c8f4cef2c69"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage=getStorage();
export const db=getFirestore();
