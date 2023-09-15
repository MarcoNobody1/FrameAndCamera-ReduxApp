# Proyecto Frame&Camera

Proyecto ***Frame&Camera*** es un proyecto de programación enfocado a la realización en Figma del diseño de una página web que sirva como dashboard para descargar y gestionar imágenes, así como a la programación posterior de esa misma página con React y Redux. 

## Objetivo del Proyecto

El objetivo del proyecto es demostrar los conocimientos sobre el lenguaje de programación a la vez que se siguen unos requisitos para realizar el diseño de la página a realizar.

## Requisitos del Proyecto

Los requisitos a seguir para cumplir los objetivos del proyecto son los siguientes:

* Diseñar la app en **Figma** antes de escribir el código.
  - Importa componentes de la biblioteca que vas a utilizar.
  - Decide el layout, colores, tipografías etc… en Figma.

Despues de esto, crear una aplicación en React con las siguientes características:

* Un dashboard para descargar y gestionar imágenes
* Utiliza Create-React-App, React-Router, Redux (con redux template) 
* Importar Componentes de de MUI para estilos / layout (docs)
* Tiene una página de ‘Search’, donde el usuario puede buscar imágenes en Unsplash utilizando su API (aquí). Hay que utilizar la ruta GET /search/photos
* Pueden seleccionar ‘Add to my photos’ en cualquier de las imágenes e importar la imagen a su colección personal. Tiene otra página ‘My photos’ donde puede ver las imágenes que ha importado y sus datos (width, height, likes, date added).
* El usuario podrá filtrar sus fotos con un campo de ‘Search descriptions’, y ver sólo las imágenes cuyas descripciones contienen lo que ha buscado el usuario.
* Podrá borrar imágenes de su colección, y modificar la descripción.
* Podrá ordenar las imágenes por fecha de importar, width, height y likes. 
* Habrá una opción de ‘Download’ que descarga la imagen de su URL ‘full’.


## Bonus

* Implementar un sistema de ‘Tags’ (por ejemplo: paisaje, retrato, animal, edificio) con el componente Chip. Mostrar todos las etiquetas al lado del buscador en la página de ‘My photos’ y dejar al usuario filtrar etiquetas también. 
* Paginación: poner paginación en las páginas ‘Search’ y ‘My photos’ y utilizar el componente Pagination

## Requisitos extra

* Instalar create-react-app con la plantilla de Redux
* Crear 2 slices, searchSlice y favouritesSlice
* searchSlice tendrá un thunk, para hacer la petición a la API de unsplash, favouritesSlice será totalmente síncrono. 
* Cuando se hace una búsqueda sin input (‘’) devolver una selección de fotos aleatorias, unsplash tiene esta funcionalidad. 
* Editar la descripción de las fotos favoritas en un modal, crear el modal fuera del bucle de fotos (photos.map())
* No guardar todos los datos de unsplash, selecciona solo los datos necesarios
* Solo reutilizar un componente si tiene sentido y no crea más problemas (e.g. el motor de búsqueda de las dos páginas) 


## Actualizaciones // Nuevas Funciones










 --Aquí debajo, el README original de React-App --



# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
