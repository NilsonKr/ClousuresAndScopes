const fn =  () => {
    if(true){
        let name; //LA MARCA COMO NO INICIALIZADA , NO LE PONE VALOR UNDEFINED NI NADA , DARA ERROR SI QUEREMOS ACCEDER A ELLA ANTES DE SU INICIALIZACION
        console.log(name)      //las lineas de codigo entre esta variable y su inicializacion se conoce como TEMPORAL DEADZONE
        let name = 'nilson'
    }
}

fn()