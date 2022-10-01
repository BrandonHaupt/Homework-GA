class Hero{
    constructor(name){
        this.name = name
        Hero.count++
    }
    static count = 0

    static countHeroes(){
        console.log(Hero.count)
    }
}

const staticShock = new Hero("StaticShock")
const ironMan = new Hero("Ironman")
const wonderWomen = new Hero('Wonder Woman')
const batman = new Hero("Batman")

Hero.countHeroes()
