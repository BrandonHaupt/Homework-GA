const {dogs} = require('./data')

// const owner = dogs.find((element, index) => {
//     // returns the object where the first owner is Sam, .find will return the very FIRST key with the value of Sam
//     return element.owner === "Sam"
// })

// console.log(owner)

// const newJersey = dogs.find((element, index) => {
//     // will return undefinded because there are no values/elements of New Jersey
//     return element.residence === "New Jersey"
// })

// console.log(newJersey)

const ownerAndResidence = dogs.find((element, index) => {
    return element.owner === 'Sam' && element.residence === "Brooklyn"
})

console.log(ownerAndResidence)