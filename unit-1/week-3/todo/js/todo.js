// Object to hold application data
const data = {
    todos: ["Breakfast", "Lunch"],
}

// object to hold main dom nodes
// We are going to need the div node to place our input[text] in so we grab our form so we can grab our input from there
const $nodes = {
    div: $("div.todos"),
    form: $("form"),
    textInput: $(`input[type="text"]`)
}

//Save the data of the Todo list into the local storage
function saveTodos() {
    // turn the data object into a JSON string
    const json = JSON.stringify(data)

    // save the string in local storage
    localStorage.setItem("tododata", json)
}

// Load the local storage save data
function loadTodos(){
    // get data from local storage
    const json = localStorage.getItem("tododata")

    //update data if json isnt undefined
    if (json) {
        // parse json string into js object
        const savedData = JSON.parse(json)

        // update data with the saved array
        data.todos = savedData.todos
    }
}

// Create a function that appends the todos to the div
function renderTodos(){

    //empty out the div before rendering
    $nodes.div.empty()

    // iterates over the data.todos array and appends them to the div
    for (let todo of data.todos) {
        //creates a individual div
        const $todoDiv = $("<div>").addClass("todo")
        $todoDiv.text(todo)
        $nodes.div.append($todoDiv)

        // add click even to remove todo
        $todoDiv.on("click", function(event){
            // Get the text of the thing
            const text = $(event.target).text()
            const index = data.todos.indexOf(text)
            data.todos.splice(index, 1)
            renderTodos()
        })
    }

    // saves the todo
    saveTodos()

}


// Function for adding todos
 function addTodo(newTodo){
    // pushing the new Todos to the data todo array
    data.todos.push(newTodo)

    // Rerendering the todos function
    renderTodos()
 }


$nodes.form.on("submit", function(event){
    // Prevent refresh so that we can add to the form
    event.preventDefault()

    // Add the todo from the textInput
    addTodo($nodes.textInput.val())

    // Empties the form
    $nodes.textInput.val("")
})



// Call the function so it can run
loadTodos()
renderTodos()