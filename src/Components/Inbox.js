import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import "./Sent.css";
import { getfirebaseData } from './Utils';

function Inbox() {

const inboxData=useSelector(state=>state.mailReducer.inboxMail)
console.log(inboxData)
useEffect(()=>{
  getfirebaseData()
},[])
  return (
    <div className="mail">
    {
        inboxData.map((data,index)=>(
            <div key={index} className="inbox-mail">
        <h4>{data.to}</h4>
        <h4>{data.subject}</h4>
        <p>{data.message}</p>
        
        </div>
        ))
    }
    </div>
  )
}

export default Inbox
