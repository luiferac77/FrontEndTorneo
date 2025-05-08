import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../context/auth/UseAuth";

const RequireAuth = ({allowedRoles}) => {
    
    const { usuario, loading } = useAuth();

    if(loading){
        return <div>Cargando...</div>
    }
    if(!usuario){
        return <Navigate to="/login" replace />
    }

    if(!allowedRoles.includes(usuario.rol)){
        return <Navigate to="/unauthorized" replace />
    }

    return <Outlet />

}

export default RequireAuth;