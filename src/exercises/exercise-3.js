/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>”
*/

function vowelsCounter(text) {
    const vowels= 'aeiou';
    const length= text.length;
    let counter= 0;
    
    for (let index=0;index < length;index++) { 
    if(vowels.includes(text.charAt(index))) {
        counter++;
    } 
    }
    
    return counter; 
     }
    const text= 'Hello world'
     const element = document.getElementById ('content')
     element.innerHTML = `Text "${text}" contains ${vowelsCounter(text)} vowels`
