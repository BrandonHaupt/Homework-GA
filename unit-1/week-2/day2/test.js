//write a function that takes two numbers and a string and returns the num or difference depending on whether the string is "add" or "sub"

function twoNumbers(num1, num2, str){
    switch (str) {
        case "add":
            return num1 + num2
            break

        case "sub":
            return num1 - num2
            break

        default:
            console.log("Didn't recognize your input")
            break;
    }
}

console.log(twoNumbers(4,4,"add")) // 8
console.log(twoNumbers(4,4,"sub")) // 0

//write a function that takes a number and return true if even or false if odd
let number
function isEven(num){
    // if (num % 2 === 0) {
    //     return number = true
    // } else {
    //     return number = false
    // }

    const result = num % 2 === 0 // This runs just like above
    return result
}

console.log(isEven(5)) //false
console.log(isEven(4)) //true


//write a function that takes a number and returns an array with all numbers 0 up to that number

function createNumArray(num){
    const array = []
    for (let i = 0; i <= num; i++) {
        array.push(i)
    }
    return array
}

console.log(createNumArray(5)) //[0,1,2,3,4,5]
console.log(createNumArray(3)) //[0,1,2,3]