var nombre = 'Matias' // Variable global, el objeto global del browser es window

function imprimirNombreMayusculas(nombre) { 
// Definimos nombre como una variable local, no se podra acceder a la global
// A menos que la llamemos como window.nombre
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreMayusculas(nombre)