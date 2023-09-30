import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Cart';

const Appbar = () => {
  return (
    <>
             <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home"><h2 className='text-primary text-decoration-underline '><span><i className="bi bi-hearts text-danger display-5"></i>Mr.Partner</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className='bg-light'/>
        <Navbar.Collapse id="basic-navbar-nav"className='justify-content-end '>
          <Nav>
            <Nav.Link href="#home" className='fw-bold text-light'>Home</Nav.Link>
            <Nav.Link href="#menu"className='fw-bold text-light'>Menu</Nav.Link>
            <Nav.Link href="#try"className='fw-bold text-light'>Must Try</Nav.Link>
            <Nav.Link href="#contact"className='fw-bold text-light'>Contact Us</Nav.Link>
            <Cart/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></>
  )
}

export default Appbar