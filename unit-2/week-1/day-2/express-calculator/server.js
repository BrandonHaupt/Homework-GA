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

        <div class="calc-row-1">
            <button class="7">7</button>
            <button class="8">8</button>
            <button class="9">9</button>
            <button class="times">X</button>
        </div>
        <div class="calc-row-2">
            <button class="4">4</button>
            <button class="5">5</button>
            <button class="6">6</button>
            <button class="subtract">-</button>
        </div>
        <div class="calc-row-3">
            <button class="1">1</button>
            <button class="2">2</button>
            <button class="3">3</button>
            <button class="add">+</button>
        </div>
        <div class="calc-row-4">
            <button class="0">0</button>
            <button class="dot">.</button>
            <button class="backspace"><</button>
            <button class="equals">=</button>
        </div>
    `)
})


app.listen(port, ()=> {
    console.log(`Listening on port: ${port}`)
})