require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

const plants = [
    "Monstera Deliciosa", 
    "Corpse Flower", 
    "Elephant-Foot Yam", 
    "Witches' Butter"
]

app.get(`/awesome`, (req, res) => {
    res.send(`
        <h1>Plants are awesome!</h1>
        <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `)
})

app.get('/hello/:firstname/:lastname', (request, response) => {
    response.send(`Hello my name is ${request.params.firstname} ${request.params.lastname}`)
})


app.get('/:indexOfPlantsArray', (request, response) => {
    // Cannot have 2 response.sends it will only send one response
    // .send is like a return in a function, it stops after it is sent
    if(plants[request.params.indexOfPlantsArray]){
        response.send(plants[request.params.indexOfPlantsArray])
    } else {
        response.send(`Cannot find anything in Index ${request.params.indexOfPlantsArray}`)
    }
})

// req.query
// You can add request.query.(something here like title) and then you can request.query.title. Once done in the url do http://localhost:3000/queryexample/Brandon/Haupt?title=Dragon%20Lord to be able to show what your title is
app.get(`/queryexample/:firstname/:lastname`, (request, response) => {
    response.send(`Hello my name is ${request.params.firstname} ${request.params.lastname} and my title is ${request.query.title} and my house is ${request.query.house}`)
})

// will not reach this ever because of the : in the above app.get
// app.get(`/awesome`, (req, res) => {
//     res.send(`
//         <h1>Plants are awesome!</h1>
//     `)
// })

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})