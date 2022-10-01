// ---------------------------------
//          DESTRUCTURING
// ---------------------------------


const brokenRobot = {
    part1: "Arm",
    part2: "Laser",
    part3: "Wheels"
}

// const part1 = brokenRobot.part1    |
// const part2 = brokenRobot.part2    |   Long Way
// const part3 = brokenRobot.part3    |  

// this works only if you name the variable the same as the object's key
// const {part1, part2, part3} = brokenRobot      

const {part1, ...theRest} = brokenRobot

// Testign
console.log(part1, theRest) 



const arr = [1,2,3]
// this works since we say one it will grab the first item of that array, two will grab the second item of the array, etc
const [one, two, three] = arr
console.log(one, two, three)