import React from 'react'
import { Container,Row,Col,Form} from 'react-bootstrap'
import { InputGroup,FloatingLabel } from 'react-bootstrap'
const Contact = () => {
  return (
    <section id="contact"className='bg-dark py-3'>
        <div className="text-center my-2 py-3">
            <h2 className=' text-primary '>Contact!!  <i className="bi bi-chat-left-heart text-danger"></i> </h2>
        </div>
        <Container>
            <Row className='justify-content-center'>
                <Col md={6}>
                    <Form>
                    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="bi bi-envelope-heart text-danger"></i></InputGroup.Text>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address">
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="bi bi-person-heart text-danger"></i></InputGroup.Text>
        <FloatingLabel
        controlId="floatingPassword"
        label="Name">
        <Form.Control type="Name" placeholder="Name" />
      </FloatingLabel>
      </InputGroup>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
                    </Form>
                </Col>
            </Row>
        </Container>
        <div className="text-center my-3 text-primary small "><br></br>Copyright 2023-2023</div>
    </section>
  )
}

export default Contact