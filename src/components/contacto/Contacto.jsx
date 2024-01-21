import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import './contacto.css'

const Contacto = () => {

    const {register, handleSubmit} = useForm();

    const submit = (datos) => {
        console.log(datos)
    }

  return (
    <div className="formulario-contacto">
        <Form onSubmit={handleSubmit(submit)}>
            <Form.Group className="mb-3 size" controlId="formBasicEmail">
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
            
            <Button variant="primary" type="submit">
                Comprar
            </Button>
        </Form>
    </div>
  )
}

export default Contacto