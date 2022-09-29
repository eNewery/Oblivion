import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDYCKI91UnXTj8BtUPVCal_UvgxLhUqLAc",
  authDomain: "fuel-fddd1.firebaseapp.com",
  projectId: "fuel-fddd1",
  storageBucket: "fuel-fddd1.appspot.com",
  messagingSenderId: "806233350883",
  appId: "1:806233350883:web:e639a6808c25a5ec4a9bd6",
  measurementId: "G-88N4V8CEJ0"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
