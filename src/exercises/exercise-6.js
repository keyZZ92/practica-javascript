/* 
EJERCICIO 6:
Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
el mayor y muestra el resultado por pantalla
*/
numberAleatory()
export function numberAleatory() {
    let aleatorios = Array.from({ length: 10 }, () => //// arrow function es una funcion sin nombre q se ejecuto dentro de otra funcion 
        Math.floor(Math.random() * 101)
      );
    let min = Math.min(...aleatorios)
    let max = Math.max(...aleatorios)

    const element = document.getElementById('practice');
    const contentElement = `<h1>min ${min} y max ${max} </h1>`; ///problema no se como mostrarlo en html
    element.innerHTML = contentElement
};

