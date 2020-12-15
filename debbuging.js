//<----------------------DEBBUGING DE SCOPES--------------------->

var a = 'Soy a'

function scope(){
   
    let b = 'Soy b'
    const c = 'Hola soy c'
    if(true){
        let d = 'Soy D !!'
        
    }
}




//<------------------------DEBBUGING DE CLOUSURES-------------->

const moneyBox = () =>{
    debugger
    let saveMoney = 0
    const addMoney = (money) => {
        debugger
        saveMoney+= money
        console.log(`This is your money $${saveMoney}`)
    }
    return addMoney
}

let myMoney = moneyBox()

myMoney(100)
myMoney(50)
myMoney(43)


