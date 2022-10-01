// --------------------------------------
//              ARRAYS
// --------------------------------------

// const instructionalTeam = ["Alex", "Billie", "David", "Kyle", "Max", "Hisham"]

//console.log(instructionalTeam)


//Access one element of an array
//console.log(instructionalTeam[0])

//instructionalTeam[0] = "Alex Merced"
//console.log(instructionalTeam)

//instructionalTeam.push("August") // PUSH Adds to the end of an Array
//instructionalTeam.unshift("Amber") // UNSHIFT adds to the beginning of an Array

//instructionalTeam.pop("August") // POP removes last item
//instructionalTeam.shift("Amber") // SHIFT removes first item


// const favCharacter = ["Frank", "Steve", "Amanda"]
// console.log(favCharacter.length)

// let removedLastItem = favCharacter.pop()
// let removedFirstItem = favCharacter.shift()

// let addedItemFront = favCharacter.unshift("Tsuki")
// let addedItemToBack = favCharacter.push("Bob")

// console.log(favCharacter)

// Splice 
// array.splice(where to start splicing, how many things to remove, anything you want)

// const nums = [1,5,6,7,3]

// nums.splice(1,3,2)

// console.log(nums)

// Looping over an array

// const pokemon = ["Pikachu", "Mew", "Snorlax"]

// for(let counter = 0; counter < pokemon.length; counter += 1){
//     const poke = pokemon[counter]
//     console.log(poke)
// }


// const num = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// for (const ele of num) {
//     if(ele % 3 --- 0 ){
//         return num.push(ele)
//     }
// }

// let odds = num.forEach(ele => {
//     if(ele % 3 === 0){
//         return num.push(ele)
//     }
// });

// console.log(odds)

let numbers = [5,4,3,2,1]
numbers.sort(function(a,b){return a-b})

console.log(numbers)

let array = [2,3,3,3,4]
console.log(array.slice(1,4))

let arrayIndex = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,7,1,1,1,1,1,1,1,1,1,1,1]
console.log(arrayIndex.indexOf(7))

let helloWorld = "Hello World"
console.log(helloWorld.split(""))

let success = ["s","u","c","c","e","s"]
console.log(success.join(""))