import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, email, password, photo);
        createUser(email, password)
            .then(result => {
                const createUser = result.user;
                console.log(createUser);
            })
           
    }
    return (



        <Container className='login-container w-50 mx-auto mt-5'>
            <h3>Please Login</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3  " >
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />

                </Form.Group>
                <Form.Group className="mb-3  " >
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="URL" required />

                </Form.Group>
                <Form.Group className="mb-3  " >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Check type="checkbox" name='accept' label="Accept Terms and Condition" />

                </Form.Group>
                <Button  variant="primary" type="submit">
                    Register
                </Button> <br />

                <Form.Text>
                    Already Have an Account?
                    <Link className="text-danger" to="/login">Login</Link>
                </Form.Text>


                <Form.Text className="text-danger">

                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
            </Form>

        </Container>


    );
};

export default Register;