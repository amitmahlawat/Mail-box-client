import React, { useEffect, useState } from "react";
import { Container, Navbar,Button } from "react-bootstrap";
import { NavLink, useHistory,Link } from "react-router-dom";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import { authActions } from "./store";
import Nav from 'react-bootstrap/Nav';
import "./Navbar.css";


const NavBar=()=>{
  const [active,setActive]=useState(2)
    const dispatch=useDispatch();
    const isLoggedin=useSelector(state=>state.authReducer.isLoggedin)
    const history=useHistory()
    const inboxData = useSelector((state) => state.mailReducer.inboxMail)
const logoutHandler=()=>{
    dispatch(authActions.Logout())
 localStorage.clear()
 history.replace("/Login")
}



    return (
      < >
        <Navbar bg="dark" variant="dark" style={{width:'100%'} }>
            <Navbar.Brand>Mail Box client</Navbar.Brand>
        {/* // <Navbar bg="dark" variant="dark" style={{width:'100%'} }>
        // <Container> */}
        
        {/* // <Navbar.Brand>Mail Box client</Navbar.Brand>
        // {!isLoggedin &&<NavLink to="/Login" className="text-decoration-none" style={{color:"white"}}><Button variant="outline-info">Login</Button></NavLink>}
        // {isLoggedin &&<Button onClick={logoutHandler} variant="outline-danger">Logout</Button>} */}
        
        <Nav className="Navbar">
      {isLoggedin &&
      <div className="Navbar">
     
    </div> }
      {/* <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>  */}
      
    </Nav>
    <div className="button-container" >
    {isLoggedin &&<Button onClick={logoutHandler} variant="outline-danger">Logout</Button>}
    {!isLoggedin &&<NavLink to="/Login" className="text-decoration-none" style={{color:"white"}}><Button variant="outline-info">Login</Button></NavLink>}
    
    </div>
       
    </Navbar>
    {isLoggedin &&
    <div className="sidebar">
      
    <Link className={`sidebar_options ${active==1 && "active"}`} onClick={()=>setActive(1)} to="/editor">Compose</Link>
      <Link className={`sidebar_options ${active==2 && "active"}`} onClick={()=>setActive(2)} to="/inbox">Inbox {inboxData?.reduce((count, obj) => !obj.isRead ? count + 1 : count, null)}</Link>
      <Link className={`sidebar_options ${active==3 && "active"}`} onClick={()=>setActive(3)} to="/sent">Outbox</Link>
      

    </div>}
    </>
        )
}

export default NavBar;