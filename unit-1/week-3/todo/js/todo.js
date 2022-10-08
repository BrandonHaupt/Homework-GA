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

// Create a function that appends the todos to the div
function renderTodos(){

    //empty out the div before rendering
    $nodes.div.empty()

    // iterates over the data.todos array and appends them to the div
    for (let todo of data.todos) {
        const $todoDiv = $("<div>").addClass("todo")
        $todoDiv.text(todo)
        $nodes.div.append($todoDiv)
    }
}

// Function for adding todos
 function addTodo(newTodo){
    data.todos.push(newTodo)
    renderTodos()
 }


 

// Call the function so it can run
renderTodos()