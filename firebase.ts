import { initializeApp, FirebaseApp, getApps, getApp } from 'firebase/app';
import { Auth, getAuth, initializeAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID} from '@env'

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};


let firebaseApp: FirebaseApp;
let fireAuth: Auth;

if (getApps().length < 1) {
  firebaseApp = initializeApp(firebaseConfig);
  fireAuth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  firebaseApp = getApp();
  fireAuth = getAuth();
}

export { firebaseApp, fireAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut };