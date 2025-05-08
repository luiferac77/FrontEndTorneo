import React from 'react';
import Header from '../components/Header';
import Breadcrumb from '../components/Beadcumb';
import FormUsuarioLiga from '../components/FormUsuarioLiga';

const CrearUsuarioLiga = () => {
    return (
        <>
            <Header />
            <Breadcrumb current="Asignar rol a usuario" />
            <FormUsuarioLiga />
        </>
    )
}

export default CrearUsuarioLiga;