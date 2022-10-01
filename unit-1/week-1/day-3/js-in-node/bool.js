// ------------------------------
//      BOOLEAN OPERATORS
// ------------------------------

const a = 5
const b = 8

// EQUALITY
//console.log(a === b)  // False,  === is strict equality
//console.log(a == b) // == is a loose equality

console.log(a === "5") // False
console.log(a == "5") // True

// INEQUALITY
//console.log(a !== b)  // False,  !== is strict inequality
//console.log(a != b) // != is a loose inequality

console.log(a !== "5") // True
console.log(a != "5") // False

// Greater/Less than
console.log(a < b) // Less than
console.log(a > b) // Greater than
console.log(a <= b) // Less than or equals to
console.log(a >= b) // Greater than or equals to

// COMPOUND OPERATIONS
console.log(a < b && a > b) // Runs the the less than first, then the greater than, since it's AND operator it will result in FALSE

console.log(a < b || a > b) // the OR operator will make it result in TRUE

const c = a < b && a > b
console.log(c)

