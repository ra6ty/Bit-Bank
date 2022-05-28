import React from 'react';
import "./Header.scss"
import {Navbar, Nav, Container} from 'react-bootstrap';

const Header: React.FC = () => {
    return (
        <Navbar className="navigation" bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img className="logo" src="./images/logo.png" alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-menu">
                        <Nav.Link className="nav-link nav-main" href="#home">Home</Nav.Link>
                        <Nav.Link className="nav-link nav-main" href="#home">Home</Nav.Link>
                        <Nav.Link className="nav-link nav-main" href="#home">Home</Nav.Link>
                        <Nav.Link className="nav-link nav-main" href="#home">Home</Nav.Link>
                    </Nav>
                    <Nav className="nav-sign">
                        <Nav.Link className="nav-link nav-sign-in" href="#home">Sign In</Nav.Link>
                        <Nav.Link className="nav-link nav-sign-up" href="#link">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;