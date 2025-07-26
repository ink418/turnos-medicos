# 📆 Sistema de Toma de Turnos Médicos

Aplicación desarrollada con **Ionic + React** para la asignatura de Desarrollo de Aplicaciones móviles. Permite a los pacientes registrar un turno médico a partir de una lista predeterminada de médicos y horarios. La aplicación contiene dos pantallas: ingreso de turnos y visualización de turnos registrados.

---

## Funcionalidades

- ✅ Registro de turnos médicos
- ✅ Visualización de turnos en lista
- ✅ Listado de médicos predeterminados
- ✅ Horarios preestablecidos (sin validación de disponibilidad)
- ✅ Arquitectura de componentes distribuida

---

## Tecnologías utilizadas

- [Ionic Framework](https://ionicframework.com/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- HTML5 + CSS3

---

## Estructura del Proyecto

src/
├── data/ → Listas predeterminadas de médicos y horarios
├── pages/ → Pantallas de la aplicación
├── types/ → Definición de tipos personalizados (Turno)
├── App.tsx → Componente raíz con navegación
└── theme/ → Variables y estilos


## ¿Cómo ejecutar?

1. Clonar el repositorio:
```bash
git clone https://github.com/tu_usuario/toma-turnos-medicos.git
cd toma-turnos-medicos

Instalar dependencias:
npm install

Ejecutar aplicación:
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