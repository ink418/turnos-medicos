# 📆 Sistema de Toma de Turnos Médicos

Aplicación desarrollada con **Ionic + React** para la asignatura de Desarrollo de Aplicaciones móviles. Permite a los pacientes registrar un turno médico a partir de una lista predeterminada de médicos y horarios. La aplicación contiene dos pantallas: ingreso de turnos y visualización de turnos registrados.

---

## Funcionalidades

- ✅ Registro de turnos médicos
- ✅ Visualización de turnos en lista
- ✅ Listado de médicos predeterminados
- ✅ Horarios preestablecidos (sin validación de disponibilidad)
- ✅ Arquitectura de componentes distribuida
- ✅ Datos obtenidos desde una API REST simulada (JSON Server)

---

## Tecnologías utilizadas

- [Ionic Framework]
- [React]
- [TypeScript]
- Axios
- JSON Server (para simular una API REST)
---

## Estructura del Proyecto

toma-turnos-medicos/
├── db.json → API simulada con turnos, médicos y horarios
├── src/
│ ├── api/api.ts → Lógica de conexión con la API
│ ├── data/ → (Reemplazado por API)
│ ├── pages/ → IngresoTurno, ListaTurnos
│ ├── types/Turno.ts → Tipado de datos
│ └── App.tsx


## ¿Cómo ejecutar?

1. Clonar el repositorio:
```bash
git clone https://github.com/ink418/turnos-medicos.git
cd turnos-medicos

Instalar dependencias:
npm install

Iniciar el servidor API(JSON Server)
npm run api

Ejecutar en otra terminal, la aplicación con Ionic:
ionic serve


Datos predeterminados
Médicos:

Dra. Ana Torres (Pediatría)

Dr. Carlos Pérez (Medicina General)

Dra. Luisa Herrera (Cardiología)

Horarios:

08:00 - 08:30

08:30 - 09:00

09:00 - 09:30

09:30 - 10:00


Autor
Andrés Bonilla

Proyecto Final – Desarrollo de Aplicaciones móviles

Universidad: UISEK