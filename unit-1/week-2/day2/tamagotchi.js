/*
- name
- weight
- age
- birthday
- description
- hungerLevel
- happinessLevel
- attentionLevel
- lifeStage // Baby, Child, Teen, and Adult
*/

const tamagotchi = {
    name: "Frank",
    age: "Maybe",
    birthday: "That is debatable",
    weight: "It's electronic good luck guessing",
    description: "A cute pixel style monster/animal",
    eat: function(){
        console.log("Mmmmm Yummy!")
    },
}

/*
- isHungry
- wantsToPlay
- isHappy
- needsAttention
*/


// eat() {
//     /* feeding should satisfy hunger, depending on what you feed it, and may increase weight
//      grass, meat, tofu, bread, candy, etc…
//     */
   
// }
    
// speak() {
//     /* what needs does your tamagotchi have? */
// }
    
// play() {
//     /* playing with your tamagotchi should increase happiness, satisfy need for attention, and may decrease weight */
// }


tamagotchi.age // 0
tamagotchi.birthday // today's date
tamagotchi.weight // 1 
tamagotchi.description // 'A <lifeStage> tamagotchi named <name> born on <birthday> weighing <weight>'
tamagotchi.speak() // 'Mesutchi is <some state>'