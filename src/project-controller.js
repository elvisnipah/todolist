import {allToDoList, updatePage, updateProject, addToDoLocalStorage} from "./to-do-controller.js"

let projectsArray;

if (!localStorage.getItem("projectsArray")) {
    projectsArray = [];
}
else {
    projectsArray = JSON.parse(localStorage.getItem("projectsArray"));
}

function addProjectLocalStorage() {
    localStorage.setItem("projectsArray", JSON.stringify(projectsArray))
}

function getProjectLocalStorage() {
    let storedProjects = localStorage.getItem("projectsArray");
    console.log(storedProjects);
}


function Project(name) {
    this.name = name,
    this.tasks = []
}

function createNewProject(name) {
    let project = new Project(name);
    projectsArray.push(project);
    addProjectLocalStorage();
    getProjectLocalStorage();
}

function updateProjectsDOM(area, page) {
    area.textContent = "";
    for(let i = 0; i < projectsArray.length; i++) {
        let projectDiv = document.createElement("div");
        projectDiv.setAttribute("id", projectsArray[i].name);
        projectDiv.classList.add("project");
        projectDiv.textContent = projectsArray[i].name;
        projectDiv.addEventListener("click", function() {
            console.log(projectsArray[i].name);
            updatePageWithProject(event, page)
        });
        
        area.appendChild(projectDiv);
    }
}

function updatePageWithProject(event, page) {
    page.textContent = "";
    for(let i = 0; i < allToDoList.length; i++) {
        if (allToDoList[i].project == event.target.id) {
            let taskDiv = document.createElement("div");
            taskDiv.classList.add("task-div")
            taskDiv.setAttribute("id", i);
            let titleOutput = document.createElement("p");
            titleOutput.textContent = allToDoList[i].title;
            let dateOutput = document.createElement("p");
            dateOutput.textContent = allToDoList[i].date;
            let deleteBtn = document.createElement("button");
            deleteBtn.dataset.position = i;
            deleteBtn.textContent = "Delete";
            taskDiv.appendChild(titleOutput);
            taskDiv.appendChild(dateOutput);
            taskDiv.appendChild(deleteBtn);
            page.appendChild(taskDiv);

            deleteBtn.addEventListener("click", function() {
                console.log(allToDoList)
                document.getElementById(deleteBtn.dataset.position).remove();
                for (let j = 0; j < allToDoList.length; j++) {
                    if (j == deleteBtn.dataset.position) {
                        allToDoList.splice(j, 1);
                        addToDoLocalStorage();
                    }
                };
                updatePage(page);
                updateProject();
                updatePageWithProject(event, page)
            });
        }
        
    }
}

export {projectsArray, createNewProject, updateProjectsDOM, addProjectLocalStorage}