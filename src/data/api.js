// api.js
const API_BASE_URL = 'https://backendtorneo.onrender.com/api';

export const endpoints = {
  crearLiga: () => `${API_BASE_URL}/ligas/crear`,
  buscarLigaPorId: (ligaId) => `${API_BASE_URL}/ligas/buscarporid/${ligaId}`,
  crearClub: () => `${API_BASE_URL}/clubes/crear`,
  crearEquipo: () => `${API_BASE_URL}/equipos/crear`,
  crearPersona: () => `${API_BASE_URL}/personas/crear`,
  crearUsuario: () => `${API_BASE_URL}/usuarios/crear`,
  loginUsuario: () => `${API_BASE_URL}/usuarios/login`,
  crearLigaUsuario: () => `${API_BASE_URL}/ligaUsuario/crear`,
};

