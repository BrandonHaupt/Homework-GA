////////////////////////////////////
//      IMPORT DEPENDENCIES      //
///////////////////////////////////
const express = require('express')
const Fruit = require('../models/fruit')


/////////////////////////////
//      CREATE ROUTE      //
////////////////////////////
const router = express.Router()



/////////////////////////////////////////
//               ROUTES                //
/////////////////////////////////////////


/////////////////
//    SEED    //
////////////////
router.get('/fruits/seed', (req,res) => {


})


router.get('/', (req,res) => {
    res.redirect('/fruits')
})


//////////////////
//    INDEX    //
/////////////////
router.get('/fruits', (req,res) => {
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
router.get('/fruits/new', (req,res) => {
    res.render('fruits/new.ejs')
})


///////////////////
//    CREATE    //
//////////////////
router.post("/fruits", (req,res) => {
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
router.get('/fruits/:id/edit' ,(req,res) => {
    // gets the id from params
    const id = req.params.id

    // get the fruit from the database
    Fruit.findById(id, (err, fruit) => {
        // Renders the templatte and send it to fruit
        res.render('fruits/edit.ejs', {fruit})

        //I think this is a console log
        //res.json(fruit)
    })
})


///////////////////
//    UPDATE    //
//////////////////
router.put('/fruits/:id', (req,res) => {

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
router.delete('/fruits/:id', (req,res) => {
    const id = req.params.id

    Fruit.findByIdAndDelete(id, (err, fruit) => {
        res.redirect('/fruits')
    })
})

/////////////////
//    SHOW    //
////////////////
//***** KEEP THIS AT BOTTOM *****
router.get('/fruits/:id', (req, res) => {

    // get the id from Params
    const id = req.params.id

    // Find the particulkar fruit from the database
    Fruit.findById(id, (err, fruit) => {
        // render the template with the data from the database
        res.render("fruits/show.ejs", {fruit})
    })
})


///////////////////////
//      EXPORTS     //
//////////////////////
module.exports = router