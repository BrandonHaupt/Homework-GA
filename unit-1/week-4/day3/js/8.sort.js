const {dogs} = require('./data')

//the sort method sorts the elements of an array in place and returns the reference to the same array
// [].sort((1. a, 2.b,) =>{})
//a or the 'currentItem' is the first element for comparison
//b or the 'nextItem' is the second element for comparison

// takes the age of dogs and returns then in order going from 1 - 10
const asc = dogs.sort((a,b) => {
    if (a.age < b.age){
        return -1
    } else if(a.age > b.age){
        return 1
    } else {
        return 0
    }
})

// Takes the age of dogs and returns then in order going from 10 - 1
// you can take these, push the dogs name, age, breed, and location to HTML page and make it a sort descending order
const asc2 = dogs.sort((a,b) => {
    if (a.age < b.age){
        return 1
    } else if(a.age > b.age){
        return -1
    } else {
        return 0
    }
})

//This will turn nums into strings
parseInt()

console.log(asc2)