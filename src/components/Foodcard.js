import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
const Foodcard = () => {

   const [modalShow, setModalShow] = React.useState(false);
   function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
  return (
    <>
      <Card className='m-3'style={{width:'25rem'}}>
  <Card.Img variant="top" src={require("../images/img1.jpg")} />
  <Card.Body>
    <Card.Title>Chappathi</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <div className="text-center">
    <Button variant="primary"onClick={() => setModalShow(true)}>Add to Basket</Button>
    </div>
  </Card.Body>
</Card>
<Card className='m-3'style={{width:'25rem'}}>
  <Card.Img variant="top" src={require("../images/img5.jpg")} />
  <Card.Body>
    <Card.Title>Dosa</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <div className="text-center">
    <Button variant="primary"onClick={() => setModalShow(true)}>Add to Basket</Button>
    </div>
  </Card.Body>
</Card>
    <Card className='m-3'style={{width:'25rem'}}>
  <Card.Img variant="top" src={require("../images/img3.jpg")} />
  <Card.Body>
    <Card.Title>Burger</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <div className="text-center">
    <Button variant="primary"onClick={() => setModalShow(true)}>Add to Basket</Button>
    </div>
  </Card.Body>
</Card>
<Card className='m-3'style={{width:'25rem'}}>
  <Card.Img variant="top" src={require("../images/nonveg.jpg")} />
  <Card.Body>
    <Card.Title>Briyani</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <div className="text-center">
    <Button variant="primary"onClick={() => setModalShow(true)}>Add to Basket</Button>
    </div>
  </Card.Body>
</Card>
<Card className='m-3 'style={{width:'25rem'}}>
  <Card.Img variant="top" src={require("../images/img2.jpg")} />
  <Card.Body>
    <Card.Title>Prawn</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <div className="text-center">
    <Button variant="primary"onClick={() => setModalShow(true)}>Add to Basket</Button>
    </div>
  </Card.Body>
</Card>
<Card className='m-3 ' style={{width:'25rem'}}>
  <Card.Img variant="top" src={require("../images/img4.jpg")} />
  <Card.Body>
    <Card.Title>Junk foods</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <div className="text-center">
    <Button variant="primary"onClick={() => setModalShow(true)}>Add to Basket</Button>
    </div>
  </Card.Body>
</Card>
<MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /></>
  
  )
}

export default Foodcard