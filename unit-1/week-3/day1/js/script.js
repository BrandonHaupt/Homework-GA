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
img.setAttribute('src', "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1150&q=80")

p.append(img)
console.log(img)

// Select ALL Li's
const lis = document.querySelectorAll('li')
console.log(lis)

for (let li of lis) {
    li.classList.add('blue')
}


const chipmunks = ["Alvin", "Theodore", "Simon"]

const ul = document.querySelector("ul")

for (const chipmunk of chipmunks) {
    const newLi = document.createElement("li")
    newLi.innerText = chipmunk
    ul.append(newLi)
}



// Console logs
console.log(p)
console.log(pEl)
titleEl.style.textAlign = `center`
