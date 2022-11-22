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
app.use(express.urlencoded({extended: true})) // Allows us to grab and use form data
app.use('/static', express.static('public')) // Allows the use for css


/////////////////////////////////////////
//               ROUTES                //
/////////////////////////////////////////
app.get('/', (req,res) => {
    res.send('Your server is running!')
})


/////////////////
//    SEED    //
////////////////
app.get('/fruits/seed', (req,res) => {

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
            // send created fruits as reponse to confirm creation
            res.json(data)
        })
    })
})




//////////////////
//    INDEX    //
/////////////////
app.get('/fruits', (req,res) => {
    // Get all fruits from  mongo and sends them back
    Fruit.find({}, (err,fruits) => {
        res.render("fruits/index.ejs", {fruits})
    })
})

// This does exactly as above
// app.get('/fruits', (req,res)=> {
//     Fruit.find({})
//     .then((fruits) => {
//         res.send("fruits/index.ejs", {fruits})
//     }) 
//     .catch(err => console.log(err))
// })



////////////////
//    NEW    //
///////////////
app.get('/fruits/new', (req,res) => {
    res.render('fruits/new.ejs')
})




///////////////////
//    CREATE    //
//////////////////
app.post("/fruits", (req,res) => {
    const body = req.body
    // Checks if the readyToEat property should be true or false
    body.readyToEat = body.readyToEat === "on" ? true : false

    // Create the new fruit
    Fruit.create(body, (err, fruit) => {
        // redirects the user back to the main fruits page after creation
        res.redirect('/fruits')
    })
})




//////////////////
//    EDIT     //
/////////////////
app.get('/fruits/:id/edit' ,(req,res) => {
    // gets the id from params
    const id = req.params.id
    
    // get the fruit from the database
    Fruit.findById(id, (err, fruit) => {
        // Renders the templatte and send it to fruit
        res.render('fruits/edit.ejs', {fruit})
    })
})


///////////////////
//    UPDATE    //
//////////////////
app.put('/fruits/:id', (req,res) => {

    // Get the ID from params
    const id = req.params.id
    const body = req.body

    //checks if the 
    body.readyToEat = body.readyToEat === "on" ? true : false

    //update the fruit
    Fruit.findByIdAndUpdate(id, body, {new: true}, (err, fruit)=> {
        res.redirect('/fruits')
    })
})



///////////////////
//    DELETE    //
//////////////////
app.delete('/fruits/:id', (req,res) => {
    const id = req.params.id

    Fruit.findByIdAndDelete(id, (err, fruit) => {
        res.redirect('/fruits')
    })
})







/////////////////
//    SHOW    //
////////////////
//***** KEEP THIS AT BOTTOM *****
app.get('/fruits/:id', (req, res) => {

    // get the id from Params
    const id = req.params.id

    // Find the particulkar fruit from the database
    Fruit.findById(id, (err, fruit) => {
        // render the template with the data from the database
        res.render("fruits/show.ejs", {fruit})
    })
})



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