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

        console.log(`${fighter.name} did ${damage} to defender ${defender.name}, ${defender.name} now has ${health} health`)
    }

    attackFighter(){
        // grabbing a random number based on the fighters strength adding the fighters strength, then minus the defenders defense to get our total daman
        let damage = Math.floor(((Math.random() * defender.strength) + defender.strength) - fighter.defense)
        // getting the health after the damage
        let health = defenderHealth - damage
        
        defenderHealth -= damage
        
        // console
        console.log(`${defender.name} did ${damage} to fighter ${fighter.name}, ${fighter.name} now has ${health} health`)
        // console.log(damage)
    }
}

const fighter = new Fighter("Frank", 10, 5, 2)
const defender = new Fighter("Dave", 10, 5, 2)

let gameOver = true
let fighterDefender = true

console.log(`Current health: ${defenderHealth}`)
while (gameOver) {

    if (fighterDefender) {
        fighter.attackDefender()
    } else {
        defender.attackFighter()
    }

    fighterDefender = !fighterDefender


    if(fighterHealth <= 0){
       console.log(`${fighter.name} has defeated ${defender.name}`)
       gameOver = false
    } 

    if(defenderHealth <= 0){
        console.log(`${defender.name} has defeated ${fighter.name}`)
        gameOver = false
     }

}

