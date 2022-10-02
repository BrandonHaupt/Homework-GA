let fighterHealth = 10
let defenderHealth = 10

class Fighter {
    constructor(name, health, strength, defense){
        this.name = name
        this.health = health
        this.strength = strength
        this.defense = defense
    }
    // Encapsulation 
    // Step 1
    attackDefender(){
        // grabbing a random number based on the fighters strength adding the fighters strength, then minus the defenders defense to get our total daman
        let damage = Math.floor(((Math.random() * fighter.strength) + fighter.strength) - defender.defense)
        // getting the health after the damage
        let health = fighterHealth - damage

        fighterHealth -= damage

        // console
        console.log(`Attacker ${fighter.name} did ${damage} to defender ${defender.name}, ${defender.name} now has ${health} health`)
        // console.log(damage)
    }

    attackFighter(){
        // grabbing a random number based on the fighters strength adding the fighters strength, then minus the defenders defense to get our total daman
        let damage = Math.floor(((Math.random() * defender.strength) + defender.strength) - fighter.defense)
        // getting the health after the damage
        let health = defenderHealth - damage
        
        defenderHealth -= damage
        
        // console
        console.log(`Attacker ${defender.name} did ${damage} to fighter ${fighter.name}, ${fighter.name} now has ${health} health`)
        // console.log(damage)
    }
}

const fighter = new Fighter("Frank", 10, 5, 2)
const defender = new Fighter("Steve", 10, 5, 2)

console.log(`Current health: ${defenderHealth}`)
// while (fighterHealth >= 0 || defenderHealth >= 0) {
//     fighter.attackDefender()
//     defender.attackFighter()
// }

for (let i = 0; i < fighterHealth; i++) {
    // const ele = array[i];
    if (fighterHealth >= 0 || defenderHealth >= 0) {
        fighter.attackDefender()
        defender.attackFighter()
        console.log(`Fighters current health is: ${fighterHealth}`)
        console.log(`Defenders current health is: ${defenderHealth}`)
        if(fighterHealth === 0){
           console.log(`${fighter.name} has defeated ${defender.name}`)
        } else if(defenderHealth === 0){
            console.log(`${defender.name} has defeated ${fighter.name}`)
        } else {
            console.log(`I don't know what's going on`)
        }
    }
}



// console.log(fighter.attack())
// fighter.attackDefender()
// defender.attackFighter()