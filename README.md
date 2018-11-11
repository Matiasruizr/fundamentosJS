# FundamentosJS
Fundamentos de JavaScript para el dominio del lenguaje

JS es un lenguaje interpretado , va a tratar de leer el programa y ejecutarlo, en la medida que se le ordena qué ejecutar, no importándole si las variables son obligatorias o de algún tipo.

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
var str = nombre.substr(0,3) // Obtiene un subString desde la posicion 0 a la 3

var nombreCompleto = `${nombre} ${apellido}` // Interpolacion de texto podemos usar codigo js


# Trabajando con Numeros

Para trabajar con decimales, debemos multiplicar el numero, luego dividirlo para obtener unr esultado preciso, 
Ejemplo:
var precioVino = 200.3
var total = Math.round(precioVino * 100 * 3 ) / 100

# Funciones
En términos generales, una función es un "subprograma" que puede ser llamado por código externo (o interno en caso de recursión) a la función. Al igual que el programa en sí mismo, una función se compone de una secuencia de declaraciones, que conforman el llamado cuerpo de la función. Se pueden pasar valores a una función, y la función puede devolver un valor.

En JavaScript, las funciones son objetos de primera clase, es decir, son objetos y se pueden manipular y transmitir al igual que cualquier otro objeto. Concretamente son objetos Function.

Una funcion esta compuesta por:

    El nombre de la función function name
    Argumentos o parametros de la función.(a, b)
    y las sentecionas o procedimientos que definen la función. estas encerradas en llaves {}

# Alcance de funciones
Si una variable no está definida dentro del cuerpo de una función hablamos de una variable global. Por el contrario, una variable definida dentro de una función es una variable local.

Para que la ejecución de una función no modifique una variable global usamos parámetros en lugar de pasar directamente la variable.

Es posible utilizar el mismo nombre para una variable global y para el parámetro de una función con un alcance local.

# Objetos
Los objetos se definen con {}(llaves) para asignarlo a una variable se hace de esta manera var ejemplo = {}

Los objetos se componen por propiedades y valores, se utiliza ’,' para separar cada propiedad

var miObjeto = {
	//propiedad: 'valor'
	direccion: 'Alguna direccion, caracas, venezuela',
	//key:	     'value' (en ingles)
	codigoPostal: '1020'
}

# Destructurar objeto
En una funcion podemos obtener de un objeto, solo los parametros que buscamos y obtenerlos como variables, Ejemplo:

// Acá obtenemos nombre y edad de persona
function imprimirNombreEdad(persona) {
    var { nombre , edad } = persona
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}

# Parametros como referencia o como valor
Javascript se comporta de manera distinta cuando le pasamos un objeto como parámetro.

Cuando los objetos se pasan como una referencia, estos se modifican fuera de la función. Para solucionar esto se puede crear un objeto diferente. Esto lo podemos hacer colocando tres puntos antes del nombre. Ej …persona.

function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}


# Buenas practicas
https://tutobasico.com/convenciones-javascript/

La llamada al fichero js (<script src=”fichero.js”>, se debe poner lo más abajo posible en el body.