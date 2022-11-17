import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEflh8SAVo1XbfTcvUKHMQY9qO0dvi9kE",
  authDomain: "vite-project-fa60c.firebaseapp.com",
  projectId: "vite-project-fa60c",
  storageBucket: "vite-project-fa60c.appspot.com",
  messagingSenderId: "119799323481",
  appId: "1:119799323481:web:9ac578b5cf0582758eca48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount('#app');
