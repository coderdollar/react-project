import React, { useEffect, useState } from 'react';
import ItemDetail from '../itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../main';

const ItemDetailContainer = () => {

  const [plate, setPlate] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc (db, "menu", id);
    getDoc(docRef)
      .then((resp) => {
        setPlate(
          { ...resp.data(), id: resp.id}
        );
      })
  }, [id])

  return (
    <div>
      {plate && <ItemDetail plate={plate} />}
    </div>
  )
}

export default ItemDetailContainer