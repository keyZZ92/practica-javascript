/* 
EJERCICIO 14:
Muestra un array que solo incluya el titulo de la pelicula mejor valorada de cada uno de estos actores:
- Leonardo Dicaprio
- Robert De Niro
- Tom Hanks
*/

// PRIMERA FORMA ENCONTAR LA MEJOR PELICULA DE UN ACTOR 
/*
import { movies } from "/data.js";
export function bestMovie (actor) {
const arrayActor = movies.filter((movie)=> movie.actors.includes(actor));
// uso reduce para aplicar una funct sobre cada item de un array devolviendo un unico valor 
// tomo dos parametros best y movie (movie que lo vengo usando y best para referirme al mejor rating )
const arrayBestRating = arrayActor.reduce ((best, movie)=> {
    if (movie.rating > best.rating ) { 
        return  movie }
    else {return best}
     }, arrayActor[0]);
    return arrayBestRating.title
}
//llamar la funcion con  el actor q busco 
const bestMovieTitle = bestMovie("Tom Hanks");

const element = document.getElementById('practice');
let contentElement = `<h1>La mejor película de  es "${bestMovieTitle}"</h1>`;
element.innerHTML = contentElement;

*/
// encontrar el array ahora 


import { movies } from "/data.js";

export function bestMovie(actor) {
    const arrayActor = movies.filter((movie) => movie.actors.includes(actor));
    if (arrayActor.length === 0) {
        console.warn(`No se encontraron películas para el actor: ${actor}`);
        return null;
    }

    const arrayBestRating = arrayActor.reduce((best, movie) => {
        return (movie.rating > best.rating) ? movie : best;
    }, arrayActor[0]);

    return arrayBestRating.title;
}

const actores = ["Tom Hanks", "Leonardo Dicaprio", "Robert De Niro"];

// Crear el array para almacenar las mejores películas de cada uno de los actores
const mejoresPeliculas = [];

// Encontrar la mejor película para cada actor
actores.forEach((actor) => {
    const mejorPelicula = bestMovie(actor);
    if (mejorPelicula) {
        mejoresPeliculas.push({ actor: actor, mejorPelicula: mejorPelicula });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('practice');
    if (element) {
        let contentElement = "<h1>Mejores películas por actor:</h1>";
        contentElement += "<ul>";
        mejoresPeliculas.forEach((info) => {
            contentElement += `<li>La mejor película de ${info.actor} es "${info.mejorPelicula}"</li>`;
        });
        contentElement += "</ul>";
        element.innerHTML = contentElement;
    } else {
        console.error("Elemento con id 'practice' no encontrado.");
    }
});


