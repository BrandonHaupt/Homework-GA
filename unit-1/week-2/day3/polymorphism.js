class Animal{
    constructor(phylum){
        this.phylum = phylum
    }

    walk(){
        console.log(`Moved from point A to point B`)
    }
}

class Mammal extends Animal{
    constructor(phylum){
        super(phylum)
    }
}

const meow = new Mammal('mammal')
console.log()

class Fish extends Animal{
    constructor(phylum){
        super(phylum)
    }

    // Overwrote the animal's walk function
    // This is called Polymorphism
    walk(){
        console.log(`I cannot walk. I swim...`)
    }
}

meow.walk()

const goldFish = new Fish('Fish')
goldFish.walk()
