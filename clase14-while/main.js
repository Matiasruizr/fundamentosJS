var matias = {
    nombre: 'Matias',
    apellido: 'Ruiz',
    edad: 20,
    peso: 78
}

console.log(`Al inicio del año ${matias.nombre} pesa ${matias.peso}kg`)

const VARIACION_PESO = 0.2
const DIAS_DEL_ANO = 365
const META = matias.peso - 3

const aumentarPesoPersona = (persona) =>  persona.peso += VARIACION_PESO
const disminuirPesoPersona = (persona) =>  persona.peso -= VARIACION_PESO
const comeMucho = () => Math.random() < 0.2 
const ejercitaMucho = () => Math.random() < 0.6

// El bucle se ejecutara hasta que la condición sea true
var contador = 0
while (matias.peso > META){
    contador++
    if (comeMucho() ) {
        aumentarPesoPersona(matias)
    } else if (ejercitaMucho() ) {
        disminuirPesoPersona(matias)
    }
}

console.log(`Tomaron ${contador} días para que ${matias.nombre} pese ${matias.peso.toFixed(1)}kg`)