const fighter = {
    name: "Frank",
    health: 100,
    strength: 10,
    defense: 10,
}

const defender = {
    name: "Steve",
    health: 100,
    strength: 10,
    defense: 10,
}

class Fighter {
    constructor(name, health, strength, defense){
        this.name = name
        this.health = health
        this.strength = strength
        this.defense = defense
    }

    attack(){
        let damage = this.strength - defender.defense
        console.log(`Attacker did ${damage} to ${defender}, ${defender} now has ${this.health}`)
    }
}