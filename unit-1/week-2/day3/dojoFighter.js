class Figher {
    constructor(name, health, strength, defense){
        this.name = name
        this.health = health
        this.strength = strength
        this.defense = defense
    }

    attack(){
        let damage = this.strength - this.defense
        console.log(`Attacker did ${damage} to ${defender}, ${defender} now has ${this.health}`)
    }
}