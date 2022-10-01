const me = {
    prop: "Salutations",
    name: "Brandon",
    age: 30,
    likes: ["Video Games", "Coding", "Sushi", "Space", "Cats", "Nature"],
    myGreeting: () => {
        console.log(`${me.prop}, people!`)
    }
}


console.log(me.likes)
me.myGreeting()