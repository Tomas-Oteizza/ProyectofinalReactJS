import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAPkJyN3Oj82eaG6UqyW0Q5KY2-tfE-pKA",
  authDomain: "proyectofinal-reactjs-oteizza.firebaseapp.com",
  projectId: "proyectofinal-reactjs-oteizza",
  storageBucket: "proyectofinal-reactjs-oteizza.appspot.com",
  messagingSenderId: "95647286131",
  appId: "1:95647286131:web:f65b920a884d54a112fb06"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);