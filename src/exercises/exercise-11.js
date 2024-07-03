/* 
EJERCICIO 11:
Ordena las peliculas por valoracion (propiedad "rating") de mayor a menor
*/


import { movies } from "../data";// los .. es la accion de ir hacia atras, ir al padre y allí doy la direccion del subdirectorio data
function sortRating (a, b) {
    const number1 = a;
    const number2 = b;

    if (number1<number2) {return -1};// si pasa esto has x cosa
    if (number1>number2) {return 1};
    return 0
 
}
export function exercise11 () {
    const arrayRanting= movies.map((movie) => movie.rating);
    return arrayRanting.sort(sortRating)
}
console.log(exercise11())
const element = document.getElementById('practice');
let contentElement = `<h1> ${exercise11().join (', ')} </h1>`
element.innerHTML = contentElement

