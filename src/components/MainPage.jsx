import React from 'react';
import fondo from '../assets/img/la-bombonera-boca.jpg';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <main className='main-page'>
        <div 
            className='absolute inset-0 bg-cover bg-center'
            style={{backgroundImage: `url(${fondo})`}}>
            {/* Main con imágen de fondo */}
        </div>
        <div className='absolute inset-0 bg-black/90'>{/* Div con filtro de degradado */}</div>
        <section className='section-main-page'>
            <div className='section-title-main-page'><h2>Llevate la mejor experiencia con nuestra App de Gestión de Torneoss</h2></div>
            <div className='btnMainIngresar'>
            <Link
                id='btnIngresar'
                to='/login'
                
            ><div className='btn btn-outline-primary mt-2'>Ingresar </div></Link>
            </div>
            
        </section>
    </main>
  )
}

export default MainPage