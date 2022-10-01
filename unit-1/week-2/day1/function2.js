// -------------------------------------
//   FUNCTION PARAMETERS AND ARGUMENTS
// -------------------------------------


// Parameters are used in the declaration (name <- parameter)
const nameAPony = (name, name2) => {
    console.log(`The name of my pony is ${name} ${name2}`) //${} <--- string interpolation
}

//Each invocation, can pass an Argument
nameAPony("Charlie", "Paco")
nameAPony("Susie", "Taco")
nameAPony("Lisa", "Pizza")


//                            V - Default value
const logTheThing = (stuff = "Hello World") => {
    console.log(stuff)
}

logTheThing("Cheese") // Will replace the default value of "Hello World" with Cheese
logTheThing()         // Will output the default value of "Hello World" 