/////////////////////////////////////////
//         IMPORTANT STUFF             //
/////////////////////////////////////////
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const PORT = process.env.PORT // ALlows us to hide and use are port
const mongoose = require('mongoose') // Allows us to use Mongoose
const app = express()


/////////////////////////////////////////
//             MIDDLEWARE              //
/////////////////////////////////////////
app.use(morgan('tiny')) // Logging errors and stuff
app.use(methodOverride('_method')) // Allows us to use DELETE and other methods
app.use('/static', express.static('public')) // Allows the use for css
app.use(express.urlencoded({extended: true})) // Allows us to grab and use form data









// SHOW ***** KEEP THIS AT BOTTOM *****





/////////////////////////////////////////
//         DATABASE CONNECTION         //
/////////////////////////////////////////

const DATABASE_URL = process.env.DATABASE_URL // Allows us to hide and use our database
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


// ESTABLISH OUR CONNECTION
mongoose.connect(DATABASE_URL, CONFIG)

mongoose.connection
    .on('open', () => console.log('Connected to Mongoose'))
    .on('close', ()=> console.log('Disconnected from Mongoose'))
    .on('error', (error) => console.log(error))




/////////////////////////////////////////
//         FRUITS MODELS               //
/////////////////////////////////////////

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






/////////////////////////////////////////
//          PORT LISTENER              //
/////////////////////////////////////////
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})