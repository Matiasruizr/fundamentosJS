function Persona(nombre, apellido, edad)  {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
}

Persona.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`)
}

Persona.prototype.edad = function(){
    console.log(`Hola mi edad  ${this.nombre}` )
}

var matias = new Persona('matias', 'Ruiz', 18)

Persona.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}  y soy desarrollador`)
}


matias.saludar()

function Desarrolador(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}