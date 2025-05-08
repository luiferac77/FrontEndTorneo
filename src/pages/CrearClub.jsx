import React from 'react';
import Header from '../components/Header';
import Breadcrumb from '../components/Beadcumb';
import FormCrearClub from '../components/FormCrearClub';

const CrearClub = () => {
  return (
    <>
        <Header />
        <Breadcrumb current="Crear club" />
        <FormCrearClub />
    </>
  )
}

export default CrearClub