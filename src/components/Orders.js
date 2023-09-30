import React from 'react'
import { ListGroup,Badge } from 'react-bootstrap'
const Orders = () => {
  return (
    <ListGroup as="ol" numbered>
        <ListGroup.Item as="li"
      className="d-flex justify-content-between align-items-start bg-dark text-light">
      <div className="ms-2 me-auto">
        <div className="fw-bold">Dosa</div>
        Cras justo odio
      </div>
      <Badge bg="primary" pill>
        3
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start text-light bg-dark">
      <div className="ms-2 me-auto">
        <div className="fw-bold">Briyani</div>
        Cras justo odio
      </div>
      <Badge bg="primary" pill>
        2
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start bg-dark text-light">
      <div className="ms-2 me-auto">
        <div className="fw-bold">Burger</div>
        Cras justo odio
      </div>
      <Badge bg="primary" pill>
        5
      </Badge>
    </ListGroup.Item>

    
  </ListGroup>
  )
}

export default Orders