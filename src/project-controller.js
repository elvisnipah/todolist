import {updatePage} from "./to-do-controller.js"
let projectsArray = []

function Project(name) {
    this.name = name,
    this.tasks = []
}

function createNewProject(name) {
    let project = new Project(name);
    projectsArray.push(project);
    // console.log(projectsArray);
}

createNewProject("Home");

function updateProjectsDOM(area) {
    //updateProjects();
    area.textContent = "";
    for(let i = 0; i < projectsArray.length; i++) {
        let projectDiv = document.createElement("div");
        projectDiv.setAttribute("id", projectsArray[i].name);
        projectDiv.classList.add("project");
        projectDiv.textContent = projectsArray[i].name;
        projectDiv.addEventListener("click", function() {
            console.log(projectsArray[i].name);
            // page.textContent = "LOL";
            // updatePage(page, projectsArray[i].name)
        });
        
        area.appendChild(projectDiv);
    }
}

export {projectsArray, createNewProject, updateProjectsDOM}