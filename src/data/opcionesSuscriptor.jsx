// src/data/opcionesSuscriptor.js

import { PlusCircle, Trophy, UserGear, Users, TreeStructure} from '@phosphor-icons/react';

export const opcionesSuscriptor = [
    {
        titulo: 'Crear Liga',
        descripcion: 'Crea una nueva liga personalizada con tus propias reglas.',
        icono: <PlusCircle size={48} className="text-blue-600 mb-4" />,
        fondo: 'bg-blue-50',
        ruta: '/dashboard/suscripto/crear-liga'
    },
    {
        titulo: 'Mis Ligas',
        descripcion: 'Accede y gestiona todas las ligas que creaste.',
        icono: <Trophy size={48} className="text-green-600 mb-4" />,
        fondo: 'bg-green-50',
        ruta: '/mis-ligas'
    },
    {
        titulo: 'Persona',
        descripcion: 'Agrega a una persona con sus datos personales',
        icono: <UserGear size={48} className="text-orange-600 mb-4" />,
        fondo: 'bg-orange-50',
        ruta: '/dashboard/suscripto/crear-persona'
    }, 
    {
        titulo: 'Usuarios',
        descripcion: 'Agrega usuarios para que te ayuden a administrar tu liga',
        icono: <Users size={48} className="text-yellow-600 mb-4" />,
        fondo: 'bg-yellow-50',
        ruta: '/dashboard/suscripto/crear-usuario'
    }, 
    {
        titulo: 'Permisos de usuarios',
        descripcion: 'Asigna permisos a usuarios para administrar tu liga',
        icono: <TreeStructure size={48} className="text-purple-600 mb-4" />,
        fondo: 'bg-purple-50',
        ruta: '/dashboard/suscripto/usuarios-de-liga'
    }

];
