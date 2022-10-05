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




console.log(counter)
console.log(firstButton)