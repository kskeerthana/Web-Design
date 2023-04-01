import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';
import AboutUs from '../pages/AboutUs';

const LandingPage = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Nav className="me-auto">
                    <LinkContainer to="/landing">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/about-us" >
                        <Nav.Link>About us</Nav.Link>
                    </LinkContainer>    

                    <LinkContainer to="/careers">
                        <Nav.Link>Jobs</Nav.Link>
                    </LinkContainer>
                    
                    <LinkContainer to="/contacts">
                        <Nav.Link>Contacts</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/">
                        <Nav.Link>Logout</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
             <div className="container">
                <h3>Hi there!</h3>
            </div>  
  
        </>
    );
  };

  export default LandingPage;