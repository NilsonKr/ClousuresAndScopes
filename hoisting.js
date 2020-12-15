//<-----------------------VARIABLES CON VAR ----------->

a = '2'
var a;      //Las declaraciones de variables van primero que las asignaciones en el memory heap de js 
console.log(a)


console.log(a)
var a = 'Hola Soy Nilson'


// <------------------------Let y const examples----------->

console.log(a)      //Let y const no sufren del efecto del hoisting entran en la TDZ y se marcan como variables no incializadas por ende nos dara un error
let a = 2 

console.log(a)
const a = '22323'

//<-------HOISTING EN FUNCIONES------------------>

printName('Nilson')

function printName(name) {      //La funcion declarada con function se carga en el memory heap primero antes de ejecutar su llamada por eso nos deja       ejecutarla da igual si la llamamos antes que nosotros la declaremos
    console.log(name)
}


//<--------------ARROW FUNCTIONS ---------------->

console.log(printName)
                                //Al ser funciones anonimas declaradas dentro de un tipo de variable como lo es const sufren del mismo efecto de la Temporal Deadzone por ende no podremos acceder a ellas antes de su inicializacion
const printName = (name) => {
    console.log(name)
}


