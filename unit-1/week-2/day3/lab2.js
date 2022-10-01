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

// const dog = {
//     legs: 4,
//     ears: 2,
//     sound: "Bark"
// }

// const pig = {
//     legs: 4,
//     ears: 2,
//     sound: "Oink"
// }

// const cow = {
//     legs: 4,
//     ears: 2,
//     sound: "Moo"
// }

// Defines a new class (a Class is a blueprint to make an object)
class Animal {
    // Defines the 'constructor' (what every object you 'build' based on this blueprint)
    // All animals have: ears, legs, and a sound they make
    constructor(sound, ears, legs, tail) {
        // Setting "this" specific instance of a object to the ones passed when calling this class (kinda like a function)
        this.sound = sound;
        this.ears = ears;
        this.legs = legs;
        this.tail = tail
        
    }
    // Puts a function into the blueprint(class) 
    makeSound() {
        //Prints whatever is logged in "this" specific object 
        console.log(this.sound)
    }
}

// Use 'polymorphism' to use the class(blueprint) to create new objects
// variableName = new ClassName(argument1, argument2, argument3) 
const dog = new Animal("bark", 2, 4);
const pig = new Animal("oink", 2, 4);
const cow = new Animal("moo", 2, 4);
const giraffe = new Animal("REeeeee", 2, 4, true)
// Amount of arguments depends on how many you put in the constructor above


// Should print out each object, based on the class(blueprint)
// console.log(dog, pig, cow);

// Should make the sound for that specific animal
// dog.makeSound();
// pig.makeSound();
// cow.makeSound();

console.log(giraffe)

class Human {
    constructor(fingers, arms, legs, feet, head, torso, eyes){
        this.fingers = fingers
        this.arms = arms
        this.legs = legs
        this.feet = feet
        this.head = head
        this.torso = torso
        this.eyes = eyes
    }
}

const darren = new Human(10, 2, 2, 2, 1, 1, 2)

console.log(darren)