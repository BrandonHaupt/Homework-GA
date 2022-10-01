const Enemy = {
    class: "Enemy",
    baseAtt: 3,
    baseDef: 3,
    baseStr: 3,
    baseCha: 3,
}


const Warrior = {
    class: "Warrior",
    baseHP: 100,
    baseAtt: 5,
    baseDef: 3,
    attack: ()=>{
       Warrior.baseAtt + Warrior.baseStr - Enemy.baseDef
    },

    baseStr: 4,
    baseDex: 3,
    baseInt: 2,
    baseWis: 2,
    baseCha: 2,

    wepCanUse: ["Sword", "Long Sword", "Short Sword", "Halberd", "Scimitar", "Two Handed Sword", "Axe", "Two Handed Axe", "Spear", "Scythe"],
    shieldsCanUse: ["Tower", "Buckler", "Kite", "Round", "Spiked"]
}

const Mage = {
    class: "Mage",
    baseAtt: 2,
    baseDef: 1,

    baseStr: 2,
    baseDex: 2,
    baseInt: 4,
    baseWis: 3,
    baseCha: 2,

    wepCanUse: ["1-H Staff", "2-H Staff","Wand", "Tome", "Scythe"],
    shieldsCanUse: ["Buckler", "Spirit Shield", "Round"]
}
