import Card from 'react-bootstrap/Card';
import ItemCount from '../itemCount/ItemCount';
import './itemdetail.css'
import { useContext ,useState } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({plate}) => {

  const {count, agregar } = useContext (CartContext)
  console.log(count);

  const [cantidad, setContador] = useState(0); 

  const sumar = () => {
    if (cantidad <= 9 ) {
        setContador(cantidad + 1)
    }    
  }

  const restar = () => {
    if (cantidad > 0 ) {
        setContador(cantidad - 1)
    }    
  }

  return (
    <Card className='card-detail' style={{ width: '18rem' }}>
      <Card.Img variant="top" src ={plate.imagen}/>
      <Card.Body>
        <Card.Title className='titulo-card'>{plate.nombre}</Card.Title>
        <Card.Text>{plate.descripcion}</Card.Text>
        <Card.Text className='precio-card'>${plate.precio} usd</Card.Text>
        <ItemCount 
        cantidad={cantidad} 
        sumar={sumar} 
        restar={restar} 
        agregar={() => {agregar(plate, cantidad)}}/>
      </Card.Body>
    </Card>
  )
}

export default ItemDetail