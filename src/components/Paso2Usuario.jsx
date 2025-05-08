import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Paso2Usuario = ({ onNext, onBack, personaId, isPending }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (!personaId) {
      toast.error('Debes completar primero el paso 1');
      return;
    }
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-xl mb-4">Paso 2: Datos del Usuario</h2>
      <input {...register('email')} placeholder="Email" className="input-box" />
      <input {...register('clave')} type="password" placeholder="Clave" className="input-box" />
      
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
          disabled={isPending}
        >
          {isPending ? 'Cargando...' : 'Siguiente'}
        </button>
      </div>

      {isPending && (
        <p className="text-yellow-600 mt-2">
          Completando datos del paso anterior...
        </p>
      )}
    </form>
  );
};

export default Paso2Usuario;