/* 
EJERCICIO 7:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado
Ejemplos:
"La frase 'Dábale arroz a la zorra el abad' es un palíndromo"
"La frase 'hola mundo' NO es un palíndromo"
*/

export function palindromo(text) {
    if (typeof text === "string") {
        let formattedText = text.toLowerCase().replaceAll(' ', ''); // Eliminar todos los espacios, pilas q es un let porq pienso modificar 
        const vowelsAccents = 'áéíóú';
        const vowelsNoAccents = 'aeiou';

        
        for (let index = 0; index < vowelsAccents.length; index++) {
            formattedText = formattedText.replaceAll(vowelsAccents.charAt(index), vowelsNoAccents.charAt(index));
            console.log(vowelsAccents)
        }

        for (let index = 0; index < formattedText.length / 2; index++) { ///divido entre 2 para comparar con su opuesto al / a la mitad 
            const firstIndex = index;
            const lastIndex = formattedText.length - index - 1;
            if (formattedText.charAt(firstIndex) !== formattedText.charAt(lastIndex)) {
                return false;
            }
        }

        return true;
    }
    return false;
}

// Ejemplo de uso
const element = document.getElementById('practice');
let contentElement = `<h1>${palindromo("DábalE arroz a la zorra el abad")} </h1>`;
element.innerHTML = contentElement;

