import {useState} from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = () => {

  const [contador, setContador] = useState(0) 

  const productoAgregado = () => {
    alert (`Se agregó ${contador} a su orden`)
  }

  const sumar = () => {
    if (contador <= 9 ) {
        setContador(contador + 1)
    }    
  }

  const restar = () => {
    if (contador > 0 ) {
        setContador(contador - 1)
    }    
  }

  return (
    <div>
        <Button variant="dark" onClick={restar}>-</Button>
        <Button variant="light" onClick={productoAgregado}>Ordenar {contador}</Button>
        <Button variant="dark" onClick={sumar}>+</Button>
    </div> 
  )
}

export default ItemCount