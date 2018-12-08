class Persona {
    constructor(nombre, apellido, edad)  {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    saludar(responderSaludo) {
        console.log(`Hola me llamo ${this.nombre}`)
        if(responderSaludo){ // Si una funcion existe es True
            responderSaludo(this.nombre, this.apellido, this.edad)
        }
    }
    
    diEdad() {
        console.log(`Hola mi edad es  ${this.edad}`)
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad)
    }

    saludar(){
        console.log(`Hola me llamo  ${this.nombre} y soy desarrollador`)
        if(responderSaludo){ // Si una funcion existe es True
            responderSaludo(this.nombre, this.apellido, this.edad,  true)
        }
    }
    
}
        
function responderSaludo(nombre, apellido, edad, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log('No sabia que eras dev')
    }
} 
 
var ayleen = new Persona('Ayleen', 'Cisternas', 18)
ayleen.saludar()
ayleen.diEdad()

var matias = new Desarrollador('matias', 'Ruiz', 18)
matias.saludar(responderSaludo)
matias.diEdad()

