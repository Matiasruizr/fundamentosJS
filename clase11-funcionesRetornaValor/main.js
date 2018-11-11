var matias = {
    nombre: 'Matias',
    apellido: 'Ruiz',
    edad: 20,
    ingeniero: true,
    cosinero: false,
    cantante: false,
    ceo:true
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es :`)

    if (persona.ingeniero) {
        console.log('ingeniero')
    } else {
        console.log('no es ingeniero')
    }

    if (persona.cosinero) {
        console.log('cosinero')
    } else {
        console.log('no es cosinero')
    }

    if (persona.cantante) {
        console.log('cantante')
    } else {
        console.log('no es cantante')
    }

    if (persona.ceo) {
        console.log('ceo')
    } else {
        console.log('no es seo')
    }
   
}

const MAYORIA_DE_EDAD = 18

function esMayorEdad(persona) {
   return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirMayorEdad(persona) {
    if(esMayorEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}


imprimirMayorEdad(matias)
imprimirProfesiones(matias)