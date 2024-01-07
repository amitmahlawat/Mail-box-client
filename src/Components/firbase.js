import { getFirestore } from "firebase/firestore"
import { initializeApp } from 'firebase/app';
import { collection } from "firebase/firestore";
import { doc, setDoc,deleteDoc } from "firebase/firestore";


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
  const updateEmailProperty =async (data, propertyName, newValue=false) => {
    await setDoc(doc(db,"emails",data.docId),{
      [propertyName]: newValue
    },{ merge: true })
  };
  const deleteDocument=async(data)=>{
await deleteDoc(doc(db, "emails", data.docId));

  }
  export {db,updateEmailProperty,deleteDocument};