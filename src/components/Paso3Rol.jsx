import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Paso3Rol = ({ onNext, onBack, usuarioId }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (!usuarioId) {
      toast.error('Debes completar primero los pasos anteriores');
      return;
    }
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-xl mb-4">Paso 3: Asignar Rol en la Liga</h2>
      <input {...register('liga_id')} placeholder="ID de Liga" className="input-box" />
      <select {...register('rol')} className="input-box">
        <option value="">Seleccioná un rol</option>
        <option value="admin">Administrador</option>
        <option value="club">Club</option>
        <option value="dt">Director Técnico</option>
        <option value="jugador">Jugador</option>
      </select>
      
      <div className="flex justify-between mt-4">
        <button 
          type="button" 
          onClick={onBack} 
          className="btn btn-outline-secondary"
        >
          Atrás
        </button>
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={!usuarioId}
        >
          Finalizar
        </button>
      </div>

      {!usuarioId && (
        <p className="text-yellow-600 mt-2">
          Completando datos de usuario...
        </p>
      )}
    </form>
  );
};

export default Paso3Rol;