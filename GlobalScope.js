var hello = 'hello'
let world = 'world'           ///TIENEN SCOPE GLOBAL SI SON DECLARADAS DE ESTA FORMA 
const helloWorld = 'Hello World'

const print = () => {
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}

print()

//MALAS PRACTICAS

const randomFunction = () => {
    global = 'Hello' //declarar una variable sin palabra reservad es mala practica
}
randomFunction()
console.log(global)

//MAS malas practicas 

const randomFunction = () => {
    var globar = hola = 'Hello'
}

randomFunction()
console.log(hola)