# Examen Recuperatorio: Conversión de Aplicación de Streaming a React 

## Introducción

El objetivo de este proyecto es tomar una aplicación existente de visualización de trailers, llamada **Trailerflix**, desarrollada en **HTML, CSS y JavaScript**, y convertirla a **React** utilizando **Vite**. Deberán seguir las mejores prácticas y patrones de diseño de React, aprovechando los hooks y herramientas clave, tales como `useState`, `useEffect`, `react-router`, `useNavigate`, y **Custom Hooks**.

## Requerimientos Técnicos

La conversión debe implementar lo siguiente:

- **useState**: Para manejar el estado de las películas, usuarios y otros datos relevantes.
- **useEffect**: Para manejar la carga inicial de datos (como las películas desde el archivo JSON) y la actualización del historial.
- **react-router**: Para manejar la navegación entre la página principal y la de detalles de la película.
- **useNavigate**: Para redirigir a los usuarios entre las diferentes páginas (por ejemplo, después de seleccionar una película).
- **useContext**: Para manejar el estado global de autenticación del usuario. Este estado debe mostrarse en todas las páginas, donde el componente de login muestra el nombre de usuario cuando está logueado y el botón de cierre de sesión. No se requiere redirigir después de iniciar sesión.
- **Custom Hooks**: Para encapsular la lógica de autenticación de usuarios.

## Pasos para la Conversión

### 1. Inicializar el Proyecto con Vite
- Crea un nuevo proyecto utilizando **Vite**.
- Organiza la estructura del proyecto en carpetas adecuadas (`components`, `hooks`, `context`, etc.).

### 2. Crear las Rutas con `react-router`
- Implementa el enrutamiento con **react-router**:
  - Ruta principal (`/`): Donde se mostrarán las películas disponibles.
  - Ruta de detalles de la película (`/movie/:id`): Donde se mostrará la información de la película seleccionada.

### 3. Página Principal (Componente `Home`)
- **useState**: Para manejar la lista de películas.
- **useEffect**: Para cargar las películas desde el archivo `trailerflix.json`.
- **useNavigate**: Al hacer clic en una película, navega a la página de detalles usando `useNavigate()`.

### 4. Página de Detalles de la Película (Componente `MovieDetail`)
- **useEffect**: Para leer el ID de la película desde la URL y cargar los datos correspondientes.
- **useState**: Para manejar los detalles de la película.
- Muestra la información de la película (poster, título, resumen, reparto, y tráiler).

### 5. Sistema de Autenticación
- **useContext**: Crea un contexto para manejar el estado de autenticación del usuario.
  - El formulario de inicio de sesión debe mostrarse si el usuario no ha iniciado sesión.
  - Una vez autenticado, debe actualizarse el componente de login para mostrar el nombre y el botón de cerrar sesión.

### 6. Implementación de Custom Hooks
- **useAuth**: Un custom hook para manejar la lógica de autenticación de usuarios.

## Requerimientos Funcionales

1. **Visualización de películas**: La lista de películas debe cargarse dinámicamente desde el archivo `trailerflix.json`.
2. **Autenticación de usuarios**: El sistema debe permitir iniciar sesión, mostrando el formulario de login o la información del usuario según corresponda. Al iniciar sesión, solo debe actualizarse el componente de login, sin redirecciones.
3. **Hooks personalizados**: Se deben implementar hooks personalizados para la lógica de autenticación.

## Evaluación

1. **Funcionalidad**: La aplicación debe funcionar correctamente en React.
2. **Uso de Hooks**: Se evaluará el uso adecuado de `useState`, `useEffect`, `useNavigate`, `useContext`, y custom hooks.
3. **Modularidad**: El código debe estar bien organizado y estructurado en componentes reutilizables.
4. **Estado Global**: El estado de autenticación debe manejarse correctamente con `useContext` y reflejarse en todas las páginas.

## Entrega

Los alumnos deberán subir el proyecto a un repositorio de **GitHub**, con instrucciones claras para ejecutarlo, y enviar el enlace antes de la fecha límite.
