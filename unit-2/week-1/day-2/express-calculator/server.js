require('dotenv').config()
const express = require('express')
const app = express()


const PORT = process.env.PORT

app.get('/', (request, response) => {
    response.send('Listening')
})

app.get(`/calc/:num1/:num2`, (request, response) => {
    const num1 = parseInt(request.params.num1)
    const num2 = parseInt(request.params.num2)

    response.send(`
        <h1>${num1 + num2}</h1>
    `)
})


app.listen(PORT, ()=> {
    console.log(`Listening on port: ${PORT}`)
})