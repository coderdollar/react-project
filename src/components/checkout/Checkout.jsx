import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../main';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Video from "../assets/video_checkout1.mp4"
import './checkout.css';

const Checkout = () => {

    const [orderId, setOrderId] = useState("")

    const {count, precioTotalOrden, vaciar} = useContext (CartContext);

    const {register, handleSubmit} = useForm();

    const submit = (datos) => {
        const orden = {
            cliente: datos,
            pedido: count,
            total: precioTotalOrden()
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, orden)
            .then((doc) => {
                setOrderId(doc.id);
                vaciar();
            })
    }

    if (orderId) {
        return (
            <div className='containerGracias'>
                <h1 className='titulo-orden'>¡Gracias por tu compra!...Disfruta tus platillos</h1>
                <p className='numOrden'>Tu número de orden es: {orderId}</p>
                <i class="bi bi-emoji-laughing-fill"></i>
            </div>
        )
    }

  return (
    <div>
        <h1 className='titulo-orden'>Tu orden casi esta lista...</h1>
        <p className='subtitulo'>Llena el formulario para completar tu compra</p>
        <div className='contenedor-checkout'>
            <Form onSubmit={handleSubmit(submit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" {...register("nombre")} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control type="email" placeholder="Correo electrónico" {...register("email")} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Teléfono:</Form.Label>
                    <Form.Control type="number" placeholder="Teléfono" {...register("telefono")} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Acepto términos y condiciones" />
                </Form.Group>
                
                <Button variant="danger" type="submit">
                    Comprar
                </Button>
            </Form>

            <video autoPlay loop muted className='video' src={Video}></video>
        </div>
    </div>
  )
}

export default Checkout