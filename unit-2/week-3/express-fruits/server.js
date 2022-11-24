/////////////////////////////////////////
//         IMPORTANT STUFF             //
/////////////////////////////////////////
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const FruitRouter = require('./controller/fruit')
const PORT = process.env.PORT // ALlows us to hide and use are port
// const Fruit = require('./models/fruit')

const app = express()


/////////////////////////////////////////
//             MIDDLEWARE              //
/////////////////////////////////////////
app.use(morgan('tiny')) // Logging errors and stuff
app.use(methodOverride('_method')) // Allows us to use DELETE and other methods
app.use(express.urlencoded({extended: true})) // Allows us to grab and use form data
app.use('/static', express.static('public')) // Allows the use for css


app.use(FruitRouter)




/////////////////////////////////////////
//          PORT LISTENER              //
/////////////////////////////////////////
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})