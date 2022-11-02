const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Testicles')
})

app.get(`/calc`, (request, response) => {
    response.send(`
        <head>
            <link rel="stylesheet" href="./css/styles.css">
        </head>

    `)
})


app.listen(port, (num1, num2)=> {
    console.log(`Listening on port: ${port}`)
    console.log(`Your numbers are ${num1} + ${num2} = ${num1 + num2}`)
})