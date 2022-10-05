// Assign an DOM node to a variable
let titleEl = document.getElementById(`title`)
let pEl = document.querySelector(".cool")
let p = document.querySelector('p')
let body = document.querySelector('body')

// Selecting the class of Green
let gh1 = document.querySelector('.green')

// Selecting the id of Red
let rh1 = document.querySelector("#red")


// Edit the text of a node
p.innerHTML = 'I am the new text'

// Editing the style
gh1.style.color = 'green'
// rh1.style.color = "red"
body.style.fontFamily = "arial"

// Setting the classes on a node
rh1.classList.add('blue')

// Create an image and set its source attribute
const img = document.createElement('img')
console.log(img)



// Console logs
console.log(p)
console.log(pEl)
titleEl.style.textAlign = `center`
