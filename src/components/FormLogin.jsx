import React from 'react';
import { useForm } from 'react-hook-form';
import { User, Password, SignIn, SoccerBall } from '@phosphor-icons/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../context/auth/UseAuth';


const FormLogin = () => {

    //este hook personalizado me va a permitir registrar lo campos del formulario
    //handleSubmit voy a gestionar el envío de datos
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {login} = useAuth();
    const navigate = useNavigate();

    const onError = (errors) => {
        console.log("Errores en el formulario:", errors);
    };

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/api/usuarios/login',{
                email: data.usuario, 
                clave: data.clave
            });

            const {usuario, token, ligas} = response.data;
            login(usuario, token, ligas);
            switch(usuario.rol){
                case 'suscripto':
                    navigate('/dashboard/suscripto');
                    break;
                case 'admin_liga':
                    navigate('/dashboard/admin-liga');
                    break;
                default:
                    navigate('/dashboard/invitado');
            }
        } catch (error) {
            console.error('Error al iniciar sesión', error);
            //alert('Credenciales incorrectas o error de servidor');
        }
    }
return (
    <>
        <main className='flex w-full min-h-screen justify-center items-center'>
            <section className='section-form'>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <div className='relative mx-auto mt-2 mb-4'>
                        <SoccerBall size={92} weight="fill" className='text-blue-600 mx-auto' />
                    </div>
                    <div className='form-input'>
                        <User size={20} weight="fill" className='text-gray-400' />
                        <input type='text' 
                            {
                            ...register('usuario', 
                                {
                                    required: true, 
                                    minLength: 11, 
                                    maxLength: 320, 
                                    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                                }
                            )} 
                            placeholder='Ingrese su e-mail'
                            className='input-box'
                        />
                        {errors.usuario?.type === 'required' && <p>El usuario es requerido</p>}
                        {errors.usuario?.type === 'minLength' && <p>El email el usuario es muy corta</p>}
                        {errors.usuario?.type === 'maxLength' && <p>El email del usuario es muy largas</p>}
                        {errors.usuario?.type === 'pattern' && <p>El email no es correcto</p>}

                    </div>
                    <div className='form-input'>
                        <Password size={32} weight="fill" className='text-gray-400' />
                        <input type='password'  {...register('clave', 
                                {
                                    required: true, 
                                    minLength: 2, 
                                    maxLength: 20, 
                                    pattern: /^[a-zA-Z0-9]*$/
                                }
                            )} 
                            className='input-box'
                        />
                        {errors.clave?.type === 'required' && <p>La clave es requerida</p>}
                        {errors.clave?.type === 'minLength' && <p>La longitud de la clave no puede ser menor a 8</p>}
                        {errors.clave?.type === 'maxLength' && <p>La longitud de la clave no puede ser mayor a 20</p>}
                        {errors.clave?.type === 'pattern' && <p>La clave solo puede contener números y letras</p>}
                    </div>
                    <div className='mt-2 mb-4'>
                        <input 
                            type='submit' 
                            value='iniciar Sesión' 
                            className='btn btn-outline-primary w-full'
                        />
                    </div>
                </form>
            </section>
        </main>
        
    </>
)
}

export default FormLogin