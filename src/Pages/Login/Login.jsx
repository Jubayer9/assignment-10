import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Fairebase/Fairebase.config';


const Login = () => {
  
  const auth = getAuth(app)
  const githubProvider = new GithubAuthProvider()







  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error.message))
  }

  const { signIn } = useContext(AuthContext);
  const navigator = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/home'

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigator(from, { replace: true })

      })
      .catch(error => {
        console.error(error);
      })
      
    }
    const handleGithubSignIn = () => {
      signInWithPopup(auth, githubProvider)
      .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error=> console.error(error))
    }
  return (
    <Container className='login-container w-50 mx-auto'>
      <h3>Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />

        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
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
      <div className='login-btn-container'>
      <button className='login-btn' onClick={handleGoogleSignIn}><FcGoogle /> Login with Google</button>
       <button className='login-btn' onClick={handleGithubSignIn}><FaGithub /> Login with Github</button>
      </div>
    </Container>
  );
};

export default Login;