import React, {useEffect} from "react";
import { opcionesSuscriptor } from "../data/opcionesSuscriptor";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const MainSuscriptor = () => {

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(location.state?.mensaje){
            toast.success(location.state.mensaje);
        }
    }, [location.state]);
    
    
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="grid gap-6 md:grid-cols-3 w-3xl max-w-4xl">
                {opcionesSuscriptor.map((op, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(op.ruta)}
                        className={`cursor-pointer rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition ${op.fondo}`}
                    >
                    <div>{op.icono}</div>
                    <h2 className="text-xl font-semibold mb-2">{op.titulo}</h2>
                    <p className="text-gray-600">{op.descripcion}</p>
                </div>
            ))}
            </div>
        </main>
    );
}

export default MainSuscriptor