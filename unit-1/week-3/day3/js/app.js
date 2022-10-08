
// JQuery way - Assign a Div to a variable
const $div = $(`div`) // Assign a Div to a variable
// Plain JS - Assign a DIV to a Variable
const div = document.querySelector(`div`)

// JQuery way - Changing the DIVs text
$div.html("new text")
// Plain JS - Changing the DIVs text
div.innerHTML = "New Text"

// JQuery way - Change the CSS Property
$div.css("color", "green")
// Plain JS - Changing the CSS property Plain JS
div.style.color = "black"

// JQuery way - Adding a CSS Class
$div.addClass("myStyle")
// Plain JS - Adding a CSS Class
div.classList.add("myStyle")

// JQuery way - Create a new Element
const $h1 = $("<h1>")
// Plain JS - Create a new element
const h1 = document.createElement("h1")
