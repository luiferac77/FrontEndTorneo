import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Paso1Persona from './Paso1Persona';
import Paso2Usuario from './Paso2Usuario';
import Paso3Rol from './Paso3Rol';

const FormularioUsuariosDeLiga = () => {
  const [step, setStep] = useState(1);
  const [personaId, setPersonaId] = useState(null);
  const [usuarioId, setUsuarioId] = useState(null);
  const navigate = useNavigate();

  const headers = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handlePersona = async (data) => {
    try {
      const res = await axios.post(
        'http://localhost:3000/api/personas/crear',
        {
          nombre: data.nombre,
          apellido: data.apellido,
          dni: data.dni,
          fecha_nacimiento: data.fecha_nacimiento,
        },
        headers
      );
      setPersonaId(res.data._id);
      toast.success('Persona creada');
      nextStep();
    } catch (err) {
      console.error(err);
      toast.error('Error al crear persona');
    }
  };

  const handleUsuario = async (data) => {
    if (!personaId) {
      toast.error('personaId aún no está listos');
      return;
    }

    try {
      const res = await axios.post(
        'http://localhost:3000/api/usuarios/crear',
        {
          email: data.email,
          clave: data.clave,
          persona_id: personaId,
        },
        headers
      );
      setUsuarioId(res.data._id);
      toast.success('Usuario creado');
      nextStep();
    } catch (err) {
      console.error(err);
      toast.error('Error al crear usuario');
    }
  };

  const handleRol = async (data) => {
    if (!usuarioId) {
      toast.error('usuarioId aún no está listo');
      return;
    }

    try {
      await axios.post(
        'http://localhost:3000/api/liga_usuarios/crear',
        {
          liga_id: data.liga_id,
          usuario_id: usuarioId,
          rol: data.rol,
        },
        headers
      );
      toast.success('Rol asignado en la liga');
      navigate('/dashboard/suscripto', {
        state: { mensaje: '¡Usuario asignado a liga!' },
      });
    } catch (err) {
      console.error(err);
      toast.error('Error al asignar rol');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      {step === 1 && <Paso1Persona onNext={handlePersona} />}
      {step === 2 && (
        <Paso2Usuario 
          onNext={handleUsuario} 
          onBack={prevStep} 
          personaId={personaId}  // 🔹 Pasamos personaId
          isPending={!personaId} // 🔹 Indica si aún no está listo
        />
      )}
      {step === 3 && (
        <Paso3Rol 
          onNext={handleRol} 
          onBack={prevStep} 
          usuarioId={usuarioId} 
        />
      )}
    </div>
  );
};

export default FormularioUsuariosDeLiga;