/* const fillMoneyBox = (coins) => {
    let saveMoney = 0;
    saveMoney += coins
    console.log(`Actual Money : $${saveMoney}`)
}

fillMoneyBox(10)
fillMoneyBox(40)
 */
//<---------------CLOUSURE------------------>

const estante = () =>{                          //AMBITO DONDE SE DECLARA EL CLOUSURE
    let alcancia = 0 //10  --> 30 
    const llenarAlcancia = (monedas) =>{     //Funcion interna 
        alcancia += monedas
        console.log(`Tienes $${alcancia}`)
    }
    return llenarAlcancia
}

let MiAlcancia = estante() //--------> se transformo en la referencia a la funcion interna === llenarAlcancia



MiAlcancia(10)
MiAlcancia(20)
MiAlcancia(30)


//<--------------------------ANOTHER EXAMPLE WITH TACOS :3 ----------------------------->

const taqueria = () => {                     //Funcion padre el entorno en donde existe la lista de pedidos y la accio de contar los pedidos
    let Totalpedidos = 0
    const contandoPedidos = (pedidos) => {     //Funcion interna que cuenta el total de pedidos
        Totalpedidos += pedidos
        console.log(`Llevamos en Total ${Totalpedidos} pedidos :3 desde que arrancamos `)
    }
    return contandoPedidos     //retorna la REFERENCIA a la funcion declara internamente contandoPedidos()
}

let recibirPedidos = taqueria()       //la variable toma como valor lo que retorno el llamado de la funcion taqueria()

recibirPedidos(10)       //Cada vez que se llame realmente se esta llamando a la funcion contandoPedidos()  
recibirPedidos(50)       //Lo cual siginifica que la funcion contando pedidos tendra accesos a las variables de su funcion padre cuando las requiera sin ejecutar el codigo dentro de la funcion padre osea la funcion taqueria()
recibirPedidos(23)


