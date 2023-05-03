import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
const NavigationBar = () => {
  const { user } = useContext(AuthContext)
  return (


    <Container>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

        <Navbar.Brand className='text-danger' href="#home">Super Chef BD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <Link to="chef">Home</Link>
            <Link to="blog">Blog</Link>
            {
              user &&
              <FaUserCircle />
            }

            {user ?
              <Button variant="secondary">LogOut</Button> :
              <Link to="/login">

                <Button variant="secondary">Login</Button>
              </Link>




            }
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </Container>

  );
};

export default NavigationBar;