const counter = (i) => {
    let number = i // 1 + 1 +1 +1 +1 +1 = 6
    const count = () => {
        console.log(number++)
    }
    return count
}

const myCount = counter(1)

myCount()
myCount()
myCount()
myCount()
myCount()
myCount()

const myNewCount = counter(20)

myNewCount()
myNewCount()
myNewCount()