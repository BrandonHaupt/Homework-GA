//-------------------------------
//        CONTROL FLOW
//-------------------------------

// If Statements

// Will be TRUE (Hello)
// if (5 > 3) {
//     console.log("Hello")
// } else {
//     console.log("Good Bye")
// }

// Will be FALSE (Good Bye)
// if (5 < 3) {
//     console.log("Hello")
// } else {
//     console.log("Good Bye")
// }

// Will treat this as TRUE (Hello)
// if (66) {
//     console.log("Hello")
// } else {
//     console.log("Good Bye")
// }

// Everything expect false, 0, null, undefined, NaN, "" will be FALSE
// "false", "null", "undefined", "NaN" will be TRUE
// "" -> false , " " -> true


//-------------------------------
//            LOOPS
//-------------------------------

// let counter = 0

// while (counter <= 10) {
//     console.log(`Counter is now ... ${counter}`)
//     counter += 1
// }

// FOR LOOP

// for (let counter = 0; counter <= 10; counter += 1) {
//     console.log(counter);
// }


// while (counter / 2){
//     counter += 3
// }

for (let counter = 0; counter < 100; counter += 3){
    if(counter % 2 === 0){
        console.log(counter)
    }
}