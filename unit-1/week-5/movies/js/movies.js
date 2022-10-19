// variable for API Key
const apiKey = "194b5df3"

// Variable for the base url
const baseURL = "http://www.omdbapi.com/"

// movie search function
function movieSearch(title){
    
    // making the url for request
    const url = `${baseURL}?t=${title}&apikey=${apiKey}`
    console.log(url)

    // making the request
    // we dont need a promise because we dont need to use it afterwards
    $.ajax(url).then((movie) =>{

        // Grabs the main element from index.html and assigns it to the variable $main
        const $main = $('main')
        // if anything is already on main it will clear it
        $main.empty()

        //Grabs the div
        const div = $('<div>')

        // Will put the title, year, rated, released, and runtime in different tags
        div.html(`<h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
        <p>${movie.Rated}</p>
        <p>${movie.Released}</p>
        <p>${movie.Runtime}</p>
        <img src="${movie.Poster}">`)

        // will take those divs and appends them to the main(index.html)
        $main.append(div)

        // Just looking at what movie is being grabbed
        console.log(movie)
    })
}

// grab the submit button, put a click event on it
$("input[type=submit]").on("click", (event) => {

    // prevent the refresh
    event.preventDefault()

    // grab text from input box
    const inputText = $("input[type=text]").val()
    
    // update the screen
    movieSearch(inputText)
})


movieSearch("The Godfather")