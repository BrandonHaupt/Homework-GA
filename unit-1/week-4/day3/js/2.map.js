const {dogs} = require('./data')

const mapNamesAndAges = (arr) => {
    let names = arr.map((dog, index) => {
        // this will return an array of objects with the dogs name and age
        return {name: dog.name, age: dog.age, breed: dog.breed}

        //This will return an array of just the dogs name
        //return element.name
    })
    return names
}

// console.log(mapNamesAndAges(dogs))


// const obj = {name: 'Odell beckham jr'}

// // will add an key called "position" with the value of "wide reciever"
// obj.position = "Wide Reciever"
// console.log(obj)

// const addingIds = (arr) => {
//     let addedId = arr.map((element, index) => {
//         // this takes the element.id to equal index, instead of 0 it will start at 1 due to the + 1 after index
//         element.id = index + 1
//         return element
//     })
//     return addedId
// }

// console.log(addingIds(dogs))


// const nate = (arr) => {
//     let sports = arr.map(element => {
//         return element
//     })

//     return sports
// }

// let sports = dogs.map(element => {
//     return element
// })

// console.log(sports)