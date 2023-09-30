import React, { useState } from 'react'
import { Row,Col, Container} from 'react-bootstrap';
import Foodcard from './Foodcard';
const Menu = () => {
    const [menu]=useState([1]);
  return (

    <section  id="menu" className='bg-light'>
        <Container>
            <div className="text-center">
            <h3 className="text-primary my-3 py-3">Treat yourself with our Everyday Menu <i class="bi bi-balloon-heart-fill text-danger display-6"></i></h3>
            </div>
            
            <Col>
                {
                    menu.map((item)=>{
                        return  <Row md={6} lg={4}>
                        <Foodcard/>
                        </Row>
                    })
                }
               
            </Col>
            
            
        </Container>
    </section>
  )
}

export default Menu