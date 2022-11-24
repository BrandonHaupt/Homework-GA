require('dovenv').config()
const mongoose = require('./connection')
const Fruit = require('./fruit')

/////////////////
//    SEED    //
////////////////
mongoose.connection.on('open', () => {
     // DEFINE DATA WE WANT TO PUT IN THE DATABASE
    const startFruits = [
        {name: "Orange", color: "orange", readyToEat: false},
        {name: "Grape", color: "purple", readyToEat: false},
        {name: "Banana", color: "yellow", readyToEat: false},
        {name: "Strawberry", color: "red", readyToEat: false},
        {name: "Coconut", color: "brown", readyToEat: true},
    ]

    // DELETES ALL FRUITS
    Fruit.deleteMany({}, (err, data) => {
        // SEED STARTER FRUITS
        Fruit.create(startFruits, (err, data) => {
            console.log(data)
            // send created fruits as reponse to confirm creation
            // res.json(data)
        })
    })

})
