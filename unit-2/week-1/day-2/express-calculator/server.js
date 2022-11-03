const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Listening')
})

app.get(`/calc/:num1/:num2`, (request, response) => {
    response.send(`
        <head>
            <link rel="stylesheet" href="./css/styles.css">
        </head>

        <h1> ${request.params.num1} and ${request.params.num2}</h1>
    `)
})


app.listen(port, ()=> {
    console.log(`Listening on port: ${port}`)
})