const express = require('express')
const app = express()

app.get("/", (request, response) => {
    response.send(`
        <html>
            <body>
                <h1>Oh boy! it worked!</h1>
            </body>
        </html>
    `)
})

app.get("/homer", (request, response) => {
    response.send("Aww, Marge!" )
})

app.get("/marge", (request, response) => {
    response.send("Aww, Homey")
})

app.get("/bart", (request, response) =>{
    response.send("Hey dad!")
})

app.get("/lisa", (request, response) => {
    response.send("Hello Bart!")
})

app.get("/maggie", (request, response) => {
    response.send("Binky!")
})

app.get("/snowball2", (request, response) => {
    response.send(`Snoooow ball!`)
})

app.get("/santaslittlehelper", (request, response) => {
    response.send(`Ho ho ho! Meeeeeerrryyy Christmas!`)
})


app.listen(3000, ()=> {
    console.log('Listening on port 3000')
})