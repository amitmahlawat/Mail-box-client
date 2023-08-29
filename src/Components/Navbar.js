import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const navbar=()=>{

    return (
        
        <Navbar bg="dark" variant="dark" style={{width:'100%'}}>
        <Container>
        
        <Navbar.Brand>Mail Box client</Navbar.Brand>
        <NavLink to="/Login" style={{color:"white"}}>Login</NavLink>
    
        
        </Container>
        </Navbar>
        )
}

export default navbar;