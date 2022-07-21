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

function Project(name) {
  (this.name = name), (this.tasks = []);
}

function createNewProject(name) {
  const project = new Project(name);
  projectsArray.push(project);
  addProjectLocalStorage();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0Isd0JBQXdCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBUUU7Ozs7Ozs7VUNoRkY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zQzs7QUFFdEMsbURBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90by1kby1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVG9EbywgdXBkYXRlUGFnZSB9IGZyb20gXCIuL3RvLWRvLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7XG4gIHByb2plY3RzQXJyYXksXG4gIGNyZWF0ZU5ld1Byb2plY3QsXG4gIHVwZGF0ZVByb2plY3RzRE9NLFxufSBmcm9tIFwiLi9wcm9qZWN0LWNvbnRyb2xsZXJcIjtcblxuZnVuY3Rpb24gc3RydWN0dXJlKCkge1xuICAvLyBBc3NpZ24gYm9keSBET00gZWxlbWVudCB0byBhIHZhcmlhYmxlXG4gIGNvbnN0IHsgYm9keSB9ID0gZG9jdW1lbnQ7XG4gIC8vIENyZWF0ZSB0aGUgaGVhZGVyIGFuZCBhc3NpZ24gaXQgYSBjbGFzc1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgaGVhZGVyLmlubmVyVGV4dCA9IFwiVG8gRG8gTGlzdFwiO1xuICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgLy8gQ3JlYXRlIGNvbnRhaW5lclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuICAvLyBEaXNwbGF5IG9uIHRoZSBsZWZ0IGZvciBwcm9qZWN0c1xuICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1kaXNwbGF5XCIpO1xuXG4gIGNvbnN0IHByb2plY3RBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdEFyZWEuY2xhc3NMaXN0LmFkZChcInByb2plY3QtYXJlYVwiKTtcbiAgcHJvamVjdEFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LWFyZWFcIik7XG4gIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKHByb2plY3RBcmVhKTtcblxuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkUHJvamVjdEJ0blwiKTtcbiAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiKyBBZGQgUHJvamVjdFwiO1xuICBwcm9qZWN0RGlzcGxheS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcblxuICAvLyBDcmVhdGUgZm9ybSBmb3IgcHJvamVjdCBjcmVhdGlvblxuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1mb3JtXCIpO1xuXG4gIGNvbnN0IHByb2plY3RUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwcm9qZWN0VGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0LXRpdGxlXCIpO1xuICBwcm9qZWN0VGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lOlwiO1xuXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3QtdGl0bGVcIik7XG4gIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtdGl0bGVcIik7XG5cbiAgY29uc3Qgc3VibWl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc3VibWl0UHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJhZGQtcHJvamVjdFwiKTtcbiAgc3VibWl0UHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC1wcm9qZWN0XCIpO1xuICBzdWJtaXRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQWRkXCIpO1xuXG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZUxhYmVsKTtcbiAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0UHJvamVjdEJ0bik7XG4gIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcblxuICAvLyBDcmVhdGUgbWFpbiBkaXNwbGF5XG4gIGNvbnN0IGl0ZW1EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbURpc3BsYXkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpdGVtLWRpc3BsYXlcIik7XG4gIGl0ZW1EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJpdGVtLWRpc3BsYXlcIik7XG4gIGNvbnN0IHRvRG9EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcInRvLWRvLWRpc3BsYXlcIik7XG4gIGNvbnN0IHRvRG9CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvRG9CbG9jay5jbGFzc0xpc3QuYWRkKFwidG8tZG8tYmxvY2tcIik7XG5cbiAgLy8gQ3JlYXRlIGEgZm9ybSB0byBmaWxsIGZvciB0aGUgdG9kb1xuICBjb25zdCB0b0RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICB0b0RvRm9ybS5jbGFzc0xpc3QuYWRkKFwidG8tZG8tZm9ybVwiKTtcblxuICBjb25zdCB0b0RvVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgdG9Eb1RpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay10aXRsZVwiKTtcbiAgdG9Eb1RpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOlwiO1xuXG4gIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdG9Eb1RpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0b0RvVGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stdGl0bGVcIik7XG4gIHRvRG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stdGl0bGVcIik7XG5cbiAgY29uc3QgdG9Eb0RhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgdG9Eb0RhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWRhdGVcIik7XG4gIHRvRG9EYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGU6XCI7XG5cbiAgY29uc3QgdG9Eb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRvRG9EYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICB0b0RvRGF0ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1kYXRlXCIpO1xuICB0b0RvRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stZGF0ZVwiKTtcblxuICAvKipcbiAgICogSXQgY3JlYXRlcyBhIGRyb3Bkb3duIG1lbnUgdGhhdCBjb250YWlucyBhbGwgb2YgdGhlIHByb2plY3RzIGluIHRoZSBwcm9qZWN0c0FycmF5XG4gICAqL1xuICBjb25zdCBwcm9qZWN0U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcm9qZWN0U2VsZWN0b3Iuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3RTZWxlY3RvclwiKTtcbiAgcHJvamVjdFNlbGVjdG9yLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdFNlbGVjdG9yXCIpO1xuICBmdW5jdGlvbiB1cGRhdGVTZWxlY3QoKSB7XG4gICAgcHJvamVjdFNlbGVjdG9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcHJvamVjdHNBcnJheVtpXS5uYW1lKTtcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RzQXJyYXlbaV0ubmFtZTtcbiAgICAgIHByb2plY3RTZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cbiAgfVxuICB1cGRhdGVTZWxlY3QoKTtcblxuICBjb25zdCBzdWJtaXRUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzdWJtaXRUb0RvQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHN1Ym1pdFRvRG9CdG4uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0VG9Eb0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0VG9Eb0J0bi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkFkZFwiKTtcblxuICBjb25zdCBhZGRUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVG9Eb0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkVG9Eb0J0blwiKTtcbiAgYWRkVG9Eb0J0bi50ZXh0Q29udGVudCA9IFwiKyBOZXcgdG8tZG9cIjtcblxuICBjb25zdCB0YXNrQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tBcmVhLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFyZWFcIik7XG4gIHRhc2tBcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1hcmVhXCIpO1xuXG4gIHVwZGF0ZVByb2plY3RzRE9NKHByb2plY3RBcmVhLCB0YXNrQXJlYSk7XG5cbiAgdG9Eb0Jsb2NrLmFwcGVuZENoaWxkKHRvRG9Gb3JtKTtcbiAgdG9Eb0Rpc3BsYXkuYXBwZW5kQ2hpbGQoYWRkVG9Eb0J0bik7XG4gIHRvRG9EaXNwbGF5LmFwcGVuZENoaWxkKHRvRG9CbG9jayk7XG4gIGl0ZW1EaXNwbGF5LmFwcGVuZENoaWxkKHRvRG9EaXNwbGF5KTtcbiAgaXRlbURpc3BsYXkuYXBwZW5kQ2hpbGQodGFza0FyZWEpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURpc3BsYXkpO1xuICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb1RpdGxlTGFiZWwpO1xuICB0b0RvRm9ybS5hcHBlbmRDaGlsZCh0b0RvVGl0bGUpO1xuICB0b0RvRm9ybS5hcHBlbmRDaGlsZCh0b0RvRGF0ZUxhYmVsKTtcbiAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb0RhdGUpO1xuICB0b0RvRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0b3IpO1xuICB0b0RvRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRUb0RvQnRuKTtcblxuICAvKiBBZGRpbmcgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGFkZFByb2plY3RCdG4uIFdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLCBpdCBjaGVja3MgdG8gc2VlIGlmIHRoZVxuICBwcm9qZWN0Rm9ybSBpcyBkaXNwbGF5ZWQuIElmIGl0IGlzLCBpdCBoaWRlcyBpdC4gSWYgaXQgaXMgbm90LCBpdCBkaXNwbGF5cyBpdC4gKi9cbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcImZsZXhcIikge1xuICAgICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfVxuICB9KTtcblxuICAvKiBBZGRpbmcgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHN1Ym1pdCBidXR0b24uIFdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLCBpdCBwcmV2ZW50cyB0aGVcbiAgIGRlZmF1bHQgYWN0aW9uIG9mIHRoZSBidXR0b24sIHdoaWNoIGlzIHRvIHJlZnJlc2ggdGhlIHBhZ2UuIEl0IHRoZW4gZ2V0cyB0aGUgdmFsdWUgb2YgdGhlIGlucHV0XG4gICBmaWVsZCBhbmQgcGFzc2VzIGl0IHRvIHRoZSBjcmVhdGVOZXdQcm9qZWN0IGZ1bmN0aW9uLiBJdCB0aGVuIGNsZWFycyB0aGUgaW5wdXQgZmllbGQgYW5kIHVwZGF0ZXNcbiAgIHRoZSBET00uICovXG4gIHN1Ym1pdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgICBjcmVhdGVOZXdQcm9qZWN0KG5hbWUudmFsdWUpO1xuICAgIG5hbWUudmFsdWUgPSBcIlwiO1xuICAgIHVwZGF0ZVByb2plY3RzRE9NKHByb2plY3RBcmVhLCB0YXNrQXJlYSk7XG4gICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHVwZGF0ZVNlbGVjdCgpO1xuICB9KTtcblxuICBhZGRUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHRvRG9CbG9jay5zdHlsZS5kaXNwbGF5ID09PSBcImlubGluZVwiKSB7XG4gICAgICB0b0RvQmxvY2suc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b0RvQmxvY2suc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgfVxuICB9KTtcblxuICBzdWJtaXRUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRpdGxlXCIpO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGF0ZVwiKTtcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RTZWxlY3RvclwiKTtcbiAgICBjcmVhdGVUb0RvKHRpdGxlLnZhbHVlLCBkYXRlLnZhbHVlLCBzZWxlY3RlZFByb2plY3QudmFsdWUpO1xuICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICBkYXRlLnZhbHVlID0gXCJcIjtcbiAgICB1cGRhdGVQYWdlKHRhc2tBcmVhKTtcbiAgfSk7XG5cbiAgdXBkYXRlUGFnZSh0YXNrQXJlYSk7XG59XG5cbmV4cG9ydCB7IHN0cnVjdHVyZSB9O1xuIiwiaW1wb3J0IHtcbiAgYWxsVG9Eb0xpc3QsXG4gIHVwZGF0ZVBhZ2UsXG4gIHVwZGF0ZVByb2plY3QsXG4gIGFkZFRvRG9Mb2NhbFN0b3JhZ2UsXG59IGZyb20gJy4vdG8tZG8tY29udHJvbGxlcic7XG5cbmxldCBwcm9qZWN0c0FycmF5O1xuXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0FycmF5JykpIHtcbiAgcHJvamVjdHNBcnJheSA9IFtdO1xufSBlbHNlIHtcbiAgcHJvamVjdHNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzQXJyYXknKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RMb2NhbFN0b3JhZ2UoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0FycmF5JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSkpO1xufVxuXG5mdW5jdGlvbiBQcm9qZWN0KG5hbWUpIHtcbiAgKHRoaXMubmFtZSA9IG5hbWUpLCAodGhpcy50YXNrcyA9IFtdKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChuYW1lKSB7XG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgcHJvamVjdHNBcnJheS5wdXNoKHByb2plY3QpO1xuICBhZGRQcm9qZWN0TG9jYWxTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhZ2VXaXRoUHJvamVjdChldmVudCwgcGFnZSkge1xuICBwYWdlLnRleHRDb250ZW50ID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVG9Eb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYWxsVG9Eb0xpc3RbaV0ucHJvamVjdCA9PSBldmVudC50YXJnZXQuaWQpIHtcbiAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kaXYnKTtcbiAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGkpO1xuICAgICAgY29uc3QgdGl0bGVPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICB0aXRsZU91dHB1dC50ZXh0Q29udGVudCA9IGFsbFRvRG9MaXN0W2ldLnRpdGxlO1xuICAgICAgY29uc3QgZGF0ZU91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGRhdGVPdXRwdXQudGV4dENvbnRlbnQgPSBhbGxUb0RvTGlzdFtpXS5kYXRlO1xuICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBkZWxldGVCdG4uZGF0YXNldC5wb3NpdGlvbiA9IGk7XG4gICAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGl0bGVPdXRwdXQpO1xuICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkYXRlT3V0cHV0KTtcbiAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgIHBhZ2UuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYWxsVG9Eb0xpc3QpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWxldGVCdG4uZGF0YXNldC5wb3NpdGlvbikucmVtb3ZlKCk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsVG9Eb0xpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBpZiAoaiA9PSBkZWxldGVCdG4uZGF0YXNldC5wb3NpdGlvbikge1xuICAgICAgICAgICAgYWxsVG9Eb0xpc3Quc3BsaWNlKGosIDEpO1xuICAgICAgICAgICAgYWRkVG9Eb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVQYWdlKHBhZ2UpO1xuICAgICAgICB1cGRhdGVQcm9qZWN0KCk7XG4gICAgICAgIHVwZGF0ZVBhZ2VXaXRoUHJvamVjdChldmVudCwgcGFnZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdHNET00oYXJlYSwgcGFnZSkge1xuICBhcmVhLnRleHRDb250ZW50ID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBwcm9qZWN0c0FycmF5W2ldLm5hbWUpO1xuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0c0FycmF5W2ldLm5hbWU7XG4gICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXlbaV0ubmFtZSk7XG4gICAgICB1cGRhdGVQYWdlV2l0aFByb2plY3QoZXZlbnQsIHBhZ2UpO1xuICAgIH0pO1xuXG4gICAgYXJlYS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBwcm9qZWN0c0FycmF5LFxuICBjcmVhdGVOZXdQcm9qZWN0LFxuICB1cGRhdGVQcm9qZWN0c0RPTSxcbiAgYWRkUHJvamVjdExvY2FsU3RvcmFnZSxcbn07XG4iLCJpbXBvcnQgeyBwcm9qZWN0c0FycmF5LCBhZGRQcm9qZWN0TG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9wcm9qZWN0LWNvbnRyb2xsZXInO1xuXG5sZXQgYWxsVG9Eb0xpc3Q7XG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKSB7XG4gIGFsbFRvRG9MaXN0ID0gW107XG59IGVsc2Uge1xuICBhbGxUb0RvTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0JykpO1xufVxuXG4vLyBsZXQgYWxsVG9Eb0xpc3QgPSBbXTtcblxuZnVuY3Rpb24gVGFzayh0aXRsZSwgZGF0ZSwgcHJvamVjdCkge1xuICAodGhpcy50aXRsZSA9IHRpdGxlKSwgKHRoaXMuZGF0ZSA9IGRhdGUpLCAodGhpcy5wcm9qZWN0ID0gcHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvRG9Mb2NhbFN0b3JhZ2UoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KGFsbFRvRG9MaXN0KSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3QoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHByb2plY3RzQXJyYXlbaV0udGFza3MgPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFRvRG9MaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoYWxsVG9Eb0xpc3Rbal0ucHJvamVjdCA9PSBwcm9qZWN0c0FycmF5W2ldLm5hbWUpIHtcbiAgICAgICAgcHJvamVjdHNBcnJheVtpXS50YXNrcy5wdXNoKGFsbFRvRG9MaXN0W2pdKTtcbiAgICAgICAgYWRkUHJvamVjdExvY2FsU3RvcmFnZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb0RvKHRpdGxlLCBkYXRlLCBwcm9qZWN0KSB7XG4gIGNvbnN0IHRvRG8gPSBuZXcgVGFzayh0aXRsZSwgZGF0ZSwgcHJvamVjdCk7XG4gIGFsbFRvRG9MaXN0LnB1c2godG9Ebyk7XG4gIGFkZFRvRG9Mb2NhbFN0b3JhZ2UoKTtcbiAgdXBkYXRlUHJvamVjdCgpO1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gdGFrZXMgaW4gYSBwYWdlIGFzIGEgcGFyYW1ldGVyIGFuZCB1cGRhdGVzIHRoZSBwYWdlIHdpdGggdGhlIGN1cnJlbnQgdG8tZG8gbGlzdFxuICogQHBhcmFtIHBhZ2UgLSB0aGUgcGFnZSB0aGF0IHlvdSB3YW50IHRvIHVwZGF0ZVxuICovXG5mdW5jdGlvbiB1cGRhdGVQYWdlKHBhZ2UpIHtcbiAgcGFnZS50ZXh0Q29udGVudCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRvRG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kaXYnKTtcbiAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBpKTtcbiAgICBjb25zdCB0aXRsZU91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZU91dHB1dC50ZXh0Q29udGVudCA9IGFsbFRvRG9MaXN0W2ldLnRpdGxlO1xuICAgIGNvbnN0IGRhdGVPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGF0ZU91dHB1dC50ZXh0Q29udGVudCA9IGFsbFRvRG9MaXN0W2ldLmRhdGU7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnRuLmRhdGFzZXQucG9zaXRpb24gPSBpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGl0bGVPdXRwdXQpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGF0ZU91dHB1dCk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWxldGVCdG4uZGF0YXNldC5wb3NpdGlvbikucmVtb3ZlKCk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFRvRG9MaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChqID09IGRlbGV0ZUJ0bi5kYXRhc2V0LnBvc2l0aW9uKSB7XG4gICAgICAgICAgYWxsVG9Eb0xpc3Quc3BsaWNlKGosIDEpO1xuICAgICAgICAgIGFkZFRvRG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdXBkYXRlUGFnZShwYWdlKTtcbiAgICAgIHVwZGF0ZVByb2plY3QoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBjcmVhdGVUb0RvLFxuICB1cGRhdGVQYWdlLFxuICBhbGxUb0RvTGlzdCxcbiAgdXBkYXRlUHJvamVjdCxcbiAgYWRkVG9Eb0xvY2FsU3RvcmFnZSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHN0cnVjdHVyZSB9IGZyb20gXCIuL2hvbWUuanNcIjtcblxuc3RydWN0dXJlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=