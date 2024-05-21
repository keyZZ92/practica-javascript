/* 
EJERCICIO 1:
Muestra el siguiente saludo pasando un nombre como parámetro
“Hello <name>, how are you doing today?”
*/
//export function exercise1(name) {
//  return `Hello ${name}, how are you doing today?`;
//}


function greeting (myName){
    return ( `hello ${myName} , how are you?`)
    
};
const contentElement = document.getElementById('content');

contentElement.innerHTML = greeting ('keyliany')





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

