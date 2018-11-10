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

# Trabajando con Strings
Existe gran cantidad de metodos para trabajar con Strings, entre ellos 

var nombreMayusculas = nombre.toUpperCase() // Transforma un String en Mayusculas
var apellidoMinusculas = apellido.toLowerCase() // Transforma un String en Minusculas
var primeraLetraNombre = nombre.charAt(0) // Optiene el primer valor de String
var cantidadLetrasNombre = nombre.length // Obtenemos el numero de caracteres de un string

# Buenas practicas
https://tutobasico.com/convenciones-javascript/