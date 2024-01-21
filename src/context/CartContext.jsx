import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [count, setCount] = useState([]);
    const agregar = (plate, cantidad) => {
    const plateAgregado = {...plate, cantidad};

    const nuevoCarrito = [...count];
    const plateEnCarrito = nuevoCarrito.find((producto) => producto.id === plateAgregado.id)

      if (plateEnCarrito) {
        plateEnCarrito.cantidad += cantidad;
      } else {
        nuevoCarrito.push(plateAgregado);
      }
      setCount(nuevoCarrito);
  }

  const cantidadEnCarrito = () => {
    return count.reduce((acc, prod) => acc + prod.cantidad, 0)
  }

  const precioTotalOrden = () =>{
    return count.reduce ((acc, prod) => acc + prod.precio * prod.cantidad, 0)
  }

  const vaciar = () => {
    setCount([]);
  }

  return (
    <CartContext.Provider value={ {count, agregar, cantidadEnCarrito, precioTotalOrden, vaciar} }>
        {children}
    </CartContext.Provider>)
}