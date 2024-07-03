/* 
EJERCICIO 10:
Muestra un array con el título de las películas ordenadas alfabéticamente
*/
import { movies } from "../data";

function sortStrings(a, b) {
  const string1 = a.toLowerCase();
  const string2 = b.toLowerCase();

  if (string1 < string2) return -1; // se devuelve -1 cuando string1 es menor que string2 es porque al devolver -1, 
                                   //se indica que string1 debe colocarse antes que string2 en la secuencia ordenada.
  if (string1 > string2) return 1;
  return 0;
}

export function exercise10() {
  const arrayOfTitles = movies.map((movie) => movie.title); // el método map() en el array movies para crear un nuevo array llamado arrayOfTitles que contiene solo los títulos de las películas.
                          //  Esto se logra utilizando una función de flecha dentro de map() que extrae el título de cada película.
  console.log (arrayOfTitles)
  //const numeros = [5, 9, 7,3, 6, 1]
  //console.log("numeros ordenados", numeros.sort())
  return arrayOfTitles.sort(sortStrings);

}
console.log(exercise10())
const element = document.getElementById('practice');
let contentElement = `<h1> ${exercise10()} </h1>`
element.innerHTML = contentElement
