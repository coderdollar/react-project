import React from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const {id} = useParams()

  const plates = [
    {id: "A", nombre: "Nachos", descripcion: "Deliciosos nachos" , precio: 20, categoria: "Entradas"},
    {id: "B", nombre: "Boneless Wings", descripcion: "Deliciosas alitas buffalo" , precio: 50, categoria: "Entradas"},
    {id: "C", nombre: "Dedos de Queso", descripcion: "Delicisos dedos de queso" , precio: 80, categoria: "Entradas"},
    {id: "D", nombre: "Chicken Tenders", descripcion: "Delicisoos tiras de pollo empanizadas" , precio: 80, ategoria: "Entradas"},
    {id: "E", nombre: "Double Cheeseburger", descripcion: "Hamburguesa doble con queso", precio: 35, categoria: "Hamburguesas"},
    {id: "F", nombre: "Bacon Burger", descripcion: "Hamburguesa con queso y tocino" , precio: 20, categoria: "Hamburguesas"},
    {id: "G", nombre: "Slam Burger", descripcion: "Hamburguesa con un huevo", precio: 10, categoria: "Hamburguesas"},
    {id: "H", nombre: "Meaty Melt", descripcion: "Suave carne de res con cebolla caramelizada", precio: 10, categoria: "Hamburguesas"},
    {id: "I", nombre: "Costillas", descripcion: "Deliciosa costilla" , precio: 20, categoria: "Feasts"},
    {id: "J", nombre: "Pork Platter", descripcion: "Carne de cerdo con papas", precio: 10, categoria: "Feasts"},
    {id: "K", nombre: "Brisket Platter", descripcion: "Delicioso Brisket", precio: 10, categoria: "Feasts"},
    {id: "L", nombre: "All American Feast", descripcion: "Pollo, costillas, brisket y papas fritas", precio: 35, categoria: "Feasts"},
    {id: "M", nombre: "Coca Cola", descripcion: "Cocacola de 600ml", precio: 35, categoria: "Bebidas"},
    {id: "N", nombre: "Cerveza", descripcion: "Refrescante cervez Lager" , precio: 20, categoria: "Bebidas"},
    {id: "O", nombre: "Limonada", descripcion: "Refrescante limonada", precio: 10, categoria: "Bebidas"},
    {id: "P", nombre: "Malteada", descripcion: "Malteada de chocolate", precio: 10, categoria: "Bebidas"},
  ]

  const mostrarProductos = new Promise((resolve, reject) => {
    if (plates.length > 0) {
      setTimeout(() => {
        resolve (plates)
      }, 2000)
  } else {
      reject ("Producto no encontrado")
  } 
})

mostrarProductos
  .then ((resultado) => {
    console.log(resultado);
  })
  .catch ((error) => {
    console.log(error);
  })

  const plateFiltrado = plates.find((plate => plate.id == id))

  return (
    <div>
      <ItemDetail 
      plate = {plateFiltrado}
      />
    </div>
  )
}

export default ItemDetailContainer