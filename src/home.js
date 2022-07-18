import {createToDo, updatePage} from "./to-do-controller.js"

function structure() {
    // Assign body DOM element to a variable
    const body = document.body;
    //Create the header and assign it a class
    const header = document.createElement("div")
    header.classList.add("header");
    header.innerText = "To Do List";
    body.appendChild(header);

    // Create container
    const container = document.createElement("div");
    container.classList.add("container");

    //Display on the left for projects
    const projectDisplay = document.createElement("div");
    projectDisplay.classList.add("projectsDisplay");
    const defaultProjects = document.createElement("div");
    defaultProjects.classList.add("defaultProjects");
    projectDisplay.appendChild(defaultProjects);
    const mainProject = document.createElement("div");
    const todayProject = document.createElement("div");
    mainProject.classList.add("mainProject", "project");
    mainProject.textContent = "HOME";
    todayProject.classList.add("todayProject", "project");
    todayProject.textContent = "TODAY";
    defaultProjects.appendChild(mainProject);
    defaultProjects.appendChild(todayProject);
    const userProjects = document.createElement("div");
    userProjects.classList.add("userProjects");
    const userProjectTitle = document.createElement("p");
    userProjectTitle.innerText = "My Projects";
    userProjects.appendChild(userProjectTitle);
    const addProjectBtn = document.createElement("button");
    addProjectBtn.classList.add("addProjectBtn");
    addProjectBtn.textContent = "+ Add Project";
    userProjects.appendChild(addProjectBtn);
    projectDisplay.appendChild(userProjects);
    // REMEMBER TO CREATE A NEW MODULE TO DISPLAY USER-CREATED PROJECTS

    //Create main display
    const itemDisplay = document.createElement("div");
    itemDisplay.setAttribute("id", "item-display");
    itemDisplay.classList.add("item-display");
    const toDoDisplay = document.createElement("div");
    toDoDisplay.classList.add("to-do-display");
    const toDoBlock = document.createElement("div");
    toDoBlock.classList.add("to-do-block");

    // Create a form to fill for the todo
    const toDoForm = document.createElement("form");
    toDoForm.classList.add("to-do-form");
    const toDoTitleLabel = document.createElement("label");
    toDoTitleLabel.setAttribute("for", "task-title");
    toDoTitleLabel.textContent = "Title:"
    const toDoTitle = document.createElement("input");
    toDoTitle.setAttribute("type", "text");
    toDoTitle.setAttribute("name", "task-title");
    toDoTitle.setAttribute("id", "task-title");
    const toDoDateLabel = document.createElement("label");
    toDoDateLabel.setAttribute("for", "task-date");
    toDoDateLabel.textContent = "Date:"
    const toDoDate = document.createElement("input");
    toDoDate.setAttribute("type", "text");
    toDoDate.setAttribute("name", "task-date");
    toDoDate.setAttribute("id", "task-date");
    const submitToDoBtn = document.createElement("input");
    submitToDoBtn.setAttribute("type", "submit");
    submitToDoBtn.setAttribute("name", "submit");
    submitToDoBtn.setAttribute("id", "submit");
    submitToDoBtn.textContent = "Submit";
    
    const addToDoBtn = document.createElement("button");
    addToDoBtn.classList.add("addToDoBtn");
    addToDoBtn.textContent = "+ New to-do";

    const taskArea = document.createElement("div");
    taskArea.classList.add("task-area");
    taskArea.setAttribute("id", "taskArea");

    toDoBlock.appendChild(toDoForm);
    toDoDisplay.appendChild(addToDoBtn);
    toDoDisplay.appendChild(toDoBlock);
    itemDisplay.appendChild(toDoDisplay);
    itemDisplay.appendChild(taskArea);
    container.appendChild(projectDisplay);
    container.appendChild(itemDisplay);
    body.appendChild(container);

    toDoForm.appendChild(toDoTitleLabel);
    toDoForm.appendChild(toDoTitle);
    toDoForm.appendChild(toDoDateLabel);
    toDoForm.appendChild(toDoDate);
    toDoForm.appendChild(submitToDoBtn);

    addToDoBtn.addEventListener("click", function() {
        if (toDoBlock.style.display == "inline") {
            toDoBlock.style.display = "none";
        }
        else {
            toDoBlock.style.display = "inline";
        }
    })

    submitToDoBtn.addEventListener("click", function(event) {
        event.preventDefault();
        let title = document.getElementById("task-title");
        let date = document.getElementById("task-date");
        createToDo(title.value, date.value);
        title.value = "";
        date.value = "";
        updatePage(taskArea);
        console.log(taskArea);
        console.log(itemDisplay)
    })


    updatePage(taskArea);
}




export {structure}