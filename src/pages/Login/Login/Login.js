import React from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div id='login'>
            <Container>
                <div className="row">
                    <div className="col-md-7">

                        <div className="">
                            <p style={{ paddingTop: '30px' }} className="text-center text-muted mt-3 ">LETS MORE TOUR? <hr /></p>
                            <h3 className="text-center text-muted mb-5"> <span className="fw-bold text-danger" style={{ fontSize: "30px" }}>Please</span> Signin</h3>
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
                            <p className="mt-2">I have no Account? <Link to="/register"> Register</Link> </p>
                            <Button className="mt-3" variant="outline-primary">SIGNIN</Button>
                            <p className="text-center">----Or use this options----</p>
                            <div className="d-flex justify-content-center mb-5 ">
                                <Button onClick={signInUsingGoogle} style={{ marginLeft: '50px' }} className="mt-3 mb-3 me-5 fw-bold" variant="outline-primary"><i className="fab fa-google"></i> Signin With Google</Button>

                            </div>

                        </div>

                    </div>
                    <div className="col-md-5">
                        <img style={{ width: '80%', marginTop: '50px' }} src='https://www.avandiumtrading.com/content/files/images/flexi-tiles/img_login_rev2.png' alt="" />
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Login;