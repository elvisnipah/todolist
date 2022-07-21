import {createToDo, updatePage, updateProject} from "./to-do-controller.js";
import {projectsArray, createNewProject, updateProjectsDOM} from "./project-controller.js";

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
    projectDisplay.classList.add("projects-display");

    const projectArea = document.createElement("div");
    projectArea.classList.add("project-area");
    projectArea.setAttribute("id", "project-area");
    projectDisplay.appendChild(projectArea);
    

    const addProjectBtn = document.createElement("button");
    addProjectBtn.classList.add("addProjectBtn");
    addProjectBtn.textContent = "+ Add Project";
    projectDisplay.appendChild(addProjectBtn);

    //Create form for project creation
    const projectForm = document.createElement("form");
    projectForm.classList.add("project-form");

    const projectTitleLabel = document.createElement("label");
    projectTitleLabel.setAttribute("for", "project-title");
    projectTitleLabel.textContent = "Project Name:"

    const projectTitle = document.createElement("input");
    projectTitle.setAttribute("type", "text");
    projectTitle.setAttribute("name", "project-title");
    projectTitle.setAttribute("id", "project-title");

    const submitProjectBtn = document.createElement("input");
    submitProjectBtn.setAttribute("type", "submit");
    submitProjectBtn.setAttribute("name", "add-project");
    submitProjectBtn.setAttribute("id", "add-project");
    submitProjectBtn.setAttribute("value", "Add");

    projectForm.appendChild(projectTitleLabel);
    projectForm.appendChild(projectTitle);
    projectForm.appendChild(submitProjectBtn);
    projectDisplay.appendChild(projectForm);

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
    toDoTitleLabel.textContent = "Description:"

    const toDoTitle = document.createElement("input");
    toDoTitle.setAttribute("type", "text");
    toDoTitle.setAttribute("name", "task-title");
    toDoTitle.setAttribute("id", "task-title");

    const toDoDateLabel = document.createElement("label");
    toDoDateLabel.setAttribute("for", "task-date");
    toDoDateLabel.textContent = "Date:"

    const toDoDate = document.createElement("input");
    toDoDate.setAttribute("type", "date");
    toDoDate.setAttribute("name", "task-date");
    toDoDate.setAttribute("id", "task-date");

    const projectSelector = document.createElement("select");
    projectSelector.setAttribute("name", "projectSelector");
    projectSelector.setAttribute("id", "projectSelector");
    function updateSelect() {
        projectSelector.textContent = "";
        for(let i = 0; i < projectsArray.length; i++){
            let option = document.createElement("option");
            option.setAttribute("value", projectsArray[i].name);
            option.textContent = projectsArray[i].name;
            projectSelector.appendChild(option);
        }
    }
    updateSelect();
    
    
    const submitToDoBtn = document.createElement("input");
    submitToDoBtn.setAttribute("type", "submit");
    submitToDoBtn.setAttribute("name", "submit");
    submitToDoBtn.setAttribute("id", "submit");
    submitToDoBtn.setAttribute("value", "Add");
    
    const addToDoBtn = document.createElement("button");
    addToDoBtn.classList.add("addToDoBtn");
    addToDoBtn.textContent = "+ New to-do";

    const taskArea = document.createElement("div");
    taskArea.classList.add("task-area");
    taskArea.setAttribute("id", "task-area");

    updateProjectsDOM(projectArea, taskArea);

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
    toDoForm.appendChild(projectSelector);
    toDoForm.appendChild(submitToDoBtn);

    addProjectBtn.addEventListener("click", function() {
        console.log("working")
        if (projectForm.style.display == "flex") {
            projectForm.style.display = "none";
        }
        else {
            projectForm.style.display = "flex";
        }
    });

    submitProjectBtn.addEventListener("click", function(event) {
        event.preventDefault();
        let name = document.getElementById("project-title");
        createNewProject(name.value);
        name.value = "";
        updateProjectsDOM(projectArea, taskArea);
        projectForm.style.display = "none";
        updateSelect();
    });

    addToDoBtn.addEventListener("click", function() {
        if (toDoBlock.style.display == "inline") {
            toDoBlock.style.display = "none";
        }
        else {
            toDoBlock.style.display = "inline";
        }
    });

    submitToDoBtn.addEventListener("click", function(event) {
        event.preventDefault();
        let title = document.getElementById("task-title");
        let date = document.getElementById("task-date");
        let selectedProject = document.getElementById("projectSelector")
        createToDo(title.value, date.value, selectedProject.value);
        console.log(date.value)
        title.value = "";
        date.value = "";
        updatePage(taskArea);
    });

    updatePage(taskArea);
}

export {structure}