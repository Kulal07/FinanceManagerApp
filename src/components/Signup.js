// Signup.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './Signup.css'; // Importing CSS for styling

import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [values, setValues] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.{8,})/;
        return passwordRegex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = values;

        if (!validatePassword(password)) {
            toast.error("Invalid password format!");
            return;
        }

        // Save user data to local storage
        localStorage.setItem('user', JSON.stringify({ email, password }));
        toast.success("Account created successfully!");
        navigate('/login');
    };

    return (
        <Container className="signup-container"> {/* Added class for styling */}
            <h2 className="signup-title">Signup</h2> {/* Added class for styling */}

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" value={values.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" className="signup-button">Signup</Button> {/* Added class for styling */}

            </Form>
            <p>Already have an account? <a href="/login">Login here.</a></p>
            <ToastContainer />
        </Container>
    );
};

export default Signup;
