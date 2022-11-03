const express = require('express')
const app = express()
const PORT = 3000

app.get(`/`, (res, req) => {
    req.send(`Server is up! :D`)
})

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})