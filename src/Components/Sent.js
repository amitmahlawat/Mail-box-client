import React, { useEffect, useState } from "react";
// import { collection } from "firebase/firestore";
// import { collection, doc, getDocs } from "firebase/firestore";
import { mailActions } from "./reducers/mailreducer";
import "./Sent.css";
import { useHistory } from "react-router-dom";
import {useSelector,useDispatch } from "react-redux";
import { getfirebaseData } from "./Utils";
import Store from "./store";
import { Button } from "react-bootstrap";
import { deleteDocument } from "./firbase";


function Sent() {
  const dispatch=useDispatch()
const history=useHistory()
   
    const Sentmail=useSelector((state)=>state?.mailReducer?.sentMail)
    useEffect(()=>{
        console.log("sentmail",Sentmail)
        getfirebaseData()
    },[])
    const openMail=(data)=>{
      Store.dispatch(mailActions.selectMail(data))
      history.push('/EmailDetails')
    }
    const deleteMail=(data)=>{
      // deleteDocument(data)
    getfirebaseData();
    }
    
  return (
    <div className="mail">
      
      {Sentmail.length > 0 && Sentmail.map((data,index) => {
        
        return (
          <div className="mail_container">
        <div key={index} className="inbox-mail" onClick={()=>openMail(data)}>
          <h4>{data.to}</h4>
          <h4>{data.subject}</h4>
          <p>{data.message}</p>
          <Button onClick={()=>deleteMail(data)}  variant="btn btn-sm btn-outline-danger delbtn">Del</Button></div>
          </div>
          
        );
      })}



    </div>
  );
}

export default Sent;
