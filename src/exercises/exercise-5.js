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


export function repetitions (text) {
    let result= '';
  
  
    for (let index=0; index < text.length; index++)
        { 
            const caracter = text.charAt(index) 
            const repetida = caracter.toUpperCase()+caracter.toLowerCase().repeat(index)
            result+= repetida
        }
        return result
  }
  
  const element= document.getElementById('practice');
  let contentElement = `<h1>${repetitions("code")} </h1>` 
  element.innerHTML = contentElement