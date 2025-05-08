import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FormCrearEquipo = () => {
    const { ligaId } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/api/equipos/crear', {
                ...data,
                liga_id: ligaId
            });
            alert('Equipo creado correctamente');
            reset();
        } catch (error) {
            console.error('Error al crear equipo:', error);
            alert('Hubo un error al crear el equipo');
        }
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Crear Equipo</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block">Nombre</label>
                    <input className="input-box" {...register('nombre', { required: true })} />
                    {errors.nombre && <span className="text-red-500">Nombre requerido</span>}
                </div>
                <div className="mb-4">
                    <label className="block">ID del Club</label>
                    <input className="input-box" {...register('club_id', { required: true })} />
                    {errors.club_id && <span className="text-red-500">ID del club requerido</span>}
                </div>
                <div className="mb-4">
                    <label className="block">Categoría</label>
                    <select className="input-box" {...register('categoria', { required: true })}>
                        <option value="">Seleccionar</option>
                        <option value="juvenil">Juvenil</option>
                        <option value="reserva">Reserva</option>
                        <option value="primera">Primera</option>
                    </select>
                    {errors.categoria && <span className="text-red-500">Categoría requerida</span>}
                </div>
                <button type="submit" className="btn btn-primary">Crear Equipo</button>
            </form>
        </div>
    );
};

export default FormCrearEquipo;
