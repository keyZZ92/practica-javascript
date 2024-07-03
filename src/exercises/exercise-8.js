/* 
EJERCICIO 8:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar las funciones de ejercicios anteriores).
*/

export function alphabetPosition (text) {
    if (typeof text==="string") { // comprobar si es un string
  
        const formattedText = text.toLowerCase().replaceAll(' ', ''); // Eliminar todos los espacios
        const vowelsAccents = 'áéíóú';
        const vowelsNoAccents = 'aeiou';
  
        let noAccents = formattedText;
        for (let index = 0; index < vowelsAccents.length; index++) {
            noAccents = noAccents.replaceAll(vowelsAccents.charAt(index), vowelsNoAccents.charAt(index))
        }; // eliminar acentos
  
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const miArray = [];// al estar vacio puedo agregar el valor al hacer el bucle for 
        for (let index= 0; index < noAccents.length; index++) {
        const position = alphabet.indexOf(noAccents.charAt(index)) + 1;/// con esto busco en el array y s+1 para q empiece en 1 y no en 0 .
        // creo una const porque no puedo hacer un remplazo de un numero por index
        miArray.push(position) /// tomo el array y le hago push a la const que he creado , creando un return
         }
         return miArray // retorno el miArray y da bien la posición 
  
    } 
    return false
  }
  const element = document.getElementById('practice');
  let contentElement = `<h1>${alphabetPosition("Dábale arroz a la zorra el abad")} </h1>`
  element.innerHTML = contentElement
