import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { endpoints } from '../data/api';
import axios from 'axios';

const FormCrearClub = () => {
    const { ligaId } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(endpoints.crearClub(), {
                ...data,
                liga_id: ligaId
            });
            alert('Club creado correctamente');
            reset();
        } catch (error) {
            console.error('Error al crear club:', error);
            alert('Hubo un error al crear el club');
        }
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Crear Club</h1>
            <section className='section-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <div className='form-input'>
                        <input className="input-box" placeholder='nombre' {...register('nombre', { required: true })} />
                    </div>
                    {errors.nombre && <span className="text-red-500">Nombre requerido</span>}
                </div>
                <div className="form-input">
                    <input className="input-box" placeholder='apodo' {...register('apodo')} />
                </div>
                <div className="form-input">
                    <input className="input-box" placeholder='logo' {...register('logo_url', { required: true })} />    
                </div>
                {errors.logo_url && <span className="text-red-500">Logo requerido</span>}
                <div className='mt-2 mb-4'>
                    <input 
                        type='submit' 
                        value='Crear club' 
                        className='btn btn-outline-primary w-full'
                    />
                </div>
            </form>
            </section>
            
        </div>
    );
};

export default FormCrearClub;
