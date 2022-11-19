/////////////////////////////////////////
//         IMPORTANT STUFF             //
/////////////////////////////////////////
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const PORT = process.env.PORT // ALlows us to hide and use are port
const mongoose = require('mongoose') // Allows us to use Mongoose
const DATABASE_URL = process.env.DATABASE_URL // Allows us to hide and use our database
const app = express()

// Allows us to use DELETE and other methods
app.use(methodOverride('_method'))

// Allows the use for css
app.use('/static', express.static('public'))







// SHOW ***** KEEP THIS AT BOTTOM *****



/////////////////////////////////////////
//         DATABASE CONNECTION         //
/////////////////////////////////////////
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})