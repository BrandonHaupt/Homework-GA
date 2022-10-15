const {minions} = require('./minions')

const attendance = (arr) => {
    arr.forEach(attend => {
        console.log(attend)
    });
}
attendance(minions)


capitalizedMinions = []

const capMinions = (arr) => {
    let capNames = arr.map((name) => {
        if(name === "kevin"){
            capitalizedMinions.push("kevin")
        } else {
            capitalizedMinions.push(name[0].toUpperCase() + name.slice(1))
        }
    })
    return capNames
}

// const capMinion = minions.forEach((name) => {
//     capitalizedMinions.push() !== "kevin" ? name[0].toUpperCase() : 'kevin'
//     console.log(capitalizedMinions)
// })

capMinions(minions)
console.log(capitalizedMinions)


const actuallyCapitalizedMinions = []

const grusNotHappy = minions.filter((min) => {
    return actuallyCapitalizedMinions.push() === min.toUpperCase()
 })


 console.log(grusNotHappy)