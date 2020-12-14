const market = () =>{
    if(true){
        var apple = 'Im a Apple'
        let pear = 'Im a Pear'
        const mango = 'Im a Mango'
        console.log(mango)
        console.log(pear)
    }
    console.log(apple)
}

market()


//<-------------EXAMPLE 2 ------------------->

let x = 1
{
    let x = 2
    console.log(x)
}
console.log(x)


var x = 1
{
    var x = 2
    console.log(x)
}
console.log(x)


//<-----------------------------EXAMPLE 3 ------------------------->


const fn = () => {
    var i; //+1 +1 +1 = 3
    for(let i = 0; i < 3; i++){
        setTimeout(() => console.log(i),1000) //-------------------------------------------------->OTRA COLA
    }
}

fn()





