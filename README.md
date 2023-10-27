# Proyecto Frame&Camera

Proyecto ***Frame&Camera*** es un proyecto de programación enfocado a la realización en Figma del diseño de una página web que sirva como dashboard para descargar y gestionar imágenes, así como a la programación posterior de esa misma página con React y Redux. 

Diseño de Figma disponible [**aquí**](https://www.figma.com/file/suuG5YZwgdLTUg6EMdEeWu/Proyecto-3%3A-Frame%26Camera?type=design&node-id=0%3A1&mode=dev).

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
- 27/10/2023 Se descarta deploy en gh-pages y se retoma el deploy en AWS. Link en la descripcion del proyecto.
