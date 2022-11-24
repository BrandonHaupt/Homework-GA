/////////////////////////////////////////
//         FRUITS MODELS               //
/////////////////////////////////////////

// Importing Mongoose to allow us to use it from the connection.js file
const mongoose = require('./connection')
const {Schema, model} = mongoose // Destructuring, grabbing model and schema off mongoose variable
// Like saying
// mongoose.Schema
// mongoose.model


// How our data will need to look when putting it into the database, it wont accept anything else unless we change it here.
const fruitsSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean
})

const Fruit = model('fruit', fruitsSchema)


///////////////////////
//      EXPORTS     //
//////////////////////
// Allows us to use this in other files
module.exports = Fruit