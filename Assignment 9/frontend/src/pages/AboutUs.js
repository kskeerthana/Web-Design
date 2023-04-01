import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import Cards from '../components/AboutUsCards';


const AboutUs = () => {
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
                {   
                    Cards.map((c) =>{
                        return(
                            <Card style={{ margin:'10px' ,width: '20rem' }}>
                                <Card.Body>
                                    <Card.Title>{c.cardTitle}</Card.Title>
                                    <Card.Text>{c.cardText}
                                    </Card.Text>
                                    <Button variant="primary">{c.buttonText}</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>  
  
        </>
    );
  };

  export default AboutUs;