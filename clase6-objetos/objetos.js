var matias = {
    nombre: 'Matias',
    apellido: 'Ruiz',
    edad: 20
}

var ayleen = {
    nombre: 'Ayleen',
    apellido: 'Cisternas',
    edad: 19
}


console.log(matias.nombre)

function imprimirNombreMayusculas({ nombre }) {  
    // Estamos obteniendo el atributo nombre del objeto que nos llege
    console.log(nombre.toUpperCase())
}

imprimirNombreMayusculas(matias) 
imprimirNombreMayusculas({ nombre: 'Esperanza' })