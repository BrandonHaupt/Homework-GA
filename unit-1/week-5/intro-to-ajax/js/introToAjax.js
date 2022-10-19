const pokeUrl = "https://dummydata.netlify.app/pokedex.json"
const marioUrl = "https://dummydata.netlify.app/mariones.json"

//uses ajax to save and return a promise in a variable
const request = $.ajax(marioUrl)

//using .then to log data
// request.then((data) => {
//     console.log(data)

//     // render the data to the screen
//     $main = $("main") // grab the main element

//     //
//     data.pokeName.forEach((pname, index) => {
//         const div = $("<div>")
//         div.html(`<h1>${pname.name}</h1>
//         <img src=${pname.img}`)
//         $main.append(div)

//     })
// })


//  //save url in a variable
//  const url = "https://dummydata.netlify.app/mariones.json"

//  //use ajax, save returned promise in variable
//  const request = $.ajax(url)

 // use then, log data
 request.then((data) => {
     console.log(data)

     //let's render the to the screen
     $main = $("main") // grab the main el

     data.nes_games.forEach((game, index) => {
         const div = $("<div>")
         div.html(`<h1>${game.name}</h1>
         <img src=${game.img}>`)
         $main.append(div)
         console.log()
     })

 })



console.log(pokeUrl)
