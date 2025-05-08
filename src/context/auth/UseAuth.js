import React, { useContext } from "react";
import { AuthContext } from "./AuthContex";

const UseAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth debe usarse dentro de un AuthProvider');
    }
    return context;
}

export default UseAuth;