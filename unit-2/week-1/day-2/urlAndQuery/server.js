const express = require(`express`)
const app = express()
const PORT = 3000

app.get(`/`, (res, req) => {
    req.send(`
        <h1>Listening!</h1>
    `)
})

// the : becomes a param
///:ia/:instructor will print out { ia: david, instructor: 'Hisham'}
app.get(`/:ia/:instructor`, (res, req) => {

    // Will console out anything after the "/"
    console.log(res.params.free_samples)

    // logs out {free_samples: 'David'} or what ever is put after the "/"
    console.log(res.params)

    req.send(`
        <h1>Free Samples!!</h1>
    `)
})


app.listen(PORT, () => {
    console.log(`Listening in on port ${PORT}`)
})