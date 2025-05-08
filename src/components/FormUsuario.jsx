import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAuth from '../context/auth/UseAuth';
import axios from 'axios';

const FormUsuario = () => {
  const {register, formState: {errors}, handleSubmit} = useForm();
  const navigate = useNavigate();
  const {usuario, token} = useAuth();

  const onSubmit = async (data) => {
    try {
        
        const nuevoUsuario = {
            email: data.email,
            clave: data.clave,
            rol: data.rol,
            //usuario_id: usuario.id, //usuario logueado recuperado del contextos que trae info del localstorage
        };

        const response = await axios.post(
            'http://localhost:3000/api/usuarios/crear', nuevoUsuario, 
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        if(response) {
            console.log('usuario creado', response.data);
            navigate('/dashboard/suscripto', {
                state: { mensaje: 'usuario creado con éxito'}
            });
        }

    } catch (error) {
        console.error('Error al crear usuario:', error.response?.data || error.message);    
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
        <h1 className='text-center text-3xl text-gray-600'>Usuario</h1>
      </div>
      <div className='form-input'>
      <input {...register('email')} type="text"  placeholder="email" className="input-box" />
      </div>
      <div className='form-input'>
        <input {...register('clave')} type="password" placeholder="clave" className="input-box" />  
      </div>
      <div className='form-input'>
      <input {...register('rol')}  type="text" placeholder="rol" className="input-box" />
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

export default FormUsuario;