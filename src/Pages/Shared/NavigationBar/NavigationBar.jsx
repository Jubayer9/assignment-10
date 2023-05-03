import React, { useContext } from 'react';
import { Button,  Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    .then()
    .catch(error => console.error(error))
  }
  return (


    
      <Navbar className='
       pt-4 pb-4 ps-5 pe-3' collapseOnSelect expand="lg" bg="dark" variant="dark">

        <Navbar.Brand className=' text-danger'>Super Chef BD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <Nav.Link className='me-5 pe-5' href="chef">Home</Nav.Link>
            <Nav.Link className='me-5 pe-5' href="blog">Blog</Nav.Link>
         

            {user ?
              <Button onClick={handleLogOut} variant="secondary"><FaUserCircle /> LogOut</Button> :
              <Link to="/login">

                <Button variant="secondary">  Login</Button>
              </Link>




            }
          </Nav>
        </Navbar.Collapse>

      </Navbar>
 

  );
};

export default NavigationBar;