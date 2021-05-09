# Videogames!
**_Proyecto individual final realizado por Bruno Paveglio para el bootcamp Soy Henry!_**

<p align="center">
  
   <img height="300" src="https://res.cloudinary.com/dlexbrcrv/image/upload/v1620523771/Proyects/size_yinufq.gif" />
</p>

## Enunciado

Aplicación en la cual se puedan ver los distintos videojuegos disponibles junto con información relevante de los mismos utilizando la api externa [rawg](https://rawg.io/apidocs) y a partir de ella poder, entre otras cosas:

- Buscar videjuegos.
- Filtrarlos por genero y creador.
- Ordenarlos alfabeticamente y por su rating.
- Agregar nuevos videojuegos.

## Tecnologías Utilizadas:

- React
- Redux
- Express
- Sequelize - Postgres
- Styled-Components

## Requisitos Frontend:

**Pagina inicial**:

- [ ] Alguna imagen de fondo representativa al proyecto.
- [ ] Botón para ingresar al home (`Ruta principal`).

**Ruta principal**:

- [ ] Input de búsqueda para encontrar videojuegos por nombre.
- [ ] Área donde se verá el listado de videojuegos. Deberá mostrar su:
  - Imagen
  - Nombre
  - Géneros
  - Rating
- [ ] Botones/Opciones para filtrar por género y por videojuego existente o agregado por nosotros.
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los videojuegos por orden alfabético y por rating.
- [ ] Paginado para ir buscando y mostrando los siguientes videojuegos.

**Ruta de detalle de videojuego**:

- [ ] Los campos mostrados en la ruta principal para cada videojuegos (imagen, nombre, y géneros)
- [ ] Descripción
- [ ] Fecha de lanzamiento
- [ ] Rating
- [ ] Plataformas

**Ruta de creación de videojuegos**:

- [ ] Un formulario **controlado** con los siguientes campos
  - Nombre
  - Descripción
  - Fecha de lanzamiento
  - Rating
  - Imagen
  - Géneros
  - Plataformas

## Requisitos Backend:

- [ ] **GET /videogames**:
  - Obtener un listado de los primeras 15 videojuegos
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] **GET /videogames?name="..."**:
  - Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
  - Si no existe ningún videojuego mostrar un mensaje adecuado
- [ ] **GET /videogame/{idVideogame}**:
  - Obtener el detalle de un videojuego en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de videojuego
  - Incluir los géneros asociados
- [ ] **GET /genres**:
  - Obtener todos los tipos de géneros de videojuegos posibles
  - En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
- [ ] **POST /videogame**:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
  - Crea un videojuego en la base de datos

## Base de datos

El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco deben ser obligatorias):

- [ ] Videojuego con las siguientes propiedades:
  - ID: \* No puede ser un ID de un videojuego ya existente en la API rawg
  - Nombre \*
  - Descripción \*
  - Fecha de lanzamiento
  - Rating
  - Plataformas \*
- [ ] Genero con las siguientes propiedades:

  - ID
  - Nombre

