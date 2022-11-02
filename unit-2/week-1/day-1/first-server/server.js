const express = require('express');
const app = express()


// calls the express
// the / is used for a normal url, you can change it to /taco but you need to go to the site localhost:3000/taco instead of just localhost:3000
app.get('/', (request, response) => {
    console.log("oh heya! I added nodemon")
    // sends a response to the website and shows hello world
    response.send('Hello World')
})

// puts our server on port 3000 to listen to it
app.listen(3000, () => {
    console.log('Express is listening for requests from the browser')
})