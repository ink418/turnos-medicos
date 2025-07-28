import axios from 'axios';
import { Turno } from '../types/Turno';

const API_BASE = 'http://localhost:3001';

export const getTurnos = () => axios.get<Turno[]>(`${API_BASE}/turnos`);
export const postTurno = (turno: Turno) => axios.post<Turno>(`${API_BASE}/turnos`, turno);

export const getMedicos = () => axios.get<{ id: number; nombre: string; especialidad: string }[]>(`${API_BASE}/medicos`);
export const getHorarios = () => axios.get<{ id: number; rango: string }[]>(`${API_BASE}/horarios`);

