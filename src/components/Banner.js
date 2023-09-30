import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
  return (
    <Container fluid className='bg-dark'>
        <Row className='justify-content-center align-text-center'>
            <Col lg={8}>
            <Carousel>
      <Carousel.Item>
        <img src={require("../images/img5.jpg")} alt="First" className='d-block w-100 ' />
          <Carousel.Caption>
          <h3>Veg Foods</h3>
          <p className='d-none d-sm-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
            <img src={require("../images/nonveg.jpg")} alt="Second"  className='d-block w-100 ' />
            <Carousel.Caption>
          <h3>Non-Veg Foods</h3>
          <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={require("../images/img3.jpg")} alt="Third" className='d-block w-100'/>
        <Carousel.Caption>
          <h3>Junk Foods</h3>
          <p className='d-none d-sm-block'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>         
            </Col>           
        </Row>
        <div className="text-center text-light">
        <h2 className="display-5 mt-3">Order Different Food to Celebrate Every Occasion!</h2>
        <p className="lead ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere soluta ducimus modi necessitatibus est impedit enim qui quae atque vel.</p>
        </div>
        
    </Container>
  )
}

export default Banner