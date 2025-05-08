import React from 'react';
import Header from '../components/Header';
import Breadcrumb from '../components/Beadcumb';
import FormUsuariosDeLiga from '../components/FormUsuariosDeLiga';

const UsuariosDeLiga = () => {
    return (
        <>
            <Header />
            <Breadcrumb current="Usuarios de liga" />
            <FormUsuariosDeLiga />
        </>
    )
}

export default UsuariosDeLiga