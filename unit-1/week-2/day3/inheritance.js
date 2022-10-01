class Car{
    constructor(model, color){
        this.model = model
        this.color = color
    }

    makeSound(){
        console.log("Vrooooooooooooooom")
    }

}

// Inheritance
class Toyota extends Car{
    constructor(model, color){
        super(model, color)
    }
}

class Honda extends Car {
    constructor(model, color, engine){
        super(model, color)
        this.engine = engine
    }
}

const myCar = new Toyota("Mobile", "Cherry red")
console.log(myCar)

const mySecondCar = new Honda("Civic", "Lime Green", "V8")
console.log(mySecondCar)