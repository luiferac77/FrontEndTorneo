import React from 'react';
import Header from '../components/Header';
import Breadcrumb from '../components/Beadcumb';
import FormPersona from '../components/FormPersona';

const CrearPersona = () => {
    return (
        <>
            <Header />
            <Breadcrumb current="Persona" />
            <FormPersona />
        </>
    )
}

export default CrearPersona;