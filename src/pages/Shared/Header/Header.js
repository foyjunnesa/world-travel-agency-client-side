import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" sticky="top">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Nav.Link as={Link} to="/" style={{ textDecoration: "none", fontSize: "20px", marginRight: "10px", padding: "6px", color: "white" }} >
                        <img style={{ height: "40px" }} src="https://image.freepik.com/free-vector/airplane-flying-around-globe_1284-42938.jpg" alt="" />
                        <span className="text-success" style={{ fontFamily: 'cursive', paddingLeft: '10px', fontSize: '25px' }} >W-Travel</span>
                    </Nav.Link>
                    {/* NavLink for Route */}
                    <Nav className="me-auto" id="responsive-navbar-nav" className="me-auto nav-iteam justify-content-end">

                        <Nav.Link as={Link} to="/home" style={{ textDecoration: "none", fontSize: "20px", marginRight: "10px", padding: "6px", color: "white" }}>Home</Nav.Link>

                        <Nav.Link as={Link} to="/services" style={{ textDecoration: "none", fontSize: "20px", marginRight: "10px", padding: "6px", color: "white" }}>Services</Nav.Link>

                        <Nav.Link as={Link} to="/about" style={{ textDecoration: "none", fontSize: "20px", marginRight: "10px", padding: "6px", color: "white" }}>About</Nav.Link>

                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login" style={{ textDecoration: "none", fontSize: "20px", marginRight: "10px", padding: "6px", color: "white" }}>Login</Nav.Link>}

                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;