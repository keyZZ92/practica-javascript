/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
“H, m lrnng Jvscrpt” // string original: “Hi, I am learning Javascript”
*/

    
     //-----------------------------------------------------------------------
    //declara funcion
    //const vowels de las vocalesque faltan´
    //const del texto largo
    //variable agregar resultado
    //for  let i=0; i < length;index++
    
    function removeVowels(text) {
        const vowels= 'aeiou';
        const length= text.length;
        let result= ''; 
        for (let i=0;i<length;i++) {
            const caracter= text.charAt(i);
    
            if(!vowels.includes(caracter)) {
                result +=caracter;
            }
        }
    return result;
     }
     const contentElement = document.getElementById('practice');
     contentElement.innerHTML = removeVowels ('Hi, I am learning Javascript')