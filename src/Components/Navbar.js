import React from "react";
import { Container, Navbar } from "react-bootstrap";

const navbar=()=>{

    return (
        
        <Navbar bg="dark" variant="dark" style={{position:"fixed", width:'100%'}}>
        <Container>
        
        <Navbar.Brand>Mail Box client</Navbar.Brand>
        
        </Container>
        </Navbar>
        )
}

export default navbar;