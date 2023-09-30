import React, { useState } from 'react'
import { Row,Col, Container,Image,Button} from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
const Pickitem = () => {
    const [show, setShow] = useState(false);
  return (
    <section id="try"className='my-3 '>
        <div className="text-center my-2 py-3">
            <h2 className='display-5 text-primary '><i className="bi bi-search-heart text-danger"></i> Pick of the Week!!</h2>
        </div>
        <Container>
            <Row className='align-items-center'>
                <Col md={7} >
                    <Image src={require('../images/img2.jpg')} fluid={true} alt='Todays Special'rounded></Image>
                </Col>
                <Col md={5}>
                    <div className='py-3'>
                        <h2 className="h1"> Must try Foods!!</h2>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim totam quod, cupiditate dolorum eveniet quo id incidunt labore fugit!</p>
                        <Button onClick={()=>setShow(true)}><i class="bi bi-basket"></i> Buy Now</Button>
                    </div>
                </Col>
            </Row> 
            <ToastContainer
          className="position-fixed bottom-0 end-0 p-3"
          position={"bottom-end"}
          style={{ zIndex: 1 }}
        >
          <Toast onClose={()=>setShow(false)} show={show} delay={2000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body className='text-dark'>Item is added to the Basket!!</Toast.Body>
          </Toast>
        </ToastContainer>
        </Container>
    </section>
  )
}

export default Pickitem