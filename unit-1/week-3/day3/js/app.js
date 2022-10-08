
// // JQuery way - Assign a Div to a variable
// const $div = $(`div`) // Assign a Div to a variable
// // Plain JS - Assign a DIV to a Variable
// const div = document.querySelector(`div`)

// // JQuery way - Changing the DIVs text
// $div.html("new text")
// // Plain JS - Changing the DIVs text
// div.innerHTML = "New Text"

// // JQuery way - Change the CSS Property
// $div.css("color", "green")
// // Plain JS - Changing the CSS property Plain JS
// div.style.color = "black"

// // JQuery way - Adding a CSS Class
// $div.addClass("myStyle")
// // Plain JS - Adding a CSS Class
// div.classList.add("myStyle")

// // JQuery way - Create a new Element
// const $h1 = $("<h1>")
// // Plain JS - Create a new element
// const h1 = document.createElement("h1")


// assign the div to a variable with JQuery

const $div = $('div')
console.log($div)

//Changing the text
$div.text("This is some new text that is going to appear due to JQuery")
console.log($div.text()) // this is to show the text in the console

// Change the HTML node
$div.html("<h1>I have change the inner html</h1>")
console.log($div.html())

// Changing the style property node
$div.css("color", "red") //Can also use hex and rgba
console.log($div.css("color"))

// Add a CSS class to the variable
$div.addClass("cheese")

// Removes a class from the variable
$div.removeClass("cheese")

// Add an Event and Use toggleClass
const $button = $(`button`) // assigns a button variable to button
// creates an onclick event to toggle the class "cheese"
$button.on("click", () => {
    $div.toggleClass("cheese")
})

// create an image and append to the div
// document.createElement("img")
const $img = $(`<img>`) // angle brackets (< , > ) means to create a new Element
$img.attr("src", "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80")
$div.append($img) // puts the image onto the html page
console.log($img.attr("src")) // checks to see what our url for the source is