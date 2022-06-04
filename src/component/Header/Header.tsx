import React from 'react';
import "./Header.scss"
import {Navbar, Nav, Container, Dropdown} from 'react-bootstrap';
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {StoreTypes} from "../../store/reducers/reducers";

const Header: React.FC = () => {
    const {token, logout} = useSelector((state: StoreTypes) => state.auth.auth)
    const navigate = useNavigate()
    const isLogin = !!token

    const logOut = (): void => {
        logout()
        navigate("/")
    }

    let styleTextInButton = {
        color: "#52C2A6"
    }

    return (
        <Navbar className="navigation" bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/"><img className="logo" src="./images/logo.png" alt="logo"/></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-menu">
                        {!isLogin ? "" : <Link className="nav-link nav-main" to="/">Home</Link>}
                    </Nav>
                    <Nav className="nav-sign">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic-end">
                                EN
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item style={styleTextInButton} href="#/action-2">UK</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {isLogin ?
                            <a href="#" className="nav-link nav-sign-in" onClick={logOut}>Sign Out</a> :
                            <Link className="nav-link nav-sign-in" to="/login">Sign In</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;