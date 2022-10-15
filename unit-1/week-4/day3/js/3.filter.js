const {dogs} = require('./data')

// // this will filter out all dogs over the age of 5 and only return those dogs that are younger than 5
// const underFive = dogs.filter((element, index) => {
//     return element.age < 5
// })

// console.log(underFive)

// const even = dogs.filter((element, index) => {
//     // goes through the dogs array and prints out the even number index of dogs
//     return index % 2 === 0
// })

// console.log(even)

// will look through the dogs array and see if they are in the odd index position and return it
// const odd = dogs.filter((element, index) => {
//     return index % 2 !== 0
// })

// console.log(odd)

const noOwner = dogs.filter((element, index) => {
    // will return if the dog has no owner
    return !element.owner

    // return element.adopted === false
})

console.log(noOwner)