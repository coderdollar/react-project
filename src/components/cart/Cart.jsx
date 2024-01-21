import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './cart.css'


const Cart = () => {

    const {count, precioTotalOrden, vaciar} = useContext(CartContext);

  return (
    <div className='container-checkout'>
        <h1 className='title-order'>Detalle de la orden</h1>
        <div className='container-cards'>
            {
                count.map((prod) => (
                    <div key={prod.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className='card-title'>{prod.nombre}</Card.Title>
                                <Card.Text>Unidades: {prod.cantidad}</Card.Text>
                                <Card.Text>Precio unitario: ${prod.precio}</Card.Text>
                                <Card.Text>Subtotal: ${prod.precio * prod.cantidad}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            }
        </div>

        {
            count.length > 0 ? 
            <div className='total'>
                <h2 className='card-title'>Total a pagar: ${precioTotalOrden()} usd</h2>

                <div className='botones'>
                    <Button variant="dark" onClick={vaciar}><i class="bi bi-trash3" ></i> Vaciar carrito</Button>

                    <Link to="/checkout">
                        <Button variant="danger">Finalizar compra</Button>
                    </Link>
                </div>
            </div> :
            <div className='containerNoAgregado'>
                <h2 className='noAgregado'>Aún no haz agredado ningún platillo a tu orden</h2>
                <i class="bi bi-emoji-frown-fill"></i>
                <p>Nuestra carita está triste...ayudála a sonreir agregando un producto al carrito</p>
            </div>
        }
        
    </div>  
  )
}

export default Cart