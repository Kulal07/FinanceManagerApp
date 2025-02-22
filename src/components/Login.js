// Login.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './Login.css'; // Importing CSS for styling

import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [values, setValues] = useState({ email: '', password: '' });
    const [error, setError] = useState(''); // New state for error messages

    const navigate = useNavigate();

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = values;

const sampleUser = { email: "testuser@example.com", password: "Testuser@12" }; // Sample user data

const user = sampleUser; // Use sample user for testing


        // Validate email and password
        if (!email || !password) {
            setError("Email and password are required!");
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(password)) {
            setError("Invalid password format!");
            return;
        }


if (user.email !== email || user.password !== password) {

            setError("Invalid email or password!");

            return;
        }

        toast.success("Login successful!");
        navigate('/dashboard');
    };

    return (
        <Container className="login-container"> {/* Added class for styling */}
            <h2 className="login-title">Login</h2> {/* Added class for styling */}

            <Form onSubmit={handleSubmit} className="text-center">

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" value={values.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" className="login-button">Login</Button> {/* Added class for styling */}

                <div>
                    <p>Don't have an account? <a href="/signup">Sign up here.</a></p>
                </div>

            </Form>
            {error && <div className="alert alert-danger fade-in">{error}</div>} {/* Added fade-in effect for error message */}

            <ToastContainer />

        </Container>
    );
};

export default Login;
