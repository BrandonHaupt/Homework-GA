require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL


// Middle man between database and frontend
const mongoose = require('mongoose')
const db = mongoose.connection

//
mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// DATABASE connection Error/Success
// DEFINE callback functions for various events
db.on('error', (err) => console.log(`${err.message} is mongo not runnnig?`))
db.on('connected', () => console.log(`Mongo connected!`))
db.on('disconnected', () => console.log('Mongo disconnected!'))


// Listener
app.listen(PORT, () => console.log(`Express is listening on port: ${PORT}`))
