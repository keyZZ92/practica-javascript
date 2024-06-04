/* 
EJERCICIO 1:
Muestra el siguiente saludo pasando un nombre como parámetro
“Hello <name>, how are you doing today?”
*/
export function exercise1(name) {
    console.log(typeof name)
    return `Hello ${name}, how are you doing today?`;
    
}

const element= document.getElementById('practice');
let contentElement = `<h1>${exercise1(5)} </h1>` 
element.innerHTML = contentElement



/*lo pense primero de esta forma 
//const greeting = 'Hello ';
//let myName = 'keyliany';
//const message= `, how are you doing today?`;

//const contentElement = document.getElementById('content');
;

//contentElement.innerHTML = `
//<h1>
//${ greeting + myName +message}
//</h1>
//`
*/
