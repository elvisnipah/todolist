/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "structure": () => (/* binding */ structure)
/* harmony export */ });
/* harmony import */ var _to_do_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-controller */ "./src/to-do-controller.js");
/* harmony import */ var _project_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-controller */ "./src/project-controller.js");



function structure() {
  // Assign body DOM element to a variable
  const { body } = document;
  // Create the header and assign it a class
  const header = document.createElement("div");
  header.classList.add("header");
  header.innerText = "To Do List";
  body.appendChild(header);

  // Create container
  const container = document.createElement("div");
  container.classList.add("container");

  // Display on the left for projects
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

  // Create form for project creation
  const projectForm = document.createElement("form");
  projectForm.classList.add("project-form");

  const projectTitleLabel = document.createElement("label");
  projectTitleLabel.setAttribute("for", "project-title");
  projectTitleLabel.textContent = "Project Name:";

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

  // Create main display
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
  toDoTitleLabel.textContent = "Description:";

  const toDoTitle = document.createElement("input");
  toDoTitle.setAttribute("type", "text");
  toDoTitle.setAttribute("name", "task-title");
  toDoTitle.setAttribute("id", "task-title");

  const toDoDateLabel = document.createElement("label");
  toDoDateLabel.setAttribute("for", "task-date");
  toDoDateLabel.textContent = "Date:";

  const toDoDate = document.createElement("input");
  toDoDate.setAttribute("type", "date");
  toDoDate.setAttribute("name", "task-date");
  toDoDate.setAttribute("id", "task-date");

  /**
   * It creates a dropdown menu that contains all of the projects in the projectsArray
   */
  const projectSelector = document.createElement("select");
  projectSelector.setAttribute("name", "projectSelector");
  projectSelector.setAttribute("id", "projectSelector");
  function updateSelect() {
    projectSelector.textContent = "";
    for (let i = 0; i < _project_controller__WEBPACK_IMPORTED_MODULE_1__.projectsArray.length; i++) {
      const option = document.createElement("option");
      option.setAttribute("value", _project_controller__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].name);
      option.textContent = _project_controller__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].name;
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

  (0,_project_controller__WEBPACK_IMPORTED_MODULE_1__.updateProjectsDOM)(projectArea, taskArea);

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

  /* Adding an event listener to the addProjectBtn. When the button is clicked, it checks to see if the
  projectForm is displayed. If it is, it hides it. If it is not, it displays it. */
  addProjectBtn.addEventListener("click", () => {
    if (projectForm.style.display === "flex") {
      projectForm.style.display = "none";
    } else {
      projectForm.style.display = "flex";
    }
  });

  /* Adding an event listener to the submit button. When the button is clicked, it prevents the
   default action of the button, which is to refresh the page. It then gets the value of the input
   field and passes it to the createNewProject function. It then clears the input field and updates
   the DOM. */
  submitProjectBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.getElementById("project-title");
    (0,_project_controller__WEBPACK_IMPORTED_MODULE_1__.createNewProject)(name.value);
    name.value = "";
    (0,_project_controller__WEBPACK_IMPORTED_MODULE_1__.updateProjectsDOM)(projectArea, taskArea);
    projectForm.style.display = "none";
    updateSelect();
  });

  addToDoBtn.addEventListener("click", () => {
    if (toDoBlock.style.display === "inline") {
      toDoBlock.style.display = "none";
    } else {
      toDoBlock.style.display = "inline";
    }
  });

  submitToDoBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("task-title");
    const date = document.getElementById("task-date");
    const selectedProject = document.getElementById("projectSelector");
    (0,_to_do_controller__WEBPACK_IMPORTED_MODULE_0__.createToDo)(title.value, date.value, selectedProject.value);
    title.value = "";
    date.value = "";
    (0,_to_do_controller__WEBPACK_IMPORTED_MODULE_0__.updatePage)(taskArea);
  });

  (0,_to_do_controller__WEBPACK_IMPORTED_MODULE_0__.updatePage)(taskArea);
}




/***/ }),

/***/ "./src/project-controller.js":
/*!***********************************!*\
  !*** ./src/project-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectLocalStorage": () => (/* binding */ addProjectLocalStorage),
/* harmony export */   "createNewProject": () => (/* binding */ createNewProject),
/* harmony export */   "projectsArray": () => (/* binding */ projectsArray),
/* harmony export */   "updateProjectsDOM": () => (/* binding */ updateProjectsDOM)
/* harmony export */ });
/* harmony import */ var _to_do_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-controller */ "./src/to-do-controller.js");


let projectsArray;

if (!localStorage.getItem('projectsArray')) {
  projectsArray = [];
} else {
  projectsArray = JSON.parse(localStorage.getItem('projectsArray'));
}

function addProjectLocalStorage() {
  localStorage.setItem('projectsArray', JSON.stringify(projectsArray));
}

/**
 * The function getProjectLocalStorage() is called, which calls the localStorage.getItem() method,
 * which returns the value of the projectsArray key in the localStorage object
 */
function getProjectLocalStorage() {
  const storedProjects = localStorage.getItem('projectsArray');
  console.log(storedProjects);
}

function Project(name) {
  (this.name = name), (this.tasks = []);
}

function createNewProject(name) {
  const project = new Project(name);
  projectsArray.push(project);
  addProjectLocalStorage();
  getProjectLocalStorage();
}

function updatePageWithProject(event, page) {
  page.textContent = '';
  for (let i = 0; i < _to_do_controller__WEBPACK_IMPORTED_MODULE_0__.allToDoList.length; i++) {
    if (_to_do_controller__WEBPACK_IMPORTED_MODULE_0__.allToDoList[i].project == event.target.id) {
      const taskDiv = document.createElement('div');
      taskDiv.classList.add('task-div');
      taskDiv.setAttribute('id', i);
      const titleOutput = document.createElement('p');
      titleOutput.textContent = _to_do_controller__WEBPACK_IMPORTED_MODULE_0__.allToDoList[i].title;
      const dateOutput = document.createElement('p');
      dateOutput.textContent = _to_do_controller__WEBPACK_IMPORTED_MODULE_0__.allToDoList[i].date;
      const deleteBtn = document.createElement('button');
      deleteBtn.dataset.position = i;
      deleteBtn.textContent = 'Delete';
      taskDiv.appendChild(titleOutput);
      taskDiv.appendChild(dateOutput);
      taskDiv.appendChild(deleteBtn);
      page.appendChild(taskDiv);

      deleteBtn.addEventListener('click', () => {
        console.log(_to_do_controller__WEBPACK_IMPORTED_MODULE_0__.allToDoList);
        document.getElementById(deleteBtn.dataset.position).remove();
        for (let j = 0; j < _to_do_controller__WEBPACK_IMPORTED_MODULE_0__.allToDoList.length; j++) {
          if (j == deleteBtn.dataset.position) {
            _to_do_controller__WEBPACK_IMPORTED_MODULE_0__.allToDoList.splice(j, 1);
            (0,_to_do_controller__WEBPACK_IMPORTED_MODULE_0__.addToDoLocalStorage)();
          }
        }
        (0,_to_do_controller__WEBPACK_IMPORTED_MODULE_0__.updatePage)(page);
        (0,_to_do_controller__WEBPACK_IMPORTED_MODULE_0__.updateProject)();
        updatePageWithProject(event, page);
      });
    }
  }
}

function updateProjectsDOM(area, page) {
  area.textContent = '';
  for (let i = 0; i < projectsArray.length; i += 1) {
    const projectDiv = document.createElement('div');
    projectDiv.setAttribute('id', projectsArray[i].name);
    projectDiv.classList.add('project');
    projectDiv.textContent = projectsArray[i].name;
    projectDiv.addEventListener('click', () => {
      console.log(projectsArray[i].name);
      updatePageWithProject(event, page);
    });

    area.appendChild(projectDiv);
  }
}




/***/ }),

/***/ "./src/to-do-controller.js":
/*!*********************************!*\
  !*** ./src/to-do-controller.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToDoLocalStorage": () => (/* binding */ addToDoLocalStorage),
/* harmony export */   "allToDoList": () => (/* binding */ allToDoList),
/* harmony export */   "createToDo": () => (/* binding */ createToDo),
/* harmony export */   "updatePage": () => (/* binding */ updatePage),
/* harmony export */   "updateProject": () => (/* binding */ updateProject)
/* harmony export */ });
/* harmony import */ var _project_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-controller */ "./src/project-controller.js");


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
  for (let i = 0; i < _project_controller__WEBPACK_IMPORTED_MODULE_0__.projectsArray.length; i++) {
    _project_controller__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].tasks = [];
    for (let j = 0; j < allToDoList.length; j++) {
      if (allToDoList[j].project == _project_controller__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].name) {
        _project_controller__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].tasks.push(allToDoList[j]);
        (0,_project_controller__WEBPACK_IMPORTED_MODULE_0__.addProjectLocalStorage)();
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");


(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.structure)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhO0FBQ2pELFFBQVEsOERBQWE7QUFDckIsUUFBUSwyRUFBc0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLHdCQUF3QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQVFFOzs7Ozs7O1VDaEZGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7O0FBRXRDLG1EQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG8tZG8tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRvRG8sIHVwZGF0ZVBhZ2UgfSBmcm9tIFwiLi90by1kby1jb250cm9sbGVyXCI7XG5pbXBvcnQge1xuICBwcm9qZWN0c0FycmF5LFxuICBjcmVhdGVOZXdQcm9qZWN0LFxuICB1cGRhdGVQcm9qZWN0c0RPTSxcbn0gZnJvbSBcIi4vcHJvamVjdC1jb250cm9sbGVyXCI7XG5cbmZ1bmN0aW9uIHN0cnVjdHVyZSgpIHtcbiAgLy8gQXNzaWduIGJvZHkgRE9NIGVsZW1lbnQgdG8gYSB2YXJpYWJsZVxuICBjb25zdCB7IGJvZHkgfSA9IGRvY3VtZW50O1xuICAvLyBDcmVhdGUgdGhlIGhlYWRlciBhbmQgYXNzaWduIGl0IGEgY2xhc3NcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIGhlYWRlci5pbm5lclRleHQgPSBcIlRvIERvIExpc3RcIjtcbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIC8vIENyZWF0ZSBjb250YWluZXJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbiAgLy8gRGlzcGxheSBvbiB0aGUgbGVmdCBmb3IgcHJvamVjdHNcbiAgY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtZGlzcGxheVwiKTtcblxuICBjb25zdCBwcm9qZWN0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RBcmVhLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWFyZWFcIik7XG4gIHByb2plY3RBcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1hcmVhXCIpO1xuICBwcm9qZWN0RGlzcGxheS5hcHBlbmRDaGlsZChwcm9qZWN0QXJlYSk7XG5cbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImFkZFByb2plY3RCdG5cIik7XG4gIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIisgQWRkIFByb2plY3RcIjtcbiAgcHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG5cbiAgLy8gQ3JlYXRlIGZvcm0gZm9yIHByb2plY3QgY3JlYXRpb25cbiAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZm9ybVwiKTtcblxuICBjb25zdCBwcm9qZWN0VGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJvamVjdFRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdC10aXRsZVwiKTtcbiAgcHJvamVjdFRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTmFtZTpcIjtcblxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0LXRpdGxlXCIpO1xuICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LXRpdGxlXCIpO1xuXG4gIGNvbnN0IHN1Ym1pdFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdFByb2plY3RCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0UHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiYWRkLXByb2plY3RcIik7XG4gIHN1Ym1pdFByb2plY3RCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvamVjdFwiKTtcbiAgc3VibWl0UHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkFkZFwiKTtcblxuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVMYWJlbCk7XG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFByb2plY3RCdG4pO1xuICBwcm9qZWN0RGlzcGxheS5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG5cbiAgLy8gQ3JlYXRlIG1haW4gZGlzcGxheVxuICBjb25zdCBpdGVtRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1EaXNwbGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaXRlbS1kaXNwbGF5XCIpO1xuICBpdGVtRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiaXRlbS1kaXNwbGF5XCIpO1xuICBjb25zdCB0b0RvRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvRG9EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJ0by1kby1kaXNwbGF5XCIpO1xuICBjb25zdCB0b0RvQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b0RvQmxvY2suY2xhc3NMaXN0LmFkZChcInRvLWRvLWJsb2NrXCIpO1xuXG4gIC8vIENyZWF0ZSBhIGZvcm0gdG8gZmlsbCBmb3IgdGhlIHRvZG9cbiAgY29uc3QgdG9Eb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgdG9Eb0Zvcm0uY2xhc3NMaXN0LmFkZChcInRvLWRvLWZvcm1cIik7XG5cbiAgY29uc3QgdG9Eb1RpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRvRG9UaXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stdGl0bGVcIik7XG4gIHRvRG9UaXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIjtcblxuICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRvRG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdG9Eb1RpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLXRpdGxlXCIpO1xuICB0b0RvVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXRpdGxlXCIpO1xuXG4gIGNvbnN0IHRvRG9EYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRvRG9EYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1kYXRlXCIpO1xuICB0b0RvRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEYXRlOlwiO1xuXG4gIGNvbnN0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0b0RvRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgdG9Eb0RhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stZGF0ZVwiKTtcbiAgdG9Eb0RhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWRhdGVcIik7XG5cbiAgLyoqXG4gICAqIEl0IGNyZWF0ZXMgYSBkcm9wZG93biBtZW51IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBwcm9qZWN0cyBpbiB0aGUgcHJvamVjdHNBcnJheVxuICAgKi9cbiAgY29uc3QgcHJvamVjdFNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJvamVjdFNlbGVjdG9yLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0U2VsZWN0b3JcIik7XG4gIHByb2plY3RTZWxlY3Rvci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RTZWxlY3RvclwiKTtcbiAgZnVuY3Rpb24gdXBkYXRlU2VsZWN0KCkge1xuICAgIHByb2plY3RTZWxlY3Rvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByb2plY3RzQXJyYXlbaV0ubmFtZSk7XG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0c0FycmF5W2ldLm5hbWU7XG4gICAgICBwcm9qZWN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlU2VsZWN0KCk7XG5cbiAgY29uc3Qgc3VibWl0VG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc3VibWl0VG9Eb0J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXRUb0RvQnRuLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzdWJtaXRcIik7XG4gIHN1Ym1pdFRvRG9CdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJtaXRcIik7XG4gIHN1Ym1pdFRvRG9CdG4uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJBZGRcIik7XG5cbiAgY29uc3QgYWRkVG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRvRG9CdG4uY2xhc3NMaXN0LmFkZChcImFkZFRvRG9CdG5cIik7XG4gIGFkZFRvRG9CdG4udGV4dENvbnRlbnQgPSBcIisgTmV3IHRvLWRvXCI7XG5cbiAgY29uc3QgdGFza0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrQXJlYS5jbGFzc0xpc3QuYWRkKFwidGFzay1hcmVhXCIpO1xuICB0YXNrQXJlYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stYXJlYVwiKTtcblxuICB1cGRhdGVQcm9qZWN0c0RPTShwcm9qZWN0QXJlYSwgdGFza0FyZWEpO1xuXG4gIHRvRG9CbG9jay5hcHBlbmRDaGlsZCh0b0RvRm9ybSk7XG4gIHRvRG9EaXNwbGF5LmFwcGVuZENoaWxkKGFkZFRvRG9CdG4pO1xuICB0b0RvRGlzcGxheS5hcHBlbmRDaGlsZCh0b0RvQmxvY2spO1xuICBpdGVtRGlzcGxheS5hcHBlbmRDaGlsZCh0b0RvRGlzcGxheSk7XG4gIGl0ZW1EaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tBcmVhKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXNwbGF5KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EaXNwbGF5KTtcbiAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHRvRG9UaXRsZUxhYmVsKTtcbiAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb1RpdGxlKTtcbiAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb0RhdGVMYWJlbCk7XG4gIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHRvRG9EYXRlKTtcbiAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdG9yKTtcbiAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0VG9Eb0J0bik7XG5cbiAgLyogQWRkaW5nIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBhZGRQcm9qZWN0QnRuLiBXaGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZCwgaXQgY2hlY2tzIHRvIHNlZSBpZiB0aGVcbiAgcHJvamVjdEZvcm0gaXMgZGlzcGxheWVkLiBJZiBpdCBpcywgaXQgaGlkZXMgaXQuIElmIGl0IGlzIG5vdCwgaXQgZGlzcGxheXMgaXQuICovXG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAocHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJmbGV4XCIpIHtcbiAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbiAgfSk7XG5cbiAgLyogQWRkaW5nIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBzdWJtaXQgYnV0dG9uLiBXaGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZCwgaXQgcHJldmVudHMgdGhlXG4gICBkZWZhdWx0IGFjdGlvbiBvZiB0aGUgYnV0dG9uLCB3aGljaCBpcyB0byByZWZyZXNoIHRoZSBwYWdlLiBJdCB0aGVuIGdldHMgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dFxuICAgZmllbGQgYW5kIHBhc3NlcyBpdCB0byB0aGUgY3JlYXRlTmV3UHJvamVjdCBmdW5jdGlvbi4gSXQgdGhlbiBjbGVhcnMgdGhlIGlucHV0IGZpZWxkIGFuZCB1cGRhdGVzXG4gICB0aGUgRE9NLiAqL1xuICBzdWJtaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdGl0bGVcIik7XG4gICAgY3JlYXRlTmV3UHJvamVjdChuYW1lLnZhbHVlKTtcbiAgICBuYW1lLnZhbHVlID0gXCJcIjtcbiAgICB1cGRhdGVQcm9qZWN0c0RPTShwcm9qZWN0QXJlYSwgdGFza0FyZWEpO1xuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB1cGRhdGVTZWxlY3QoKTtcbiAgfSk7XG5cbiAgYWRkVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICh0b0RvQmxvY2suc3R5bGUuZGlzcGxheSA9PT0gXCJpbmxpbmVcIikge1xuICAgICAgdG9Eb0Jsb2NrLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9Eb0Jsb2NrLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgIH1cbiAgfSk7XG5cbiAgc3VibWl0VG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZVwiKTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRhdGVcIik7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0U2VsZWN0b3JcIik7XG4gICAgY3JlYXRlVG9Ebyh0aXRsZS52YWx1ZSwgZGF0ZS52YWx1ZSwgc2VsZWN0ZWRQcm9qZWN0LnZhbHVlKTtcbiAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgZGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgdXBkYXRlUGFnZSh0YXNrQXJlYSk7XG4gIH0pO1xuXG4gIHVwZGF0ZVBhZ2UodGFza0FyZWEpO1xufVxuXG5leHBvcnQgeyBzdHJ1Y3R1cmUgfTtcbiIsImltcG9ydCB7XG4gIGFsbFRvRG9MaXN0LFxuICB1cGRhdGVQYWdlLFxuICB1cGRhdGVQcm9qZWN0LFxuICBhZGRUb0RvTG9jYWxTdG9yYWdlLFxufSBmcm9tICcuL3RvLWRvLWNvbnRyb2xsZXInO1xuXG5sZXQgcHJvamVjdHNBcnJheTtcblxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHNBcnJheScpKSB7XG4gIHByb2plY3RzQXJyYXkgPSBbXTtcbn0gZWxzZSB7XG4gIHByb2plY3RzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0FycmF5JykpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0TG9jYWxTdG9yYWdlKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNBcnJheScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyYXkpKTtcbn1cblxuLyoqXG4gKiBUaGUgZnVuY3Rpb24gZ2V0UHJvamVjdExvY2FsU3RvcmFnZSgpIGlzIGNhbGxlZCwgd2hpY2ggY2FsbHMgdGhlIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCkgbWV0aG9kLFxuICogd2hpY2ggcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHByb2plY3RzQXJyYXkga2V5IGluIHRoZSBsb2NhbFN0b3JhZ2Ugb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGdldFByb2plY3RMb2NhbFN0b3JhZ2UoKSB7XG4gIGNvbnN0IHN0b3JlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzQXJyYXknKTtcbiAgY29uc29sZS5sb2coc3RvcmVkUHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiBQcm9qZWN0KG5hbWUpIHtcbiAgKHRoaXMubmFtZSA9IG5hbWUpLCAodGhpcy50YXNrcyA9IFtdKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChuYW1lKSB7XG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgcHJvamVjdHNBcnJheS5wdXNoKHByb2plY3QpO1xuICBhZGRQcm9qZWN0TG9jYWxTdG9yYWdlKCk7XG4gIGdldFByb2plY3RMb2NhbFN0b3JhZ2UoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUGFnZVdpdGhQcm9qZWN0KGV2ZW50LCBwYWdlKSB7XG4gIHBhZ2UudGV4dENvbnRlbnQgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUb0RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhbGxUb0RvTGlzdFtpXS5wcm9qZWN0ID09IGV2ZW50LnRhcmdldC5pZCkge1xuICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdicpO1xuICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaSk7XG4gICAgICBjb25zdCB0aXRsZU91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHRpdGxlT3V0cHV0LnRleHRDb250ZW50ID0gYWxsVG9Eb0xpc3RbaV0udGl0bGU7XG4gICAgICBjb25zdCBkYXRlT3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgZGF0ZU91dHB1dC50ZXh0Q29udGVudCA9IGFsbFRvRG9MaXN0W2ldLmRhdGU7XG4gICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGRlbGV0ZUJ0bi5kYXRhc2V0LnBvc2l0aW9uID0gaTtcbiAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0aXRsZU91dHB1dCk7XG4gICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRhdGVPdXRwdXQpO1xuICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgcGFnZS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcblxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhhbGxUb0RvTGlzdCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlbGV0ZUJ0bi5kYXRhc2V0LnBvc2l0aW9uKS5yZW1vdmUoKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxUb0RvTGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGlmIChqID09IGRlbGV0ZUJ0bi5kYXRhc2V0LnBvc2l0aW9uKSB7XG4gICAgICAgICAgICBhbGxUb0RvTGlzdC5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgICBhZGRUb0RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVBhZ2UocGFnZSk7XG4gICAgICAgIHVwZGF0ZVByb2plY3QoKTtcbiAgICAgICAgdXBkYXRlUGFnZVdpdGhQcm9qZWN0KGV2ZW50LCBwYWdlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0c0RPTShhcmVhLCBwYWdlKSB7XG4gIGFyZWEudGV4dENvbnRlbnQgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKCdpZCcsIHByb2plY3RzQXJyYXlbaV0ubmFtZSk7XG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3RzQXJyYXlbaV0ubmFtZTtcbiAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheVtpXS5uYW1lKTtcbiAgICAgIHVwZGF0ZVBhZ2VXaXRoUHJvamVjdChldmVudCwgcGFnZSk7XG4gICAgfSk7XG5cbiAgICBhcmVhLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIHByb2plY3RzQXJyYXksXG4gIGNyZWF0ZU5ld1Byb2plY3QsXG4gIHVwZGF0ZVByb2plY3RzRE9NLFxuICBhZGRQcm9qZWN0TG9jYWxTdG9yYWdlLFxufTtcbiIsImltcG9ydCB7IHByb2plY3RzQXJyYXksIGFkZFByb2plY3RMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL3Byb2plY3QtY29udHJvbGxlcic7XG5cbmxldCBhbGxUb0RvTGlzdDtcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0JykpIHtcbiAgYWxsVG9Eb0xpc3QgPSBbXTtcbn0gZWxzZSB7XG4gIGFsbFRvRG9MaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSk7XG59XG5cbi8vIGxldCBhbGxUb0RvTGlzdCA9IFtdO1xuXG5mdW5jdGlvbiBUYXNrKHRpdGxlLCBkYXRlLCBwcm9qZWN0KSB7XG4gICh0aGlzLnRpdGxlID0gdGl0bGUpLCAodGhpcy5kYXRlID0gZGF0ZSksICh0aGlzLnByb2plY3QgPSBwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gYWRkVG9Eb0xvY2FsU3RvcmFnZSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkoYWxsVG9Eb0xpc3QpKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdCgpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdHNBcnJheVtpXS50YXNrcyA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsVG9Eb0xpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChhbGxUb0RvTGlzdFtqXS5wcm9qZWN0ID09IHByb2plY3RzQXJyYXlbaV0ubmFtZSkge1xuICAgICAgICBwcm9qZWN0c0FycmF5W2ldLnRhc2tzLnB1c2goYWxsVG9Eb0xpc3Rbal0pO1xuICAgICAgICBhZGRQcm9qZWN0TG9jYWxTdG9yYWdlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvRG8odGl0bGUsIGRhdGUsIHByb2plY3QpIHtcbiAgY29uc3QgdG9EbyA9IG5ldyBUYXNrKHRpdGxlLCBkYXRlLCBwcm9qZWN0KTtcbiAgYWxsVG9Eb0xpc3QucHVzaCh0b0RvKTtcbiAgYWRkVG9Eb0xvY2FsU3RvcmFnZSgpO1xuICB1cGRhdGVQcm9qZWN0KCk7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiB0YWtlcyBpbiBhIHBhZ2UgYXMgYSBwYXJhbWV0ZXIgYW5kIHVwZGF0ZXMgdGhlIHBhZ2Ugd2l0aCB0aGUgY3VycmVudCB0by1kbyBsaXN0XG4gKiBAcGFyYW0gcGFnZSAtIHRoZSBwYWdlIHRoYXQgeW91IHdhbnQgdG8gdXBkYXRlXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVBhZ2UocGFnZSkge1xuICBwYWdlLnRleHRDb250ZW50ID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVG9Eb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdicpO1xuICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGkpO1xuICAgIGNvbnN0IHRpdGxlT3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlT3V0cHV0LnRleHRDb250ZW50ID0gYWxsVG9Eb0xpc3RbaV0udGl0bGU7XG4gICAgY29uc3QgZGF0ZU91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkYXRlT3V0cHV0LnRleHRDb250ZW50ID0gYWxsVG9Eb0xpc3RbaV0uZGF0ZTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4uZGF0YXNldC5wb3NpdGlvbiA9IGk7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0aXRsZU91dHB1dCk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkYXRlT3V0cHV0KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlbGV0ZUJ0bi5kYXRhc2V0LnBvc2l0aW9uKS5yZW1vdmUoKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsVG9Eb0xpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKGogPT0gZGVsZXRlQnRuLmRhdGFzZXQucG9zaXRpb24pIHtcbiAgICAgICAgICBhbGxUb0RvTGlzdC5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgYWRkVG9Eb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB1cGRhdGVQYWdlKHBhZ2UpO1xuICAgICAgdXBkYXRlUHJvamVjdCgpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVRvRG8sXG4gIHVwZGF0ZVBhZ2UsXG4gIGFsbFRvRG9MaXN0LFxuICB1cGRhdGVQcm9qZWN0LFxuICBhZGRUb0RvTG9jYWxTdG9yYWdlLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc3RydWN0dXJlIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuXG5zdHJ1Y3R1cmUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==