var nombre = 'Matias', apellido = 'Ruiz'

var nombreMayusculas = nombre.toUpperCase() // Transforma un String en Mayusculas
var apellidoMinusculas = apellido.toLowerCase() // Transforma un String en Minusculas
var primeraLetraNombre = nombre.charAt(0) // Optiene el primer valor de String
var cantidadLetrasNombre = nombre.length // Obtenemos el numero de caracteres de un string

console.log(nombreMayusculas + ' ' +apellidoMinusculas+ ' '+cantidadLetrasNombre)


var nombreCompleto = `${nombre} ${apellido}` // Interpolacion de texto

var str = nombre.substr(0,3) // Obtiene un subString desde la posicion 0 a la 3

var ultimaLetra = nombre.charAt(nombre.length - 1)