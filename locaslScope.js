const local = () => {
    let hello = 'Hello'
}

local()
console.log(hello)
 


//Ambito Lexico

const global = 'Global'

const fn = () => {
    const global = 'Im Just a local'   //No es buena practica
    const fn2 = () => {
        return global
    }
    console.log(global)
}

fn()
console.log(global)