import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAuth from '../context/auth/UseAuth';
import axios from 'axios';
import { endpoints } from '../data/api';

const FormLigas = () => {

    const {register, formState: {errors}, handleSubmit} = useForm();
    const navigate = useNavigate();
    const {usuario, token} = useAuth();

    const onSubmit = async (data) => {
        try {
            
            const nuevaLiga = {
                nombre: data.nombre,
                direccion: data.direccion,
                codigo_postal: data.codigo_postal,
                usuario_id: usuario.id, //usuario logueado recuperado del contextos que trae info del localstorage
            };
    
            const response = await axios.post(
                endpoints.crearLiga(), nuevaLiga, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if(response) {
                console.log('liga creada', response.data);
                navigate('/dashboard/suscripto', {
                    state: { mensaje: 'Liga creada con éxito'}
                });
            }

        } catch (error) {
            console.error('Error al crear liga:', error.response?.data || error.message);    
        }
    }

    const onError = (errors) => {
        console.log('Errores en el formulario', errors)
    }
    return (
        <main className='relative container mt-10 mb-5 px-4 mx-auto w-full min-h-screen'>
                <section className='section-form'>
                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <div className='relative mx-auto mt-2 mb-4'>
                        <h1 className='text-center text-3xl text-gray-600'>Liga</h1>
                    </div>
                        <div className='form-input'>
                            <input
                                {...register('nombre')}
                                type='text' 
                                className='input-box' 
                                placeholder='nombre de la liga'/>
                        </div>
                        <div className='form-input'>
                            <input
                                {...register('direccion')}
                                type='text' 
                                className='input-box' 
                                placeholder='dirección'/>
                        </div>
                        <div className='form-input'>
                            <input
                                {...register('codigo_postal')}
                                type='text' 
                                className='input-box' 
                                placeholder='Código postal'/>
                        </div>
                        <div className='mt-2 mb-4'>
                            <input 
                                type='submit' 
                                value='Crear Liga' 
                                className='btn btn-outline-primary w-full'
                            />
                        </div>
                    </form>
                </section>
        </main>
    )
}

export default FormLigas