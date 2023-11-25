# Proyecto Frame&Camera

El proyecto **Frame&Camera** se centra en la programación y desarrollo de una página web utilizando la plataforma Figma para el diseño inicial, seguido de la implementación con React y Redux. La finalidad de esta iniciativa es crear un dashboard que permita la descarga y gestión de imágenes.

El diseño en Figma está disponible [**aquí**](https://www.figma.com/file/suuG5YZwgdLTUg6EMdEeWu/Proyecto-3%3A-Frame%26Camera?type=design&node-id=0%3A1&mode=dev).

## Objetivo del Proyecto

El objetivo fundamental de este proyecto es demostrar competencias en programación, combinando el conocimiento del lenguaje de programación con la consecución de requisitos específicos para el diseño de la página.

## Requisitos del Proyecto

Para alcanzar los objetivos del proyecto, se establecen los siguientes requisitos:

* Diseñar la aplicación en **Figma** antes de iniciar la programación.
  - Importar componentes de la biblioteca a utilizar.
  - Definir el diseño, colores, tipografías, etc., en Figma.

Posteriormente, se debe crear una aplicación en React con las siguientes características:

* Un dashboard destinado a la descarga y gestión de imágenes.
* Utilizar Create-React-App, React-Router y Redux (con redux template).
* Importar componentes de MUI para estilos y diseño (consultar la documentación).
* Implementar una página de 'Search' que permita a los usuarios buscar imágenes en Unsplash utilizando la API correspondiente (ver ruta GET /search/photos).
* Posibilitar la acción 'Add to my photos' en cualquier imagen, importándola a la colección personal del usuario. También, incorporar una página 'My photos' para visualizar las imágenes importadas, junto con sus datos (ancho, alto, likes, fecha de agregado).
* Permitir al usuario filtrar sus fotos mediante un campo de 'Search descriptions', visualizando solo aquellas cuyas descripciones contengan la búsqueda realizada.
* Facilitar la eliminación y modificación de la descripción de imágenes en la colección personal.
* Ofrecer la opción de ordenar las imágenes por fecha de importación, ancho, alto y likes.
* Incluir una función de 'Download' que descargue la imagen desde su URL 'full'.

## Bonus

* Implementar un sistema de 'Tags' (por ejemplo: paisaje, retrato, animal, edificio) con el componente Chip. Mostrar todas las etiquetas junto al buscador en la página 'My photos', permitiendo al usuario filtrar también por etiquetas.
* Incorporar paginación en las páginas 'Search' y 'My photos', utilizando el componente Pagination.

## Requisitos Extra

* Instalar create-react-app con la plantilla de Redux.
* Crear 2 slices: searchSlice y favouritesSlice.
* El searchSlice deberá incluir un thunk para realizar la petición a la API de Unsplash, mientras que el favouritesSlice será completamente síncrono.
* Al realizar una búsqueda sin input (''), retornar una selección de fotos aleatorias utilizando la funcionalidad de Unsplash.
* Editar la descripción de las fotos favoritas en un modal, ubicando el modal fuera del bucle de fotos (photos.map()).
* Seleccionar solo los datos esenciales de Unsplash, evitando almacenar toda la información.
* Reutilizar un componente solo si tiene sentido y no genera complicaciones adicionales (por ejemplo, el motor de búsqueda de las dos páginas).

## Actualizaciones // Nuevas Funciones

- 27/10/2023: Se descarta el despliegue en gh-pages y se retoma el despliegue en AWS. El enlace se encuentra en la descripción del proyecto.
