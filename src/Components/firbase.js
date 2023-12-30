import { getFirestore } from "firebase/firestore"
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyDHE9meBBS2mXVkAt4m-jF_HdmJaA8k-wQ",
    authDomain: "mail-box-client-2d12a.firebaseapp.com",
    databaseURL: "https://mail-box-client-2d12a-default-rtdb.firebaseio.com",
    projectId: "mail-box-client-2d12a",
    storageBucket: "mail-box-client-2d12a.appspot.com",
    messagingSenderId: "828270420206",
    appId: "1:828270420206:web:58de66dd6c020eaa4893ff",
    measurementId: "G-QCF0K752X0"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app);

  export {db};