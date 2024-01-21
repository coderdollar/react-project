import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import banner from "../assets/banner.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import './carrousel.css'
import ItemListContainer from '../itemListContainer/ItemListContainer';

const Carrousel = () => {
  return (
    <div className='encabezado'>
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src={banner}></img>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img src={banner3}></img>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={banner2}></img>
                </Carousel.Item>
            </Carousel>
        </div>

        <div className='cajaTextos'>
            <h1 className='nuestrosPlatillos'>Nuestros Platillos</h1>
            <p className='subtitulo'>Elige lo que más se te antoje de nuestro delicioso menú</p>
        </div>
        
        <ItemListContainer />
        
    </div>
  )
}

export default Carrousel