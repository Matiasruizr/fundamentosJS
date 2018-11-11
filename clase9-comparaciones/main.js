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

function imprimirNombreMayusculas(persona) {  
    var { nombre } = persona // Guardaremos la variable nombre de persona
    console.log(nombre.toUpperCase())
}

function imprimirNombreEdad(persona) {
    var { nombre , edad } = persona
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreEdad(matias) 
imprimirNombreEdad(ayleen)

function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
   
}

cumpleanos(ayleen)
imprimirNombreEdad(ayleen)