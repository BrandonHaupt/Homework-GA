const printGreeting = (name) => {
    return `Hello there, ${name}`
}

console.log(printGreeting("Brandon"))


// reverse word order
const reverseWordOrder = (message) => {
    return message.split("").reverse().join("")
}

console.log(reverseWordOrder("Hello this is a reversed message"))

const calculate = (num1, num2, operator) => {
    switch (operator) {
        case "add":
            return num1 + num2
            break

        case "sub":
            return num1 - num2
            break
        
        case "mult":
            return num1 * num2
            break
    
        default:
            return "Not a valid operation"
            break;
    }
}


// Print Consecutive

const printConsecutive = (data) => {
    for(let i = 0; i < data.length; i+=1){
        if(data[i] + 1 === data[i + 1] && data[i] + 2 === data[i + 2]){
            console.log(data[i], data[i + 1], data[i + 2])
        }
        console.log(data[i])
    }
}

printConsecutive([1,2,3,4,5,6,7,8,9,10])


// Letter Reverse

const letterReverse = (str) => {
    return str.split(' ').map(v => {return v.split('').reverse().join('')}).join(' ')
}

console.log(letterReverse("Luke I am your father"))