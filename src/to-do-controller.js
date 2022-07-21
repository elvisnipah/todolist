import { projectsArray, addProjectLocalStorage } from './project-controller';

let allToDoList;
if (!localStorage.getItem('toDoList')) {
  allToDoList = [];
} else {
  allToDoList = JSON.parse(localStorage.getItem('toDoList'));
}

// let allToDoList = [];

function Task(title, date, project) {
  (this.title = title), (this.date = date), (this.project = project);
}

function addToDoLocalStorage() {
  localStorage.setItem('toDoList', JSON.stringify(allToDoList));
}

function updateProject() {
  for (let i = 0; i < projectsArray.length; i++) {
    projectsArray[i].tasks = [];
    for (let j = 0; j < allToDoList.length; j++) {
      if (allToDoList[j].project == projectsArray[i].name) {
        projectsArray[i].tasks.push(allToDoList[j]);
        addProjectLocalStorage();
      }
    }
  }
}

function createToDo(title, date, project) {
  const toDo = new Task(title, date, project);
  allToDoList.push(toDo);
  addToDoLocalStorage();
  updateProject();
}

/**
 * This function takes in a page as a parameter and updates the page with the current to-do list
 * @param page - the page that you want to update
 */
function updatePage(page) {
  page.textContent = '';
  for (let i = 0; i < allToDoList.length; i++) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-div');
    taskDiv.setAttribute('id', i);
    const titleOutput = document.createElement('p');
    titleOutput.textContent = allToDoList[i].title;
    const dateOutput = document.createElement('p');
    dateOutput.textContent = allToDoList[i].date;
    const deleteBtn = document.createElement('button');
    deleteBtn.dataset.position = i;
    deleteBtn.textContent = 'Delete';
    taskDiv.appendChild(titleOutput);
    taskDiv.appendChild(dateOutput);
    taskDiv.appendChild(deleteBtn);
    page.appendChild(taskDiv);

    deleteBtn.addEventListener('click', () => {
      document.getElementById(deleteBtn.dataset.position).remove();
      for (let j = 0; j < allToDoList.length; j++) {
        if (j == deleteBtn.dataset.position) {
          allToDoList.splice(j, 1);
          addToDoLocalStorage();
        }
      }
      updatePage(page);
      updateProject();
    });
  }
}

export {
  createToDo,
  updatePage,
  allToDoList,
  updateProject,
  addToDoLocalStorage,
};
