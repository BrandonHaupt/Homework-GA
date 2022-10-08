// Created an object to hold the Users skills
const skill = {
    skills: ["Skill 1", "Skill 2"]
}

// make an object to hold our DOM nodes
const $nodes = {
    div: $("div.todos"),
    form: $("form"),
    textInput: $(`input[type="text"]`)
}

// rendering our todos to the div
function renderSkills() {
    // emptying out the skills when the page loads
    $nodes.div.empty()

    // Iterating over the skill.skills array and placing them into the DOM
    for (let s of skill.skills) {
        //creating a new div for SkillDiv and giving it the class of skillItems
        const $skillDiv = $("<div>").addClass("skillItems")

        // Grabbing the text of s(skills)
        $skillDiv.text(s)
        
        // appending the items to the DOM
        $nodes.div.append($skillDiv)

        $skillDiv.on("click", function(event){
            // grabbing the text
            const text = $(event.target).text()

            // assigning our selected text to index
            const index = skill.skills.indexOf(text)

            // removing the text/input if we want by clicking
            skill.skills.splice(index, 1)
            renderSkills()
        })
    }
}

// Adding a function to allow us to add to the current list
function addSkills(newSkills) {
    skill.skills.push(newSkills)
    renderSkills()
    console.log(newSkills)
}

// Allows us to add the skills to the list
$nodes.form.on("submit", function(event) {
    // Prevents the refreshing on submit
    event.preventDefault()

    // takes the value of the textInput and adds it
    addSkills($nodes.textInput.val())

    $nodes.textInput.val("")
})

// Render the current list of Skills
renderSkills()