import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BrandLogo from '../assets/Logo.png'


function NavBar() {
return (
    <Navbar expand="lg" className="bg-yellow-500">
    <Container>
        <Navbar.Brand href="/">
            <img src={BrandLogo} className='w-50 '/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/" className="hover:text-4xl">Home</Nav.Link>
            <Nav.Link href='/Packages' className="hover:text-4xl">Packages</Nav.Link>
            <Nav.Link href='Destination' className="hover:text-4xl">Destination</Nav.Link>
            <Nav.Link href='/Aboutus' className="hover:text-4xl">About us</Nav.Link>
        </Nav>
            <Form className="d-flex">
            <Button variant="outline-dark">Book Now </Button>
        </Form>
        </Navbar.Collapse>
    </Container>
    </Navbar>
)
}

export default NavBar