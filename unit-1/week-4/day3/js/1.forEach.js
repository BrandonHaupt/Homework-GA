const { dogs } = require('./data');

// const forLooping = arr => {
//     for(let i=0; i<arr.length; i+=1){
//         console.log(arr[i])
//     }
// }



// const adopt = []

// const upForAdoption = arr => {
//     for(let i=0; i < arr.length; i+=1){
//         let adopted = arr[i]
//         if (adopted.adopted === true) {
//             adopt.push(adopted.name)
//         }
//     }
//     console.log(adopted)
// }

// forLoopNames(dogs)
// upForAdoption(dogs)
// console.log(dogs)



// const forEachElement = (arr) => {
//     arr.forEach((element, index) =>{
//         console.log(element)
//     })
// }

// const names = [];

// const forLoopNames = arr => {
//     for(let i=0;i<arr.length;i+=1){
//         let dogName = arr[i]
//         names.push(dogName.name);
//     }
//     console.log(names)
// }

// const names = []

// const forEachDogName = (arr) => {
//     arr.forEach((dogName,index) => {
//         names.push(dogName.name, dogAge)
//     })
//     console.log(names)
// }


// using for each to push into an empty array 2 properties
const nameAndAge = [];

const addingNameAndAge = (arr) => {
    arr.forEach((element, index) => {
        nameAndAge.push({ name: element.name, age: element.age})
    });

    console.log(nameAndAge)
}

addingNameAndAge(dogs)


// const forEachElementAndIndex = (arr) => {
//     arr.forEach((element, index) =>{
//         console.log(element, index)
//     })
// }

// forEachElementAndIndex(dogs)

// forEachDogName(dogs)

// forEachElement(dogs)