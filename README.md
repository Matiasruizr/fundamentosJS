# fundamentosJS
Fundamentos de JavaScript para el dominio del lenguaje


# Variables
Asignamos variables escribiendo 
var foo = 'bar';
Las variables "var", tienen alcance global, podemos utilizar "let" para trabajar una variable con un alcance limitado solo a su bloque.
var a  = 1
if(a = 1){
    let a = 10;
    console.log(a); // 10
}
console.log(a) // 1