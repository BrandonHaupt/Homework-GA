// Assign an DOM node to a variable
let titleEl = document.getElementById(`title`)
let pEl = document.querySelector(".cool")
let p = document.querySelector('p')

// Selecting the class of Green
let p2 = document.querySelector('.green')


// Edit the text of a node
p.innerHTML = 'I am the new text'
p2.style.color = 'green'
p2.style.textAlign = 'center'

// Console logs
console.log(p)
console.log(pEl)
titleEl.style.textAlign = `center`
