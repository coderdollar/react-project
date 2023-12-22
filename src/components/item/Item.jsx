import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ({nombre, id}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Link to= {`/producto/${id}`}>
          <Button variant="dark">Ver más...</Button>
        </Link>
      </Card.Body>
    </Card> 
  )
}

export default Item