import React from "react";
import Store from "./store";
import { mailActions } from "./reducers/mailreducer";
import { db } from "./firbase";
import { collection, query, getDocs } from "firebase/firestore";



const getfirebaseData = async () => {
  const q = query(collection(db, "emails"));

  const querySnapshot = await getDocs(q);
  let datalist = [];
  console.log(querySnapshot,"firebase data")
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
console.log(doc.id,"doc")
    datalist.push({
      ...doc.data(),
      docId:doc.id
    });
  });

console.log(datalist,"datalist")

  const userEmail=localStorage.getItem("email")
  Store.dispatch(mailActions.SentMail({
    data: datalist,
    useremail:userEmail
  }));
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
