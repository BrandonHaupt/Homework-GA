// ---------------------------------
//             METHODS
// ---------------------------------

// Methods are functions that are nested inside of objects

// vvvv Below are examples of methods vvvv(a function that belongs in an object)
// .push
// .pop
// .shift
// .unshift
// .log

const me = {
    prop: "Salutations",
    name: "Brandon",
    age: 30,
    gamer: true,
    myFun: () => {
        console.log(`${me.prop}, people!`)
    }
}

me.myFun()

const obj = {
    prop: "Hello World",
    //method #1

    // Never use .this or this when you use an arrow function
    // 2nd easiest just need to remember not to use .this or this
    myFunc: () => {
        console.log(this) 
        console.log(`Can I use this: ... ` + obj.prop)
        console.log(`or this: ... ${obj.prop}`)
    },

    // Mostly/Easiest to use
    myFunc2: function(){
        console.log(this)
        console.log(`Can I use this: ... ` + this)
        console.log(`or this: ... ${this.prop}`)
    },

    // Harder to understand don't really use
    myFunc3(){
        console.log(this)
        console.log(`Can I use this: ... ` + this)
        console.log(`or this: ... ${this.prop}`)
    },
}

console.log("")
console.log("===========================")
console.log("")

obj.myFunc()

console.log("")
console.log("--------------------------")
console.log("")

obj.myFunc2()

console.log("")
console.log("--------------------------")
console.log("")

obj.myFunc3()

console.log("")
console.log("---------------------------------------")
console.log("")

// an array that holds our robot
const robots = []

// create 100 robots

for (let count = 0; count < 100; count += 1) {
    
    robots.push({
        name: `Evil Robot ${count}`,
        serial: count,
        attack: ()=>{
            console.log("attack!")
        },
    })
}

console.log(robots)

for (let robot of robots) {
    if (robot.serial % 2 === 0) {
        console.log(robot.name)
        robot.attack()
    }
}