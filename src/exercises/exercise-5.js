/* 
EJERCICIO 5:
Escribe una función llamada "repetitions" que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula
 
Ejemplos:
repetitions(‘code’) // result: “COoDddEeee”
repetitions(‘list’) // result: “LIiSssTttt”
repetitions(function) // result: “FUuNnnTtttIiiiiOoooooNnnnnnn”
*/

export function palindromo(text) {
    if (typeof text === "string") {
        const formattedText = text.toLowerCase().replaceAll(' ', ''); // Eliminar todos los espacios
        const vowelsAccents = 'áéíóú';
        const vowelsNoAccents = 'aeiou';

        let noAccents = formattedText;
        for (let index = 0; index < vowelsAccents.length; index++) {
            noAccents = noAccents.replaceAll(vowelsAccents.charAt(index), vowelsNoAccents.charAt(index));
        }

        for (let index = 0; index < noAccents.length / 2; index++) {
            const firstIndex = index;
            const lastIndex = noAccents.length - index - 1;
            if (noAccents.charAt(firstIndex) !== noAccents.charAt(lastIndex)) {
                return false;
            }
        }

        return true;
    }
    return false;
}

// Ejemplo de uso
const element = document.getElementById('practice');
let contentElement = `<h1>${palindromo("Dábale arroz a la zorra el abad")} </h1>`;
element.innerHTML = contentElement;