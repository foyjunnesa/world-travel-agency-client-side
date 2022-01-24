import React from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-md-7">

                        <div>
                            <p className="text-center text-muted mt-3">Make Your Happiness With Us</p>
                            <h3 className="text-center text-muted mt-2"> <span className="fw-bold text-primary" style={{ fontSize: "30px" }}>SignUp</span> & Lets Go</h3>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Enter Name"
                                className="mb-3 mt-5"
                            >
                                <Form.Control type="text" placeholder="Enter Name" required />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <p className="text-danger"></p>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>
                            <p className="mt-2">Already have an Account? <Link to="/login">Login</Link> </p>
                            <Button className="mt-3" variant="outline-primary">SIGNUP</Button>
                            <p className="text-center">----Or use this options----</p>
                            <div className="d-flex justify-content-center ">
                                <Button style={{ marginLeft: '50px' }} className="mt-3 mb-3 me-5" variant="primary"><i className="fab fa-google"></i> SinginUp With Google</Button>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-5 mt-5">
                        <img style={{ width: '100%', marginTop: '50px' }} src='https://img.freepik.com/free-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg?size=626&ext=jpg' alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Register;