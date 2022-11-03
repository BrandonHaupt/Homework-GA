const express = require('express')
const app = express()
const PORT = 3000

app.get(`/greeting/:name`, (request, response) => {
    response.send(`Greetings ${request.params.name}`)
})


app.get(`/tip/:total/:tipPercent`, (request, response) => {
    const total = request.params.total
    const tipPercent = request.params.tipPercent
    const tipAmount = total * tipPercent / 100

    response.send(`The tip amount is ${tipAmount}`)
})






app.listen(PORT, () => {
    console.log(`listeniong on port ${PORT}`)
})

