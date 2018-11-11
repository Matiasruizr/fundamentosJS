var matias = {
    nombre: 'Matias',
    apellido: 'Ruiz',
    edad: 20,
    peso: 78
}

console.log(`Al inicio del año ${matias.nombre} pesa ${matias.peso}kg`)

const VARIACION_PESO = 0.2
const DIAS_DEL_ANO = 365
const aumentarPesoPersona = (persona) =>  persona.peso += VARIACION_PESO
const disminuirPesoPersona = (persona) =>  persona.peso -= VARIACION_PESO

// EL contador, parte en 0, condicion ; incremento o decremente
for (var i = 1; i <= DIAS_DEL_ANO; i++){
    var random = Math.random()
    console.log(random)
    if (random < 0.25) {
        aumentarPesoPersona(matias)
    } else if(random < 0.5) {
        disminuirPesoPersona(matias)
    }
}

console.log(`Al final del año ${matias.nombre} pesa ${matias.peso.toFixed(1)}kg`)