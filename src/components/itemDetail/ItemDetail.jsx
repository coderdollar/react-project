import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from '../itemCount/ItemCount';

const ItemDetail = ({plate}) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{plate.nombre}</Card.Title>
        <Card.Text>{plate.descripcion}</Card.Text>
        <Card.Text>${plate.precio}usd</Card.Text>
        <ItemCount />
      </Card.Body>
    </Card> 
  )
}

export default ItemDetail