import React, { useState } from "react";
import "./Editor.css";
import { Button, Form, Row, Col, Container, Card } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore"; 
import { db } from "./firbase";

const Texteditor = () => {

const [to,setTo]=useState('');
const[subject,setSubject]=useState('');
const[message,setMessage]=useState('');
// const[isDelete,setIsDelete]=useState(false);
const[isRead,setIsRead]=useState(false);
const submitHandler=async(e)=>{
  e.preventDefault()
  const from=localStorage.getItem('email')
  console.log(to,subject,message,from)
  
  
  try {
    const docRef = await addDoc(collection(db, "emails"), {
      to,
      subject,
      message,
      from,
      isRead,
      id:Math.random().toString(36).substring(2)
    });
    setTo('');
    setSubject('');
    setMessage('');
    
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  

}



  return (
    <div className="m-5 text-start  ">
      <h2 className="compose" >Compose Mail</h2>
      <Row>
        <Col className="col-5 offset-2">
          <Card>
            <Form className="p-3" onSubmit={submitHandler}>
              <Form.Label >To:</Form.Label>
              <Form.Control type="email" value={to} onChange={(e)=>setTo(e.target.value)}></Form.Control>

              <Form.Label>Subject:</Form.Label>
              <Form.Control type="text" value={subject} onChange={(e)=>setSubject(e.target.value)}></Form.Control>
            
              <Form.Label>Message</Form.Label>

              
              <Form.Control as="textarea" rows={3} value={message} onChange={(e)=>setMessage(e.target.value)} />
               

              <div className="text-end">
                <Button type="submit">Send</Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Texteditor;
