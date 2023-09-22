import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom'
import Login from './buttons/Login';
import Signup from './buttons/Signup';
import Cartbtn from './buttons/Cartbtn';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" >
                <Container>
                    <NavLink to='/' style={{ textDecoration: 'none', color: 'white', paddingRight: '20px',fontSize:'25px',marginRight:'50px' }}>S-Kart</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" style={{ textDecoration: 'none', color: 'white', paddingRight: '20px' }}>Home</NavLink>
                            <NavLink to="/product" style={{ textDecoration: 'none', color: 'white', paddingRight: '20px' }}>Product</NavLink>
                            <NavLink to="/about" style={{ textDecoration: 'none', color: 'white', paddingRight: '20px' }}>About</NavLink>
                            <NavLink to="/contact" style={{ textDecoration: 'none', color: 'white', paddingRight: '20px' }}>Conatct</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                    {/* <NavLink to="/" style={{textAlign:'center',color:'white',fontSize:'30px'}}>React-Bootstrap</NavLink> */}
                    <Login />
                    <Signup />
                    <Cartbtn />
                </Container>

            </Navbar>
        </>
    )
}

export default Header