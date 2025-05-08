import React from 'react';
import Header from '../components/Header';
import Breadcrumb from '../components/Beadcumb';
import FormUsuario from '../components/FormUsuario';

const CrearUsuario = () => {
    return (
        <>
            <Header />
            <Breadcrumb current="Usuario" />
            <FormUsuario />
        </>
    )
}

export default CrearUsuario;