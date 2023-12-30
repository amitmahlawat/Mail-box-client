import React from "react";
import Store from "./store";
import { mailActions } from "./reducers/mailreducer";
import { db } from "./firbase";
import { collection, query, getDocs } from "firebase/firestore";



const getfirebaseData = async () => {
  const q = query(collection(db, "emails"));

  const querySnapshot = await getDocs(q);
  let datalist = [];
  console.log(querySnapshot)
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    datalist.push(doc.data());
  });

  Store.dispatch(mailActions.SentMail(datalist));
  const userEmail=localStorage.getItem("email")
  console.log('userEmail',userEmail)
  Store.dispatch(
    mailActions.InboxMail({
      data: datalist,
      useremail: userEmail
    
    })
  );
  const m=Store.getState().mailReducer.sentMail;
  console.log(m)
};

export {
    getfirebaseData
};
