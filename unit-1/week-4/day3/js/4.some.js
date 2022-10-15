const {dogs} = require("./data")

const livingInBrooklyn = dogs.some((element, index) => {

    //will return true if the dogs are from brooklyn
    // return element.residence === 'Brooklyn'
    //will return true if there is a dog living in brooklyn (all lower cased)
    return element.residence.toLowerCase() === 'Brooklyn'.toLowerCase()
})

console.log(livingInBrooklyn)


const islivingInJersey = dogs.some(element =>{
    return element.residence.toLowerCase() = "Jersey".toLowerCase()
})