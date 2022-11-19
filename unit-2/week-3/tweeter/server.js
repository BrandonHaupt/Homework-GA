require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

// The order of how the express app should be written
// Index, New, Delete, Update, Create, Edit, Show


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

// DATABASE connection Error/Success
// DEFINE callback functions for various events
db.on('error', (err) => console.log(`${err.message} is mongo not runnnig?`))
db.on('connected', () => console.log(`Mongo connected!`))
db.on('disconnected', () => console.log('Mongo disconnected!'))


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

// DELETE ROUTE
app.delete('/tweets/:id', (req,res) => {
    // finds the tweet by the id and then will either give us an error or it will delete the tweet
    Tweet.findByIdAndDelete(req.params.id, (error, deletedTweet) => {
        console.log(deletedTweet)
        res.send({success: true})
    })
})

// UPDATE ROUTE
app.put('/tweets/:id', (req,res) => {
    Tweet.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}, // <-- will give us the new, most up to date version
        (error, updatedTweet) => {
            res.send(updatedTweet)
        }
    )
})


// SEED ROUTE
app.get('/tweets/seed', (req,res) => {
    Tweet.create([
        {
            "title": "Games are THE best",
            "body": "It makes me a happy camper",
            "author": "Game R"
        },
        {
            "title": "Coco",
            "body": "Amazing",
            "author": "Game R"
        },
        {
            "title": "PS5",
            "body": "It makes me interested",
            "author": "Game R"
        },
        {
            "title": "Incredibles",
            "body": "Create movie",
            "author": "Game R"
        },
        {
            "title": "Sushi Is AMAZING",
            "body": "Its very very yummy!",
            "author": "Game R"
        }
    ], (error, seededTweet) => {
        res.send(seededTweet)
    })
})




// SHOW ROUTE - This will get the tweet that we want
app.get('/tweets/:id', (req,res) => {
    Tweet.findById(req.params.id, (error, foundTweet) => {
        res.send(foundTweet)
        // vv - Can also be {foundTweet} because they are the first and 2nd thing are the same - vv
        // res.render('tweet_show', {foundTweet: foundTweet})
        // ^^ - Can also be {foundTweet} because they are the first and 2nd thing are the same
    })
})


// Listener
app.listen(PORT, () => console.log(`Express is listening on port: ${PORT}`))
