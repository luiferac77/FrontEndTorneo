import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../context/auth/UseAuth';
import axios from 'axios';

const AdminLigaDashboard = () => {
    const { ligas } = useAuth(); // IDs de las ligas
    const [ligasData, setLigasData] = useState([]); // Información completa de las ligas
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLigasDetails = async () => {
            try {
                // Realizamos múltiples solicitudes para cada ID de liga
                const requests = ligas.map((ligaId) =>
                    axios.get(`http://localhost:3000/api/ligas/buscarporid/${ligaId}`)
                );

                // Esperamos a que todas las solicitudes se completen
                const responses = await Promise.all(requests);

                // Extraemos los datos de las respuestas y los guardamos en el estado
                const ligasDetails = responses.map((response) => response.data);
                setLigasData(ligasDetails);
                setLoading(false);
            } catch (err) {
                setError('Error al cargar las ligas.');
                setLoading(false);
            }
        };

        if (ligas && ligas.length > 0) {
            fetchLigasDetails();
        } else {
            setLoading(false);
        }
    }, [ligas]);

    if (loading) {
        return <p className="text-center mt-10">Cargando ligas...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500 mt-10">{error}</p>;
    }

    if (!ligas || ligas.length === 0) {
        return <p className="text-center mt-10">No tenés ligas asociadas.</p>;
    }

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Tus Ligas</h1>
            <table className="w-full border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">Nombre de la Liga</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {ligasData.map((liga) => (
                        <tr key={liga._id} className="border-t">
                            <td className="border border-gray-300 px-4 py-2">{liga.nombre}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <div className="space-x-4">
                                    <Link
                                        to={`/dashboard/admin-liga/crear-club/${liga._id}`}
                                        className="text-blue-600 hover:underline"
                                    >
                                        Crear Club
                                    </Link>
                                    <Link
                                        to={`/dashboard/admin-liga/crear-equipo/${liga._id}`}
                                        className="text-green-600 hover:underline"
                                    >
                                        Crear Equipo
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminLigaDashboard;