import Button from 'react-bootstrap/Button';

const ItemCount = ( {cantidad, sumar, restar, agregar} ) => {

  return (
    <div>
        <Button variant="dark" onClick={restar}>-</Button>
        <Button variant="light" onClick={agregar}>Agregar {cantidad}</Button>
        <Button variant="dark" onClick={sumar}>+</Button>
    </div> 
  )
}

export default ItemCount