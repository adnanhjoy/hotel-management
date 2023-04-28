import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Login = () => {
const {signIn, googleSignIn} = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation()
const from = location.state?.from?.pathname || "/";

const handleSubmitLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    signIn(email, password)
    .then(result => {
        result.user;
        form.reset();
        navigate(from, { replace: true })
    })
    .catch(error => console.error(error))
}

const handleSubmitGoogle = () => {
    googleSignIn()
    .then(result => {
        result.user;
        navigate(from, { replace: true })
    })
    .catch(error => console.error(error))
}

    return (
        <div className='w-50 m-auto py-5'>
            <h2 className='my-5 text-center'>Login</h2>
            <Form onSubmit={handleSubmitLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>You don't have an account ? <Link to='/signup'>Signup</Link></p>
                <button onClick={handleSubmitGoogle} className='btn btn-primary'>Sign in with Google</button>
            </Form>
        </div>
    );
};

export default Login;