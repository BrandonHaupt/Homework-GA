const tom = {
    name: "Bulba",
    weight: 100,
    age: 1,
    birthday: "09/28/2021",
    description: "Grass type",
    hungerLevel: 5,
    happinessLevel: 5,
    attentionLevel: 5,
    lifeStage: "Baby", // Baby, child, teen, adult
    isHungry: false,
    isHappy: true,
    isWantingToPlay: false,
    isNeedingAttention: false,
    eat: function (food){ // Do it this way, if you do the arrow func then .this wont work
        if (food === "meat") {
            this.hungerLevel = this.hungerLevel - 3
            this.weight = this.weight +1
        } else if(food === "tofu"){
            this.hungerLevel = this.hungerLevel - 1
            this.weight = this.weight + 0
        }
    },

    play: function() {
        this.wantsToPlay = false
        this.isHungry = true
        this.isNeedingAttention = false
        this.weight = this.weight - 1
        this.happinessLevel = this.happinessLevel + 1
    }
}

tom.eat()

const dog = {
    legs: 4,
    ears: 2,
    sound: "Bark"
}

const pig = {
    legs: 4,
    ears: 2,
    sound: "Oink"
}

const cow = {
    legs: 4,
    ears: 2,
    sound: "Moo"
}

class Animal {

}