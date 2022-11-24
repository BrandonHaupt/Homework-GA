require('dotenv').config()
const mongoose = require('mongoose') // Allows us to use Mongoose


/////////////////////////////////////////
//         DATABASE CONNECTION         //
/////////////////////////////////////////

const DATABASE_URL = process.env.DATABASE_URL // Allows us to hide and use our database
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


/////////////////////////////////////////
//      ESTABLISHING A CONNECTION      //
/////////////////////////////////////////
mongoose.connect(DATABASE_URL, CONFIG)

mongoose.connection
    .on('open', () => console.log('Connected to Mongoose'))
    .on('close', ()=> console.log('Disconnected from Mongoose'))
    .on('error', (error) => console.log(error))
//


///////////////////////
//      EXPORTS     //
//////////////////////
// Allows us to use this in other files
module.exports = mongoose