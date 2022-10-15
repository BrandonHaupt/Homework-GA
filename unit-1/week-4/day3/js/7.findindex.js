const {dogs} = require('./data')

// const firstIndexWhereSamIsOwner = dogs.findIndex((element, index) => {
//     return element.residence === "Jersey"
// })

// console.log(firstIndexWhereSamIsOwner)

const firstIndexWhereSamIsOwnerAnResInBrook = dogs.findIndex((element, index) => {
    // this will return the index where the the FIRST thing is true.
    return element.owner === "Sam" && element.residence === "Brooklyn"
})

console.log(firstIndexWhereSamIsOwnerAnResInBrook)