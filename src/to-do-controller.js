let toDoList = [];

function Task(title, date) {
    this.title = title,
    this.date = date
}


function createToDo(title, date) {
    let toDo = new Task(title, date);
    toDoList.push(toDo);
    console.log(toDoList);
}

function updatePage(page) {
    page.textContent = "";
    for(let i = 0; i < toDoList.length; i++) {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task-div")
        taskDiv.setAttribute("id", i);
        let titleOutput = document.createElement("p");
        titleOutput.textContent = toDoList[i].title;
        let dateOutput = document.createElement("p");
        dateOutput.textContent = toDoList[i].date;
        let deleteBtn = document.createElement("button");
        deleteBtn.dataset.position = i;
        deleteBtn.textContent = "Delete";
        taskDiv.appendChild(titleOutput);
        taskDiv.appendChild(dateOutput);
        taskDiv.appendChild(deleteBtn);
        page.appendChild(taskDiv);

        deleteBtn.addEventListener("click", function() {
            document.getElementById(deleteBtn.dataset.position).remove();
            for (let j = 0; j < toDoList.length; j++) {
                if (j == deleteBtn.dataset.position) {
                    toDoList.splice(j, 1);
                }
            }
            updatePage(page);
        });

    }
}

export {createToDo, updatePage}

