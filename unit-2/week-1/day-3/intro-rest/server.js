require("dotenv").config();
const express = require("express");
const app = express();

//This is called MIDDLEWARE, takes a request/response body and puts it into a JSON format
app.use(express.json())

const PORT = process.env.PORT

let fruits = [
    {
        name: "apple",
        color: "red",
        readyToEat: true,
    },
    {
        name: "pear",
        color: "green",
        readyToEat: false,
    },
    {
        name: "banana",
        color: "yellow",
        readyToEat: true,
    },
  
];

app.get("/fruits/", (req, res) => {
    res.send(fruits);
});


app.get("/fruits/:indexOfFruitsArray", (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});

app.post(`/addfruit`, (req, res)=>{
    //could also do fruits = fruits.push(req.body)
    fruits = [...fruits, req.body] // add to the fruits array
    res.send(`added`)
})

app.delete(`/delete/:ind`, (req, res) => {
    fruits = fruits.filter((v,i) => {
        return i != req.params.ind
    })
    res.send(fruits)
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
