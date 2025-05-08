import React from 'react';
import Header from '../components/Header';
import Breadcrumb from '../components/Beadcumb';
import FormLigas from '../components/FormLigas';

const CrearLiga = () => {
    return (
        <>
            <Header />
            <Breadcrumb current="Ligas" />
            <FormLigas />
        </>
    )
}

export default CrearLiga;