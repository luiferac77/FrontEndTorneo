import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FormCrearClub = () => {
    const { ligaId } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/api/clubes/crear', {
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block">Nombre</label>
                    <input className="input-box" {...register('nombre', { required: true })} />
                    {errors.nombre && <span className="text-red-500">Nombre requerido</span>}
                </div>
                <div className="mb-4">
                    <label className="block">Apodo</label>
                    <input className="input-box" {...register('apodo')} />
                </div>
                <div className="mb-4">
                    <label className="block">Logo URL</label>
                    <input className="input-box" {...register('logo_url', { required: true })} />
                    {errors.logo_url && <span className="text-red-500">Logo requerido</span>}
                </div>
                <button type="submit" className="btn btn-primary">Crear Club</button>
            </form>
        </div>
    );
};

export default FormCrearClub;
