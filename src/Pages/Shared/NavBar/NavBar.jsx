import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
    
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='text-danger' href="#home">Super Chef BD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
    
          </Nav>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link eventKey={2} href="blog">
              Blog
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             Profile
            </Nav.Link>
            <Link to="/login">
            <Button variant="secondary">Login</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
      
    );
};

export default NavBar;