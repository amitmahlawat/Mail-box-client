import React from "react";
import "./store/EmailDetails.css";
import {  useSelector } from "react-redux";


const EmailDetails=()=>{
const data=useSelector(state=>state.mailReducer.selectedMail)



    return(
        <div className="Email_Body">
            <div className="Body"><h2 >{`Subject>>>${data.subject}`}</h2></div>
            
            <div className="Body">
            <h6>{`sender>>>> ${data.from}`}</h6>
            <h6>{`Reciever>>>> ${data.to}`}</h6>
            </div>
            <div>
            <p className="Body"><b>{`Message>>>${data.message}`}</b></p>
            </div>
        </div>
    )
}

export default EmailDetails;