var matias = {
    nombre: 'Matias',
    apellido: 'Ruiz',
    edad: 20,
    ingeniero: true,
    cosinero: false,
    cantante: false,
    ceo:true
}

var ayleen = {
    nombre: 'Ayleen',
    edad: 17
}

const MAYORIA_DE_EDAD = 18

// Una funcion es constante, no una variable
// a esta constante, le asignamos un parametro para ejecutar una función

/* const esMayorEdad = persona => {
       return persona.edad >= MAYORIA_DE_EDAD
   } */

const esMayorEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD 
// Podemos escribirla de esta manera cuando returnamos un solo valor
 
 

function imprimirMayorEdad(persona) {
    if(esMayorEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}


imprimirMayorEdad(matias)

const permitirAcceso = persona => {
    if(!esMayorEdad(persona)) {
        console.log('Acceso denegado')
    }
}

permitirAcceso(ayleen)