import React from "react";
import { useHistory } from "react-router-dom";
import image from '../Asset/signup.jpg';
import { Container, Form ,Card,Row,Col,Button, NavLink} from "react-bootstrap";
import { useState,useEffect } from "react";
import { useRef } from "react";
import './signup.css'
const Signup =()=>{
    const history=useHistory();
const[isError,setIserror]=useState('')
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const[confirmPass,setConfirmPass]=useState('');
const[doLogin,setDoLogin]=useState(false) 

useEffect(()=>{
        // setConfirmPass(e.target.value)
        // const enteredPassword=e.target.value
        // console.log(confirmPass)
        if(!doLogin && password!=confirmPass){
            setIserror('password and confirm password should match')
        }else{
            setIserror(null)
        }
    
},[password,confirmPass])

const clickHandler=()=>{
    setDoLogin(true)
    setIserror(null)
}
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
    let url;
    if(doLogin){
        
        url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDHE9meBBS2mXVkAt4m-jF_HdmJaA8k-wQ'
    }else{
        url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDHE9meBBS2mXVkAt4m-jF_HdmJaA8k-wQ'
    }

try{
    const response=await fetch(url,{
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
        const data=await response.json()
        // console.log(data)
        throw new Error(data.error.message)
    }
    const data=await response.json()
    console.log(data)
    localStorage.setItem("token",data.idToken)
    if(doLogin){
    history.replace("/")
    }

    
// console.log(data)
} catch(error){
    console.log(error.message)
    alert(error.message)
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
                        
                        <h4 className="p-3">{!doLogin ? 'Sign up' : 'Login'}</h4>
                            <Form.Control value={email} type="email" placeholder="Email" className="mb-3" required onChange={(e)=>setEmail(e.target.value)}></Form.Control>
                            <Form.Control value={password} type="password" placeholder="Password" className="mb-3" required onChange={(e)=>setPassword(e.target.value)}></Form.Control>
                            {!doLogin && <Form.Control  type="password" placeholder="Confirm Password" className="mb-3" required onChange={(e)=>setConfirmPass(e.target.value)}></Form.Control>}
                        
                        </Form.Group>
                        <div className="d-grid gap-2">
                        <Button type="submit" style={{borderRadius:'50px'}}>{!doLogin ? 'Sign Up' : 'Login'}</Button>
                        </div>
                    </Form>
                    </Card.Body>

                </Card>
                <Card className="mt-3 shadow ">
                    <Card.Body>
                        {!doLogin ? <Card.Text>Have an account? <NavLink onClick={clickHandler} style={{color:"blue"}} to="/">Login</NavLink></Card.Text> : <Card.Text>Create an Account <NavLink onClick={(e)=>setDoLogin(false)} style={{color:"blue"}} to="/">Sign up</NavLink></Card.Text>}
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
            
        
      </div>



    )
}

export default Signup;