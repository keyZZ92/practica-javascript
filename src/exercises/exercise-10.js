/* 
EJERCICIO 10:
Muestra un array con el título de las películas ordenadas alfabéticamente
*/
import { movies } from "../data";

function sortStrings(a, b) {
  const string1 = a.toLowerCase();
  const string2 = b.toLowerCase();

  if (string1 < string2) return -1;
  if (string1 > string2) return 1;
  return 0;
}

export function exercise10() {
  const arrayOfTitles = movies.map((movie) => movie.title);
  return arrayOfTitles.sort(sortStrings);
}
