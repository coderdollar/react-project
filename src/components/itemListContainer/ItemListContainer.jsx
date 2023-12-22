import React from 'react'
import ItemList from '../itemList/ItemList'
import './itemListContainer.css'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const {categoriaId} = useParams ()

  const plates = [
    {id: "A", nombre: "Nachos", descripcion: "Deliciosos nachos" , precio: 20, categoria: "entradas"},
    {id: "B", nombre: "Boneless Wings", descripcion: "Deliciosas alitas buffalo" , precio: 50, categoria: "entradas"},
    {id: "C", nombre: "Dedos de Queso", descripcion: "Delicisos dedos de queso" , precio: 80, categoria: "entradas"},
    {id: "D", nombre: "Chicken Tenders", descripcion: "Delicisoos tiras de pollo empanizadas" , precio: 80, categoria: "entradas"},
    {id: "E", nombre: "Double Cheeseburger", descripcion: "Hamburguesa doble con queso", precio: 35, categoria: "hamburguesas"},
    {id: "F", nombre: "Bacon Burger", descripcion: "Hamburguesa con queso y tocino" , precio: 20, categoria: "hamburguesas"},
    {id: "G", nombre: "Slam Burger", descripcion: "Hamburguesa con un huevo", precio: 10, categoria: "hamburguesas"},
    {id: "H", nombre: "Meaty Melt", descripcion: "Suave carne de res con cebolla caramelizada", precio: 10,categoria: "hamburguesas"},
    {id: "I", nombre: "Costillas", descripcion: "Deliciosa costilla" , precio: 20, categoria: "feasts"},
    {id: "J", nombre: "Pork Platter", descripcion: "Carne de cerdo con papas", precio: 10, categoria: "feasts"},
    {id: "K", nombre: "Brisket Platter", descripcion: "Delicioso Brisket", precio: 10, categoria: "feasts"},
    {id: "L", nombre: "All American Feast", descripcion: "Pollo, costillas, brisket y papas fritas", precio: 35, categoria: "feasts"},
    {id: "M", nombre: "Coca Cola", descripcion: "Cocacola de 600ml", precio: 35, categoria: "bebidas"},
    {id: "N", nombre: "Cerveza", descripcion: "Refrescante cervez Lager" , precio: 20, categoria: "bebidas"},
    {id: "O", nombre: "Limonada", descripcion: "Refrescante limonada", precio: 10, categoria: "bebidas"},
    {id: "P", nombre: "Malteada", descripcion: "Malteada de chocolate", precio: 10, categoria: "bebidas"},

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

  const platesFiltrados = plates.filter((plate) => plate.categoria == categoriaId)

  return (
    <div>
      {
      categoriaId ? <ItemList plates = {platesFiltrados} /> : <ItemList plates = {plates} />
      }
    </div>
  )
}

export default ItemListContainer