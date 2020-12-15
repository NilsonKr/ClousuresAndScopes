const coleccion = (books) => {
    let BookStack = books
    console.log(`Now You got ${BookStack}`)
    const countBooks = (newBooks) => {
        BookStack+= newBooks
        console.log(`You got ${newBooks} New Books for a total of ${BookStack}!!`)
    }
    return countBooks
}

let myBooks = coleccion(12)

myBooks(3)
myBooks(7)



//<-------------------------------------PRIVATE VARIABLES --------------------------->


const persons = (name) => {
    let names = [name]               //Esta variable es totalmente privada para bloques de codigo o lineas de codigo que esten fuera de el scope de esta funcion
    return{                                 //SE RETORNA UN OBJETO CON METODOS QUE PUEDEN ACCEDER A AL SCOPE DE LA FUNCION PADRE POR ENDE A LO QUE ESTE DECLARADO ALLI
        getname: () => {
            return names
        },
        pushName: (newName) => {
            names.push(newName)
            console.log(`Hey Now you got these names ${names}`)
        }
    }
}

let myNames = persons('Nilson')
console.log(myNames.getname())     //ACCEDEMOS A LAS FUNCIONES PORQUE RETORNAMOS UN OBJETOS Y COMO VALOR DE SUS PROPIEDADES EN ESTE CASO TENEMOS LAS FUNCIONES pushName y getname
myNames.pushName('Mina')
