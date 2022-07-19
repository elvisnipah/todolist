import {projectsArray} from "./project-controller.js"
let allToDoList = [];

function Task(title, date, project) {
    this.title = title,
    this.date = date,
    this.project = project
}


function createToDo(title, date, project) {
    let toDo = new Task(title, date, project);
    allToDoList.push(toDo);
    updateProject();
//     console.log(`Projects array: ${JSON.stringify(projectsArray)}`);
//     console.log(allToDoList);
// }
}

function updateProject() {
    for (let i = 0; i < projectsArray.length; i++) {
        projectsArray[i].tasks = [];
        for (let j = 0; j < allToDoList.length; j++) {
            if (allToDoList[j].project == projectsArray[i].name) {
                projectsArray[i].tasks.push(allToDoList[j])
                // console.log("found one");
                // console.log(allToDoList)
            }
        }
    }
}

function updatePage(page, project) {
    page.textContent = "";
    for(let i = 0; i < allToDoList.length; i++) {
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
            document.getElementById(deleteBtn.dataset.position).remove();
            for (let j = 0; j < allToDoList[i].length; j++) {
                if (j == deleteBtn.dataset.position) {
                    allToDoList[i].splice(j, 1);
                }
            };
            updatePage(page);
            updateProject();
        });
    }
}

export {createToDo, updatePage, allToDoList, updateProject}

