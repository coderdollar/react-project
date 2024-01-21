import React from 'react'
import './footer.css'
import logowhite from "../assets/logo-white.png";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='structure'>
            <div className='footer-left'>
                <p>AVISO DE PRIVACIDAD</p>
                <p>TÉRMINOS DE USO</p>
                <p>CONTACTÁNOS</p>
                <p>MAPA DEL SITIO</p>
            </div>

            <div className='footer-right'>
                <p className='disfruta'>Disfruta el diálogo</p>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
            </div>
        </div>

        <div>
            <img src={logowhite} alt="logo-footer" />
        </div>
        
        <hr />

        <div className='copyright'>
         © 2024 Old Petes Restaurants LLC. The Old Petes logo is a registered trademark and copyrighted work of Old Petes Restaurants LLC.
        </div>
    </div>
  )
}

export default Footer