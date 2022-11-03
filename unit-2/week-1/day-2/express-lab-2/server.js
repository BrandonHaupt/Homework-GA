const express = require('express')
const app = express()
const PORT = 3000

app.get(`/greeting/:name`, (request, response) => {
    response.send(`Greetings ${request.params.name}`)
})



app.listen(PORT, () => {
    console.log(`listeniong on port ${PORT}`)
})