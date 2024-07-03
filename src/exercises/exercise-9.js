/* 
EJERCICIO 9:
Un reloj muestra: 
 - la hora (0 <= h <= 23) 
 - los minutos (0 <= m <= 59)
 - y los segundos (0 <= s <= 59).

 Escribe una funcion que calcule los millisegundos que han pasado desde 
 media noche 00:00:00 hasta la hora actual teniendo en cuenta que:

 - hay 1000 millisegundos en un segundo
 - podemos obtener la hora, minutos y segundos con la función "getTime" 

*/

 function getTime() {
  const now = new Date();
  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  };
  console.log(now)
}

export function calcularpasado () {
let time = () => {
  const now = new Date();
  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  }}
console.log(time.hours);
let horaactual= time ()
let millisegundos = horaactual.hours *3600 *1000 + horaactual.minutes *60 *1000 + horaactual.seconds *1000
return millisegundos }
;
calcularpasado ()

const element = document.getElementById('practice');
let contentElement = `<h1>Han pasado ${calcularpasado()} millisegundos</h1>`
element.innerHTML = contentElement


