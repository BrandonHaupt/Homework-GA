const express = require(`express`)
const app = express()
const PORT = 3000

app.get(`/`, (res, req) => {
    req.send(`
        <h1>Listening!</h1>
    `)
})

app.get(`/:free_samples`, (res, req) => {

    console.log(res.params.free_samples)

    req.send(`
        <h1>Free Samples!!</h1>
    `)
})


app.listen(PORT, () => {
    console.log(`Listening in on port ${PORT}`)
})