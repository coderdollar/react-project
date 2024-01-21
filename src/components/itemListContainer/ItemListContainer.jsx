import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import './itemListContainer.css';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../main';


const ItemListContainer = () => {

  const [plates, setPlates] = useState ([]);

  const [nombre, setNombre] = useState("menu");

  const categoria = useParams().categoria;

  useEffect(() => {

    const menuRef = collection( db, "menu" );
    
    const q = categoria ? query(menuRef, where("categoria", "==", categoria)) : menuRef;

    getDocs(q)
      .then((resp) => {

        setPlates(
          resp.docs.map ((doc) => {
            return {...doc.data(), id: doc.id}
          })
        )

      })

  }, [categoria])


  return (
    <div>
      <ItemList plates = {plates} nombre= {nombre} />
    </div>
  )
}

export default ItemListContainer