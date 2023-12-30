import React from "react";
import { Container, Navbar,Button } from "react-bootstrap";
import { NavLink, useHistory,Link } from "react-router-dom";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import { authActions } from "./store";
import Nav from 'react-bootstrap/Nav';
import "./Navbar.css";


const NavBar=()=>{
    const dispatch=useDispatch();
    const isLoggedin=useSelector(state=>state.authReducer.isLoggedin)
    const history=useHistory()
const logoutHandler=()=>{
    dispatch(authActions.Logout())
 localStorage.clear()
 history.replace("/Login")
}

    return (
        <Navbar bg="dark" variant="dark" style={{width:'100%'} }>
            <Navbar.Brand>Mail Box client</Navbar.Brand>
        {/* // <Navbar bg="dark" variant="dark" style={{width:'100%'} }>
        // <Container> */}
        
        {/* // <Navbar.Brand>Mail Box client</Navbar.Brand>
        // {!isLoggedin &&<NavLink to="/Login" className="text-decoration-none" style={{color:"white"}}><Button variant="outline-info">Login</Button></NavLink>}
        // {isLoggedin &&<Button onClick={logoutHandler} variant="outline-danger">Logout</Button>} */}
        <Nav className="Navbar"
      
    >
      {isLoggedin && <Nav.Item>
        <Link className='navbar_text' to="/inbox">Inbox</Link>
      </Nav.Item>}
      <Nav.Item>
        <Link className='navbar_text' to="/sent">Outbox</Link>
      </Nav.Item>
       <Nav.Item>
        <Link className='navbar_text' to="/editor">Compose</Link>
      </Nav.Item>
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
        )
}

export default NavBar;