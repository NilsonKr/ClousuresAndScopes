function loop(){
    var i; // 0+ 1 + 1 + 1 +1 +1 +1 +1 + 1 +1 = 10
    for(var i = 0; i< 10; i++ ){                            //VAR SUFRE EL HOSTING HASTE ENCONTRAR UN SCOPE FAMILIAR DONDE DECLARARSE
        setTimeout(() => console.log(i), 1000 )         //CUANDO LOS CALLBACKS VUELVAN PARA EJECUTARSE SE DARAN CUENTA DE QUE HAY UNA VARIABLE I ASIGNADA
                                                        //ENTONCES EL I DEL CONSOLE.LOG TOMARA EL VALOR QUE TENGA EN ESE MOMENTO LA VARIABLE I ASIGNADA EN EL SCOPE DE LA FUNCION PADRE
    }
}

loop()


//<----------------CON VAR ---------------------->

function loop(){
    for(let i = 0; i< 10; i++ ){                            //COMO LET TIENE SCOPE DE BLOQUE NO SUFRE DEL HOISTING Y VA CUMPLIR SU FUNCION DENTRO DEL BUCLE SIN PISAR SU VALOR ANTERIOR
        setTimeout(() => console.log(i), 1000 )            //LO QUE QUIERE DECIR QUE LET NO VA A GUARDAR NINGUN VALOR POR ENDE LOS setTimeout SE MOSTRARAN CON EL VALOR QUE SE FUERON A LA CALLBACK QEUE
    }
}

loop()