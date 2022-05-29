import React from 'react';
import "./Header.scss"
import {Navbar, Nav, Container, Dropdown} from 'react-bootstrap';

const Header:React.FC = () => {

    let styleTextInButton = {
        color: "#52C2A6"
    }

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
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic-end">
                                UK
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item style={styleTextInButton} href="#/action-2">EN</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link className="nav-link nav-sign-in" href="#home">Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;