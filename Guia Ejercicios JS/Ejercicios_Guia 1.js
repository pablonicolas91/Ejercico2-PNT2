let edad = 32
const nombre = "Pablo"

edad = 33
// nombre = "Nicolas"   TypeError Assignment to constante variable

let i = 1
 while (i <= 4){
   ++i
 }


const y = 1

// while (y < 4){
  // ++y
// } TypeError Assignment to constante variable

// 2 - Arrays

const frutas = ["Damasco", "Durazno", "Kiwi", "Manzana", "Uva"]

frutas.push("Naranja")
frutas.unshift("Sandía")
//b 
const numeros = [1,2,3,4,5]
const dobles = []


for (i=0; i < numeros.length; i++){
  dobles.push(numeros[i] * 2)
}

dobles

// c
const coloresA = ["Azul", "Verde", "Rojo"]
const coloresB = ["Amarillo", "Violeta"]

coloresA.concat(coloresB)

// Objetos
const obra = {
  titulo: "1984",
  autor: "George Orwell",
  anio: 1984
}

obra.titulo
obra['autor']
obra.anio

// b
const persona = {
  nombre: "Pablo",
  edad: 33
}
persona.hobby = "Cine"
persona.edad = 32

persona

//c
const calculadora = {
  sumar: function (a, b) {
    return a + b
  },
  
  restar: function (a, b) {
    return a - b
  },
  
  multiplicar: function (a, b) {
    return a * b
  },
  
  dividir: function (a, b) {
    return a / b
  }
}

console.log(calculadora.dividir(35,7))
console.log(calculadora.sumar(358, 68))
console.log(calculadora.multiplicar(5, 65))
console.log(calculadora.restar(5, 50))

// Template Literals
//a
const cadena =`Mi nombre es ${persona.nombre} y tengo ${persona.edad} años`

console.log(cadena)

//b
const infoProducto = (nombre, precio) => {
  return `${nombre} = $ ${precio}`
}

console.log(infoProducto("Horno Electrico", 320000))

//c
const nombreError = "TypeError"
const desc = "Assignment to constante variable"

console.log(`${nombreError} => ${desc}`)

//3 Arrow Functions
//a

const saludar = (nombre) => "Hola, " + nombre + "!"

console.log(saludar("Pablo Nicolas"))
//b
const cuadrado = (nro) => nro**2
console.log(cuadrado(5))
console.log(cuadrado(10))

//c
const mayor = (a, b) => Math.max(a,b)

console.log(mayor(150, 185))

//4 Arrays
//a
const nros = [5, 8, 525, 1, 68, 17, 1000]

console.log(nros.filter(nro => (nro %2) === 0))

//b
const estudiantes = [
  {nombre:"Max", calificacion: 10},
  {nombre:"Mini", calificacion: 2},
  {nombre:"Orson", calificacion: 8},
  {nombre:"Lewis", calificacion: 5}
]

estudiantes.map (estudiante => estudiante.nombre)

//c
console.log(nros.reduce((a, b) => a + b , 0))


// 5 Spread Operator
//a
function spreadNumbers(...n){
  return n.reduce((a,b) => a + b, 0)
}

console.log(spreadNumbers(1,458, 25))


//b b) Dado un array de números, usa el spread operator para encontrar el
//número máximo



//c
const a = {nombre: "X", edad: 35}
const b = {editor: "VS Code", language: "Java"}

const c = {...a, ...b}

console.log(c)




//6 Destructuring
// a) Dado un objeto con propiedades de una persona, usa destructuring para
// extraer el nombre y la edad en variables separadas.


// b) Utiliza destructuring en una función para extraer las propiedades de un
// objeto pasado como argumento.


// c) Dado un array con información de una ciudad (nombre, país, población),
// usa destructuring para asignar cada elemento a una variable.
