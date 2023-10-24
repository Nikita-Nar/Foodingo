import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCo-tqt5WWhZv_ckJXrJgU30WxjFw5ZjLY",
  authDomain: "fir-setup-55360.firebaseapp.com",
  projectId: "fir-setup-55360",
  storageBucket: "fir-setup-55360.appspot.com",
  messagingSenderId: "965439790089",
  appId: "1:965439790089:web:29514bd048e2eeb5722cd8",
};

const app = initializeApp(firebaseConfig); // Initalizes app firebase config
const db = getFirestore(app);

export default db;
