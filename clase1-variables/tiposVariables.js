// Scope de variables, diferencia entre let y var
// Existe otro tipo de variables llamadas let, que tiene un alcance dentro del 
// bloque en que se encuentra, no así como las var, que son globales
// Otro tipo de variable es const, que no se puede modificar su valor una
var a = 5;
var b = 10;
const c = 6;

if (a === 5) {
  let a = 4; // El alcance es dentro del bloque if
  var b = 1; // El alcance es global
  
  // c = 10; Nos lanzaria un error!  
  console.log(a);  // 4
  console.log(b);  // 1
} 

console.log(a); // 5
console.log(b); // 1
console.log(c); // 6