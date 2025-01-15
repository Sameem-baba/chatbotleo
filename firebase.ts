import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
	apiKey: "AIzaSyAxrK3UScrEF3S3NH7ZzFe5uAFrI__rqVk",
	authDomain: "ai-chatbot-c5d52.firebaseapp.com",
	projectId: "ai-chatbot-c5d52",
	storageBucket: "ai-chatbot-c5d52.firebasestorage.app",
	messagingSenderId: "592964836177",
	appId: "1:592964836177:web:7358e36faa339583b1d170",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
