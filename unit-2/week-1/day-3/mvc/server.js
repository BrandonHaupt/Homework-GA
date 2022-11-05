require("dotenv").config();
const express = require("express"); // gets the express package
const fruitController = require(`./controllers/index`)
const app = express();
const PORT = process.env.PORT

app.use(fruitController);
app.use(express.static(__dirname + '/public'))

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
