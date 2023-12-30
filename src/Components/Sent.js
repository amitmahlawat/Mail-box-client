import React, { useEffect, useState } from "react";
// import { collection } from "firebase/firestore";
// import { collection, doc, getDocs } from "firebase/firestore";

import "./Sent.css";
import {useSelector } from "react-redux";
import { getfirebaseData } from "./Utils";


function Sent() {
  
   
    const Sentmail=useSelector((state)=>state?.mailReducer?.sentMail)
    useEffect(()=>{
        console.log("sentmail",Sentmail)
        getfirebaseData()
    },[])
  
    
  return (
    <div className="mail">
      {Sentmail.length > 0 && Sentmail.map((data,index) => {
        
        return (
        <div key={index} className="inbox-mail">
          <h4>{data.to}</h4>
          <h4>{data.subject}</h4>
          <p>{data.message}</p>
          </div>
        );
      })}



    </div>
  );
}

export default Sent;
