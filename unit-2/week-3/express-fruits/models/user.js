const { Schema } = require("mongoose");

const userSchema = new Schema ({
    name: String,
    age: String,
    readyToEat: Boolean
})

const User = model('User', userSchema)