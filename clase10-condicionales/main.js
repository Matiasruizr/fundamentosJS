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
function imprimirMayorEdad(persona) {
    if(persona.edad >= 18){
        console.log("Es mayor de edad")
    } else {
        console.log("Es menor de edad")
    }
}

imprimirMayorEdad(matias)
imprimirProfesiones(matias)