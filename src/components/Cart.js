import React from 'react'
import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Orders from './Orders.js'
const Cart = () => {
  const [show, setShow] = useState(false);
  return (
    <>
    <Button variant="dark" onClick={()=>setShow(!show)} className="me-2 position-relative">
    <i className="bi bi-cart3"></i>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">10
    <span className="visually-hidden text-light">Cart</span></span>
    </Button>
    <Offcanvas show={show} onHide={()=>setShow(!show) }placement={'end'} className='bg-dark text-light'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className='text-primary'>Cart:</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Orders/>
        <div className="text-end mt-3">
          <Button variant='primary'>Check Out</Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  </>
  )
}

export default Cart