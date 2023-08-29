import React from "react";
import image from '../Asset/signup.jpg';
import { Container, Form ,Card,Row,Col,Button} from "react-bootstrap";
import { useState,useEffect } from "react";
import { useRef } from "react";
import './signup.css'
const Signup =()=>{
const[isError,setIserror]=useState('')
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const[confirmPass,setConfirmPass]=useState('');

useEffect(()=>{
        // setConfirmPass(e.target.value)
        // const enteredPassword=e.target.value
        console.log(confirmPass)
        if(password!=confirmPass){
            setIserror('password and confirm password should match')
        }else{
            setIserror(null)
        }
    
},[password,confirmPass])

const submitHandler=async(e)=>{
    e.preventDefault()
    // if(isError){
    //     return;
    // }
    if(!isError){
        
    
const user={
    Email:email,
    Password:password,
}
    // console.log(user)
try{
    const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDHE9meBBS2mXVkAt4m-jF_HdmJaA8k-wQ',{
        method:'POST',
        body:JSON.stringify({
            email:user.Email,
            password:user.Password,
            returnSecureToken:true
        }),
        
        headers:{
            'Content-Type':'application/json'
          }
    })
    if(!response.ok){
        throw new Error('something went wrong')
    }else{
        console.log('user has successfully registered')
    }

    const data=await response.json()
} catch(error){
    console.log(error)
}


  
}}


    return(
        <div className="bg" >
            
        <Container  >
        
            
            <Row className="pt-5">
            <p style={{position:"fixed",color:"red",fontSize:"30px",textAlign:"left"}}>{isError}</p>
                
                <Col className="offset-5 mt-5 pt-5 col-3"  >
                   
                <Card className="mt-5 shadow " style={{borderRadius:"0"}} >
                    <Card.Body>
                    <Form onSubmit={submitHandler}  >
                        <Form.Group>
                        
                        <h4 className="p-3">SignUp</h4>
                            <Form.Control value={email} type="email" placeholder="Email" className="mb-3" required onChange={(e)=>setEmail(e.target.value)}></Form.Control>
                            <Form.Control value={password} type="password" placeholder="Password" className="mb-3" required onChange={(e)=>setPassword(e.target.value)}></Form.Control>
                            <Form.Control  type="password" placeholder="Confirm Password" className="mb-3" required onChange={(e)=>setConfirmPass(e.target.value)}></Form.Control>
                        
                        </Form.Group>
                        <div className="d-grid gap-2">
                        <Button type="submit" style={{borderRadius:'50px'}}>Sign Up</Button>
                        </div>
                    </Form>
                    </Card.Body>

                </Card>
                <Card className="mt-3 shadow ">
                    <Card.Body>
                        <Card.Text>Have an account? <a href="/">Login</a></Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
            
        
      </div>



    )
}

export default Signup;