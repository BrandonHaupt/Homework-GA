// -------------------------------------
//              FUNCTIONS
// -------------------------------------


// Defining a function (3 ways)

// Normal Way (Hoisted (You can call it before it's existed))
function helloWorld() {
    console.log("Hello World")
}

helloWorld()


// Function Expression (Not Hoisted (You cant use it before it's existed))

const helloWorld2 = function() {
    console.log("Hello world 2!")
}

helloWorld2()

// Arrow Function (Not Hoisted (Cant use it before you declare it.))
const helloWorld3 = () => {console.log("Hello World 3!")}

helloWorld3()