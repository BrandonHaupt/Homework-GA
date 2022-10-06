const firstButton = document.querySelector(".click-events button")

let counter = 0

// firstButton.onclick = function(){
//     alert(`This works!`)
// }

//add a click event - method 2
//This way you usually do it
function handleClick(){
    alert("Wuba luba dub dub")
}

firstButton.addEventListener("click", handleClick)

// Store the blocks in variables
const blackBlock = document.querySelector(".bubble")
const orangeBlock = document.querySelector(".bubble div")

console.log(orangeBlock)
console.log(blackBlock)

blackBlock.addEventListener("click", function(){
    console.log(counter += 1)
})

orangeBlock.addEventListener("click", function(event) {
    event.stopPropagation() // prevent bubbling (prevents you from clicking black block as well)
    console.log("Orange Block")
})

// Keyboard events
window.addEventListener("keydown", function(event){
    console.log(event)
    if(event.ctrlKey && event.key === "g"){
        alert("G was pressed")
    }
})