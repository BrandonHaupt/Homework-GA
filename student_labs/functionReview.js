/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */
console.log("Hello")
/*
 * Prompt 1:
 *
 * Write a function called sayHello.
 * When invoked, sayHello should print the string 'hello' with your name, a day of the week, and a Boolean for AM/PM. 
 * Then set a conditional in your function that will return Good Morning or Good Afternoon depending on that variable. 
 */

const sayHello = (name, dayOfTheWeek, am) => {

    if(am === true){
        console.log(`Hello ${name}, it is ${dayOfTheWeek}. It is the morning!`)
    } else {
        console.log(`Hello ${name}, it is ${dayOfTheWeek}, welcome to night time!`)
    }

}

sayHello("Brandon", "Saturday", true)


/* Prompt 2
​
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 
 * Then, create an array of quotes. You can just list the quotes, or you can add other values like the person who said it, and when.
 * Set up a random number function that displays a random quote (and any add'l information you added) each time the file is run
 */
const printMessage = (message) =>{
    let quotes = ["Random", "Message", "Not", "Sure"]

    let randomQuote = () => {
        console.log(quotes[Math.floor(Math.random * quotes.length - 1)])
    }
    console.log(`Today's message is ${message} heres a random quote: ${randomQuote}`)
}

printMessage("Testing the waters")

/* Prompt 3
 *
 * Create a function called reverseMessage. This function should take
 * a parameter called message. When invoked and passed a string, print the
 * string in reverse. (hint: look up some ways of doing this.)
 */
const reverseMessage = (message) => {
    console.log(message.split(" ").reverse().join(" "))
}
reverseMessage("Hello this is a message")

/*
 * Prompt 4:
 *
 * Create a function called multiply that takes two parameters: a and b. When
 * invoked, multiply a times b. If an argument is not passed in for b, then
 * double a (i.e. multiply it by two).
 *
 * Try doing the same for Addition, Subtraction, Division, and anything involving Square Roots.
 * You may want to save all of these functions in a different file that you can use to create a JS calculator in once we learn DOM manipulation
 
 *If you've got this down, lets take a second and add in the Modulus operator that can tell us if a number is even or odd (or anything else about it)
 */

 const multiply = (a = a*2,b = b*2) =>{
    switch (a*b) {
        case a:
            console.log(a * 2)
        
        case b: 
            console.log(b * 2)
    
        default:
            console.log(a * b)
            break;
    }
 }

 multiply(5)

/*
 * Prompt 5
 *
 * Write a function that returns an object. The object can be anything.
 * 
 * Then, write a function that returns and logs an array of objects. The array can be of anything. Make it as simple or as complex as you would like
 * Have some fun and try using conditions, random numbers, and other JS tricks to get different objects from the array to log. 
 */


const object = () => {}

/*
 * Prompt 6:
 *
 * Write a function that, when called, adds a number passed in as a parameter to
 * the sum variable below. Invoke your method a few times and then print the sum
 */

/** Starter Code */
let sum = 0

const adding = (num) => {
    return sum = sum + num
}

adding(5)
console.log(sum)

/*
 * Prompt 7:
 *
 * Write a function that takes an array of number values and returns the sum.
 * Test it out to make sure it works.
 */



/* Prompt 8:
 *
 * Write a function that takes a string and logs and returns an array of every word in
 * the string.
 */


/*
 * Prompt 13:
 *
* convert a function you have already written from an Expression to a Declaration, or vice versa
​
​
/** Starter Code */
testFunc()

/** Your Solution */
testFunc()

/*
 * Prompt 14:
 *
 * Write a function that takes the add function below as a parameter and invokes
 * it, passing in 2 and 4.
 */

/** Starter Code */
function add(a, b) {
  a + b
}

/** Your Solution */
function add(a, b) {
  a + b
}

/*
 * Prompt 15:
 *
 * Write a function that returns another function. Have the inner function print
 * the string "hello world"
 */