require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

// Dependencies
const Tweet = require('./models/tweet.js')

// Middleware
// Body parser middleware: it creates req.body
app.use(express.urlencoded({extended: false}))
app.use(express.json()) // allows for the ability to parse JSON from POSTMAN

// Middle man between database and frontend
const mongoose = require('mongoose')
const db = mongoose.connection


mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


// ROUTES / CONTROLLERS
// CREATE
app.post('/tweets', (req, res) => {

    if(error){
        res.send('Error')
    }

    res.send(createdTweet)
})


// INDEX ROUTE
app.get('/tweets', (req,res)=> {
    Tweet.find({}, (error, foundTweets)=>{
        res.send(foundTweets)
        //res.render('tweets_index', {tweetsL foundTweets})
    })
})




// SHOW ROUTE
app.get('/tweets/:id', (req,res) => {
    Tweet.findById(req.params.id, (error, foundTweet) => {
        res.send(foundTweet)
    })
})


// DATABASE connection Error/Success
// DEFINE callback functions for various events
db.on('error', (err) => console.log(`${err.message} is mongo not runnnig?`))
db.on('connected', () => console.log(`Mongo connected!`))
db.on('disconnected', () => console.log('Mongo disconnected!'))


// Listener
app.listen(PORT, () => console.log(`Express is listening on port: ${PORT}`))
