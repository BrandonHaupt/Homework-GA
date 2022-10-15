const {dogs} = require("./data")

// const isEveryAdopted = dogs.every((element, index) => {
//     return element.adopted
// })

// console.log(isEveryAdopted)

const ageOverZero = dogs.every((element, index) => {
    return element.age > 0
})

console.log(ageOverZero)