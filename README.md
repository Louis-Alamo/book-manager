# Book Repository Backend

## Descripción

Este proyecto es el backend para una aplicación de gestión de libros, desarrollado en Node.js con Express. Proporciona una API REST para manejar operaciones CRUD (crear, leer, actualizar y eliminar) sobre los libros.

## Estructura del Proyecto

- **`src/`**: Contiene el código fuente del backend.
  - **`controllers/`**: Controladores para manejar la lógica de las rutas.
    - `bookController.js`: Controlador para la gestión de libros.
  - **`models/`**: Modelos de datos utilizando Sequelize.
    - `book.js`: Modelo de datos para los libros.
  - **`config/`**: Configuración del proyecto.
    - `database.js`: Configuración de la conexión a la base de datos.
  - **`routes/`**: Definición de las rutas de la API.
    - `bookRoutes.js`: Rutas para la gestión de libros.
  - **`index.js`**: Archivo principal para iniciar el servidor.

- **`migrations/`**: Contiene archivos de migración para la base de datos.
  - `create-books-table.js`: Migración para crear la tabla de libros.

## Requisitos

- Node.js (versión 14.x o superior)
- npm (o yarn)
- MySQL (o MariaDB) con base de datos configurada

## Instalación

1. Clona el repositorio:

   ```bash
   git clone <URL_DEL_RE
