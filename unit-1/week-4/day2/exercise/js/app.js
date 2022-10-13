// setTimeout(
//     () => {
//         console.log("World")
//     }, 2000
// )

// setInterval(() => {
//     console.log("Welcome")
// }, 2100)

// const iceCreams = [
//     'vanilla',
//     "chocolate",
//     "strawberry",
//     "rocky road"
// ]

// iceCreams.forEach(currentElement =>{
//     console.log(currentElement)
// })

const henchman = () => {
    console.log("Right-o boss")
}

const henchman2 = () => {
    console.log("You got it boss!")
}

const mobBoss = (employee) => {
    console.log("Go to the restaurant on fire")
    employee()
    henchman2()
}

mobBoss(henchman)

// console.log(mobBoss)