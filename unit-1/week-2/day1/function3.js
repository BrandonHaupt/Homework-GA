// -------------------------------------
//       FUNCTION RETURN VALUES
// -------------------------------------

// Parameters/Args -> send stuff into a function
// Return values -> sends stuff out of the function
// Can only return one value
// The function stops once it returns a value


// all this does its returns the object
const buyAPony = (name) => {
    return {
        name,
        ride: ()=> console.log("You are riding a pony") // Ride is just equals to the function
    }
}

const myPony = buyAPony("Lightning")
console.log(myPony)
myPony.ride() // Can use this to show what weapons a mage/warrior class can use


// Another Example

const returnsSomething = () => {return 1} // Just returns 1


// Add 2 numbers and then square it

const addSquare = (num1, num2) => {
    return (num1 + num2) ** 2 
}

console.log(addSquare(2,2))

