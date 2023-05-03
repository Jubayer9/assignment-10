import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate,   } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';


const Login = () => {
  const {signIn}=useContext(AuthContext);
  const navigator =useNavigate()
  const handleLogin =event=>{
    event.preventDefault();
    const form = event.target;  
    const email = form.email.value;
    const password= form.password.value;
    console.log(email,password);

    signIn(email,password)
    .then(result=>{
      const loggedUser =result.user;
      console.log(loggedUser);
      navigator('/')
     
     })
     .catch(error =>{
      console.error(error);
     })
    
    
  }
  return (
    <Container className='w-50 mx-auto'>
      <h3>Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"name='email' placeholder="Enter email" required />
         
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"name='password' placeholder="Password" required/>
        </Form.Group>
      
        <Button variant="primary" type="submit">
          Login
        </Button> <br />

        <Form.Text>
          Don't Have an Account?
      <Link className="text-danger" to="/register">Register</Link>
          </Form.Text>
        {/*
        
        <Form.Text className="text-danger">
      
          </Form.Text>
        <Form.Text className="text-success">
      
          </Form.Text> */}
      </Form>

    </Container>
  );
};

export default Login;