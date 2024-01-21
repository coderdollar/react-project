import React from 'react';
import Item from '../item/Item';
import './itemList.css'


const ItemList = ( {plates} ) => {
  return (
    <div className="tarjetitas">
        {
            plates.map((p) => {
                return(
                    <div>
                        <Item
                        key={p.id}
                        imagen = {p.imagen}
                        nombre = {p.nombre}
                        descripcion={p.descripcion}
                        id={p.id}
                        />
                    </div>     
                )
            })
        }

    </div>
  )
}

export default ItemList
