import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [usuario, setUsuario] = useState(null);
    const [token, setToken] = useState(null);
    const [ligas, setLigas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const tokenGuardado = localStorage.getItem('token');
        const usuarioGuardado = localStorage.getItem('usuario');
        const ligasGuardadas = localStorage.getItem('ligas');

        if (tokenGuardado && usuarioGuardado) {
            setToken(tokenGuardado);
            setUsuario(JSON.parse(usuarioGuardado));
            setLigas(JSON.parse(ligasGuardadas || '[]'));
        }

        setLoading(false);
    }, []);

    const login = (datosUsuario, token, ligasUsuario = []) => {
        setUsuario(datosUsuario);
        setToken(token);
        setLigas(ligasUsuario);

        localStorage.setItem('usuario', JSON.stringify(datosUsuario));
        localStorage.setItem('token', token);
        localStorage.setItem('ligas', JSON.stringify(ligasUsuario));
        console.log(ligasUsuario);
    }

    const logout = () => {
        setUsuario(null);
        setToken(null);
        setLigas([]);
        localStorage.removeItem('usuario');
        localStorage.removeItem('token');
        localStorage.removeItem('ligas');
    }

    return (
        <AuthContext.Provider value={{ usuario, token, ligas, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}