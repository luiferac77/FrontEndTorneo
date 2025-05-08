import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PersonaCreadaPage = () => {
  const { id } = useParams(); // 🟡 Obtenemos el ID de la URL

  return (
    <div>
      <h2>Persona creada exitosamente</h2>
      <p>ID: {id}</p>
      
      <div className="actions">
        <Link to={`/crear-usuario/${id}`} className="btn">
          Crear Usuario
        </Link>
        <Link to={`/asignar-rol/${id}`} className="btn">
          Asignar Rol
        </Link>
      </div>
    </div>
  );
};

export default PersonaCreadaPage;