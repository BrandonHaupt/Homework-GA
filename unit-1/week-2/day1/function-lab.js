// #1
const printGreeting = (name) => {
    return `Hello ${name}!`
}

// #2
const reverseWordOrder = (word) =>{
    return word.split(" ").reverse(" ").join(" ")
}

// #3
const calculate = (num1, num2, operation) => {

    switch (operation) {
        case "add":
            return num1 + num2

        case "sub":
            return num1 - num2

        case "mult":
            return num1 * num2

        case "div":
            return num1 / num2

        case "exp":
            return num1 ** num2
        
        default:
            break;
    }
}

const printConsecutive = (array) => {
    // forEach takes an array of any length
    array.forEach(ele => {
        return ele.sort(function(a, b) {return a - b})
    });

    // return array.join().split("", 3)

    // for (let i = 0; i < array.length; i++) {
    //     const ele = array[i];
    //     ele.sort(function(a,b){return a-b})
    // }
}


const letterReverse = (string) => {
    return string.split(" ").reverse(" ").join(" ").split("").reverse("").join("")
}


console.log(printGreeting("Slimer")); // Hello there, Slimer!

console.log(reverseWordOrder("Ishmael me Call")); // "Call me Ishmael"

console.log(calculate(4, 3, "exp")); // 64

console.log(printConsecutive([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9])); // 1, 2, 3


console.log(letterReverse("Luke I am your father")); // "ekuL I ma ruoy rethaf"

