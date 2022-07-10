import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBJQjW6DdJfcIFtASNKbDk2x4f-JV51I_g",
  authDomain: "restorantapp-79073.firebaseapp.com",
  databaseURL: "https://restorantapp-79073-default-rtdb.firebaseio.com",
  projectId: "restorantapp-79073",
  storageBucket: "restorantapp-79073.appspot.com",
  messagingSenderId: "791048492874",
  appId: "1:791048492874:web:d60ddc2bf6ca1d13dd13b3",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
