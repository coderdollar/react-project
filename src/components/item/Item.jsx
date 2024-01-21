import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './item.css'

const Item = ({nombre, id, imagen}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title className="title-plate">{nombre}</Card.Title>
        <Link to= {`/plates/${id}`}>
          <Button variant="dark">Ver más...</Button>
        </Link>
      </Card.Body>
    </Card> 
  )
}

export default Item