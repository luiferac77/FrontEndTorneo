import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAuth from '../context/auth/UseAuth';
import axios from 'axios';

const FormPersona = () => {
  const {register, formState: {errors}, handleSubmit} = useForm();
  const navigate = useNavigate();
  const {usuario, token} = useAuth();

  const onSubmit = async (data) => {
    try {
        
        const nuevaPersona = {
            nombre: data.nombre,
            apellido: data.apellido,
            dni: data.dni,
            //usuario_id: usuario.id, //usuario logueado recuperado del contextos que trae info del localstorage
        };

        const response = await axios.post(
            'http://localhost:3000/api/personas/crear', nuevaPersona, 
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        if(response) {
            console.log('persona creada', response.data);
            navigate('/dashboard/suscripto', {
                state: { mensaje: 'Persona creada con éxito'}
            });
        }

    } catch (error) {
        console.error('Error al crear persona:', error.response?.data || error.message);    
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
        <h1 className='text-center text-3xl text-gray-600'>Datos personales</h1>
      </div>
      <div className='form-input'>
      <input {...register('nombre')} placeholder="Nombre" className="input-box" />
      </div>
      <div className='form-input'>
        <input {...register('apellido')} placeholder="Apellido" className="input-box" />  
      </div>
      <div className='form-input'>
      <input {...register('dni')} placeholder="DNI" className="input-box" />
      </div>
      <div className='mt-2 mb-4'>
                            <input 
                                type='submit' 
                                value='Crear' 
                                className='btn btn-outline-primary w-full'
                            />
                        </div>
    </form>
      </section>
        
    </main>
    
  );
};

export default FormPersona;