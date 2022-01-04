import 'firebase/firestore';
import 'firebase/auth';

import {getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYX5uDUeLNlu8Y_N4ZHK1HVJa-08QkJ04",
    authDomain: "curso-react-native-coder.firebaseapp.com",
    projectId: "curso-react-native-coder",
    storageBucket: "curso-react-native-coder.appspot.com",
    messagingSenderId: "995745082336",
    appId: "1:995745082336:web:9e953203f133a1ab9f1985"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

