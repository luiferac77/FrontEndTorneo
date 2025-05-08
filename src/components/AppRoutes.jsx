import React from "react";
import RequireAuth from "./RequireAuth";
import {Routes, Route} from 'react-router-dom';
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import Suscripto from "../pages/Suscripto";
import Unauthorized from "../pages/Unauthorized";
import CrearLiga from "../pages/CrearLiga";
import CrearPersona from "../pages/CrearPersona";
import CrearUsuario from "../pages/CrearUsuario";
import CrearUsuarioLiga from "../pages/CrearUsuarioLiga";
import LigaDashBoard from "../pages/LigaDashboard";
import CrearClub from "../pages/CrearClub";
import CrearEquipo from "../pages/CrearEquipo";


const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}/>
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route element={<RequireAuth allowedRoles={['suscripto']}/>}>
            <Route path="/dashboard/suscripto" element={<Suscripto />} />
            <Route path="/dashboard/suscripto/crear-liga" element={<CrearLiga />} />
            <Route path="/dashboard/suscripto/crear-persona" element={<CrearPersona />} />
            <Route path="/dashboard/suscripto/crear-usuario" element={<CrearUsuario />} />
            <Route path="/dashboard/suscripto/usuarios-de-liga" element={<CrearUsuarioLiga />}/>
        </Route>

        
        <Route element={<RequireAuth allowedRoles={['admin_liga']}/>}>
        <Route path="/dashboard/admin-liga" element={<LigaDashBoard />} /> 
        <Route path="/dashboard/admin-liga/crear-club/:id" element={<CrearClub />} />
        <Route path="/dashboard/admin-liga/crear-equipo/:id" element={<CrearEquipo />} />
        </Route>
    </Routes>
);

export default AppRoutes