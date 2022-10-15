const {dogs} = require('./data')

const cumulativeAgeNotAdopted = dogs.reduce((acc, element, index) => {
    // the ? means if true, the : means do this or this
    return element.adopted ? acc: acc + element.age
    //       is this true) ? “yes” : “no”
}, 0) // Starting at 0

console.log(cumulativeAgeNotAdopted)