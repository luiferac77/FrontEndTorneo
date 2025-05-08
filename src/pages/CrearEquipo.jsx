import React from 'react'
import Header from '../components/Header'
import Breadcrumb from '../components/Beadcumb'
import FormCrearEquipo from '../components/FormCrearEquipo'

const CrearEquipo = () => {
    return (
        <>
            <Header />
            <Breadcrumb current="Crear equipo" />
            <FormCrearEquipo />
        </>
    )
}

export default CrearEquipo