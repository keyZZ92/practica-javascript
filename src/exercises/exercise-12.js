/* 
EJERCICIO 12:
Filtra las peliculas que pertenezcan a la categoria "Drama" e incluye solo el título y la descripción
Sugerencia: puedes usar la variable "categories" en el archivo "src/js/data/movies.js"
*/
import {movies} from "../data";

function sortDrama (a, b) {
    const string1 = a.toLowerCase();
    const string2 = b.toLowerCase();
  

    if (string1<string2) {return -1};// si pasa esto has x cosa
    if (string1>string2) {return 1};
    return 0
}

export function exercise12() { 
    const arrayCategory= movies.filter((movie) => movie.category.toLowerCase() ==='drama');
     //crea un nuevo array con los elementos que cumplan la condición implementada por la función dada
     //to.lowercase importa porq no se si en la clasificacion drma esta d o D
const arrayDramaTitle = arrayCategory.map((movie) => movie.title).sort(sortDrama);
return arrayDramaTitle}

const element = document.getElementById('practice');
let contentElement = `<h1> ${exercise12().join(' , ')} </h1>`
element.innerHTML = contentElement