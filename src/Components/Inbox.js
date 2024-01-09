import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Sent.css";
import { getfirebaseData } from "./Utils";
import { useHistory } from "react-router-dom";
import { mailActions } from "./reducers/mailreducer";
import Store from "./store";
import firebase from "firebase/app";
import "firebase/firestore";
import { deleteDocument, updateEmailProperty } from "./firbase";
import { Button } from "react-bootstrap";
function Inbox() {
  const dispatch = useDispatch;
  const history = useHistory();
  const inboxData = useSelector((state) => state.mailReducer.inboxMail);

  useEffect(() => {
    getfirebaseData();
  }, []);

  const openMail = (data) => {
    updateEmailProperty(data, "isRead", true);
    getfirebaseData();
    Store.dispatch(mailActions.selectMail(data));
    history.push("/EmailDetails");
  };
  const deleteMail=(data)=>{
    deleteDocument(data)
    getfirebaseData();
  }

  return (
    <div className="mail">
      {inboxData.map((data, index) => (
        <div className="mail_container">
          {data.isRead ? null : <div className="dot" />}
        <div key={index} className={`inbox-mail ${!data.isRead && "unread"} `} onClick={() => openMail(data)}>
          
          <h4>{data.from}</h4>
          <h4>{data.subject}</h4>
          <p>{data.message}</p>
          
        </div>
        <Button onClick={()=>deleteMail(data)}  variant="btn btn-sm btn-outline-danger delbtn">Del</Button>
        </div>
      ))}
    </div>

  );
}

export default Inbox;
