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

// const henchman = () => {
//     console.log("Right-o boss")
// }

// const henchman2 = () => {
//     console.log("You got it boss!")
// }

// const mobBoss = (employee) => {
//     console.log("Go to the restaurant on fire")
//     employee()
//     henchman2()
// }

// mobBoss(henchman)

// console.log(mobBoss)

const random = Math.floor(Math.random() * 4)

const c = () => {
    console.log(`you dealt ${random} damage to the slime!`)
}

const adding = (a) => {
    a()
}

adding(c)


// function recievedACallBack(cd){
//     console.log(cd())
// }

// function callBack1(){
//     return 1
// }

// recievedACallBack(callBack1)

// recievedACallBack(()=>{return 5})


const iceCreams = [
    "Vanilla",
    "Chocolate",
    "Rocky Road",
    "Butter Pecan",
    "Cookie Dough",
    
]

// iceCreams.forEach(ice => {
//     console.log(ice)
// })

const flavor = iceCreams.map(flavor => {
    return `${flavor} ice cream`
})

console.log(flavor)