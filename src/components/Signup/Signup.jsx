import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Signup = () => {
    const {creatUser} = useContext(AuthContext);

    const handleSubmitSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        creatUser(email, password)
        .then(result => {
            result.user;
            form.reset();
        })
        .catch(error => console.error(error))
    }

    return (
        <div className='w-50 m-auto py-5'>
            <h2 className='my-5 text-center'>Signup</h2>
            <Form onSubmit={handleSubmitSignup}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Signup
                </Button>
                <p>Already have an account ? <Link to='/login'>Login</Link></p>
            </Form>
        </div>
    );
};

export default Signup;