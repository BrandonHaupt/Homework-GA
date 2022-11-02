const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Testicles')
})

app.get(`calc`, (request, response) => {
    response.send('Its calulator time!')
})


app.listen(port, ()=> {
    console.log(`Listening on port: ${port}`)
})