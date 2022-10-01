// ---------------------------------
//             OBJECTS
// ---------------------------------

// const User = {
//     name: "Brandon",
//     learning: true,
//     codingLanguages: "Currently known: Html, CSS, JS",
// }

// console.log(User.codingLanguages)


// Robot
const key = "weapon"

const robot = {
    name: "BoopBoop",
    series: 1,
    isEvil: false,
    //["gas tank"]: "full",
    [key]: "Lasers",
}

// const obj = {
//     prop: "Hello World",
//     myFunc: () => {
//         console.log(`Can I use this? ... ${this.prop}`)
//     }
// }

function countStrings(arr){

    const obj = {}

    for (let word of arr){
        if(obj[word]){
            obj[word] += 1
        } else {
            obj[word] = 1
        }
    }

    return obj

}
console.log("---------------------------------------")
console.log("")

console.log(countStrings(["dog", "dog", "cat"]))

console.log("")
console.log("---------------------------------------")
console.log("")


//Adding keys to an empty array
const you = {}

you.name = "Brandon"
you.age = 30

console.log(you)

console.log("")
console.log("---------------------------------------")
console.log("")


console.log(robot)               // Accesses the entire robot object
console.log(robot.series)        // Accesses the robots series key
//console.log(robot["gas tank"]) // this is how you call objects with arrays as keys
console.log(robot[key])