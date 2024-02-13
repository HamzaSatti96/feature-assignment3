// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB6HEQzKg__SV4JxbJRdAtX9zr0wkhchH0',
  authDomain: 'cyberfortsolutions.firebaseapp.com',
  projectId: 'cyberfortsolutions',
  storageBucket: 'cyberfortsolutions.appspot.com',
  messagingSenderId: '70603751201',
  appId: '1:70603751201:web:f264c16c154a7e07970860',
  measurementId: 'G-0V2M7TZBB8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
