import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvV7trnCew0qnM5KDjV4L1B9W8JrSpkjk",
  authDomain: "expenseflow-b30a1.firebaseapp.com",
  projectId: "expenseflow-b30a1",
  storageBucket: "expenseflow-b30a1.firebasestorage.app",
  messagingSenderId: "341706956355",
  appId: "1:341706956355:web:9191ce1186786e00e4fef6",
  measurementId: "G-137PL8CTKM",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);   