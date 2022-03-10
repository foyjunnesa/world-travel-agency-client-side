import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Nav.Link as={Link} to="/" style={{ textDecoration: "none", fontSize: "20px", marginRight: "10px", padding: "6px", color: "white" }} >
                        <img style={{ height: "30px" }} src="https://t3.ftcdn.net/jpg/03/15/46/02/240_F_315460238_r9VGtbJzt7emruDKEY2ouioFPdcbMKs4.jpg" alt="" />
                        <span className="text-success" style={{ fontFamily: 'cursive', paddingLeft: '10px', fontSize: '25px' }} >W-Travel</span>
                    </Nav.Link>
                    {/* NavLink for Route */}
                    <Nav className="me-auto nav-iteam justify-content-end" id="responsive-navbar-nav">

                        <Nav.Link as={Link} to="/home" style={{ textDecoration: "none", fontSize: "20px", marginRight: "10px", padding: "6px", color: "white" }}>Home</Nav.Link>

                        <Nav.Link as={Link} to="/services" style={{ textDecoration: "none", fontSize: "20px", marginRight: "10px", padding: "6px", color: "white" }}>Services</Nav.Link>

                        <Nav.Link as={Link} to="/about" style={{ textDecoration: "none", fontSize: "20px", marginRight: "10px", padding: "6px", color: "white" }}>About</Nav.Link>

                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login" style={{ textDecoration: "none", fontSize: "20px", marginRight: "10px", padding: "6px", color: "white" }}>Login</Nav.Link>}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;