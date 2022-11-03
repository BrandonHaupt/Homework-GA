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

app.get(`/magic/:question`, (request, response) => {
    const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    const a = Math.floor(Math.random() * answers.length)
    console.log(a)

    response.send(`
    <h1>The answer to your question is ${answers[a]}</h1>`)
})






app.listen(PORT, () => {
    console.log(`listeniong on port ${PORT}`)
})

