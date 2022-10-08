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
    }
}

renderSkills()