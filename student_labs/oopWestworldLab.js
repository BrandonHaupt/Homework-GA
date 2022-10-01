const names = [
    "Laila", "Jack", "Harley", "Hertha", "Darren", "Jolene", 
"Loura", "Lona", "Davida", "Reena", "Leland", "Ta", "Jen", 
"Linn", "Roslyn", "Margorie", "Rafaela", "Romona", "Shanel", "Stan"];

const occupations = [
    "Clerical assistant", "Leaflet distributor", "Landowner",
"Special constable", "Anaesthetist", "Park-keeper", "Butler",
"Choreographer", "Blacksmith", "Chef", "Legal secretary",
"Song writer", "Librarian", "Landscape gardener"];

const emotions = ["Empathy", "Loyalty", "Aggression", "Curiosity", "Bulk Apperception"]

const host = {
    name: "Roget",
    occupation: "Engineer",

    saySpecs: function(message) {
        console.log(`My name is ${this.name} and my occupation is ${this.occupation}`)
    }
}

console.log(host)


class BasicHost{
    constructor(name, occupation, emotion){
        this.name = name
        this.occupation = occupation
        this.emotion = emotion
    }
    saySpecs(){
        return `My name is ${this.name} and my occupation is ${this.occupation}, I am feeling ${this.emotion}`
    }
}

const host1 = new BasicHost('Roget', `creator of Roget's Thesaurus`)
const host2 = new BasicHost('Tiger', `Engineering`)

console.log(host1.saySpecs())

console.log("")
console.log("========================================================================")
console.log("")

console.log(host2.saySpecs())

console.log("")

const hostArray = []

// while (hostArray.length <= 100) {
//     let hostName
//     hostArray.push(new BasicHost(`names: ${names}, occupations: ${occupations}`))
// }

// how to take a list of arrays, do a loop over them, and then push them into a new Class to give us a random name and occupation
// How we can 
for (let i = 0; i < 100; i += 1) {
    let hostName = names[Math.floor(Math.random() * names.length)]
    let hostOccupations = occupations[Math.floor(Math.random() * occupations.length)]
    let hostEmote = emotions[Math.floor(Math.random() * emotions.length)]
    hostArray.push(new BasicHost(hostName, hostOccupations, hostEmote))
}

console.log(hostArray)
console.log(hostArray[55].saySpecs())