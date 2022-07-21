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
/* harmony import */ var _to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-controller.js */ "./src/to-do-controller.js");
/* harmony import */ var _project_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-controller.js */ "./src/project-controller.js");



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
        for(let i = 0; i < _project_controller_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.length; i++){
            let option = document.createElement("option");
            option.setAttribute("value", _project_controller_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].name);
            option.textContent = _project_controller_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].name;
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

    (0,_project_controller_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectsDOM)(projectArea, taskArea);

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
        (0,_project_controller_js__WEBPACK_IMPORTED_MODULE_1__.createNewProject)(name.value);
        name.value = "";
        (0,_project_controller_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectsDOM)(projectArea, taskArea);
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
        ;(0,_to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__.createToDo)(title.value, date.value, selectedProject.value);
        console.log(date.value)
        title.value = "";
        date.value = "";
        (0,_to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__.updatePage)(taskArea);
    });

    (0,_to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__.updatePage)(taskArea);
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
/* harmony import */ var _to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-controller.js */ "./src/to-do-controller.js");


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
    for(let i = 0; i < _to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__.allToDoList.length; i++) {
        if (_to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__.allToDoList[i].project == event.target.id) {
            let taskDiv = document.createElement("div");
            taskDiv.classList.add("task-div")
            taskDiv.setAttribute("id", i);
            let titleOutput = document.createElement("p");
            titleOutput.textContent = _to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__.allToDoList[i].title;
            let dateOutput = document.createElement("p");
            dateOutput.textContent = _to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__.allToDoList[i].date;
            let deleteBtn = document.createElement("button");
            deleteBtn.dataset.position = i;
            deleteBtn.textContent = "Delete";
            taskDiv.appendChild(titleOutput);
            taskDiv.appendChild(dateOutput);
            taskDiv.appendChild(deleteBtn);
            page.appendChild(taskDiv);

            deleteBtn.addEventListener("click", function() {
                console.log(_to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__.allToDoList)
                document.getElementById(deleteBtn.dataset.position).remove();
                for (let j = 0; j < _to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__.allToDoList.length; j++) {
                    if (j == deleteBtn.dataset.position) {
                        _to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__.allToDoList.splice(j, 1);
                        (0,_to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__.addToDoLocalStorage)();
                    }
                };
                (0,_to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__.updatePage)(page);
                (0,_to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__.updateProject)();
                updatePageWithProject(event, page)
            });
        }
        
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
/* harmony import */ var _project_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-controller.js */ "./src/project-controller.js");


let allToDoList;
if (!localStorage.getItem("toDoList")) {
    allToDoList = []
    console.log("None found.")
}
else {
    allToDoList = JSON.parse(localStorage.getItem("toDoList"));
    console.log("Some found");
    console.log(allToDoList);
}

// let allToDoList = [];

function Task(title, date, project) {
    this.title = title,
    this.date = date,
    this.project = project
}

function addToDoLocalStorage() {
    localStorage.setItem("toDoList", JSON.stringify(allToDoList))
}

function getTodoLocalStorage() {
    let storedTodo = localStorage.getItem("toDoList");
    console.log(storedTodo);
}

function createToDo(title, date, project) {
    let toDo = new Task(title, date, project);
    allToDoList.push(toDo);
    addToDoLocalStorage();
    updateProject();
    getTodoLocalStorage();
//     console.log(`Projects array: ${JSON.stringify(projectsArray)}`);
//     console.log(allToDoList);
// }
}

function updateProject() {
    for (let i = 0; i < _project_controller_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray.length; i++) {
        _project_controller_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].tasks = [];
        for (let j = 0; j < allToDoList.length; j++) {
            if (allToDoList[j].project == _project_controller_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].name) {
                _project_controller_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].tasks.push(allToDoList[j])
                ;(0,_project_controller_js__WEBPACK_IMPORTED_MODULE_0__.addProjectLocalStorage)();
                // console.log("found one");
                // console.log(allToDoList)
            }
        }
    }
}

function updatePage(page) {
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
            // console.log("hm")
            // console.log(allToDoList)
            document.getElementById(deleteBtn.dataset.position).remove();
            for (let j = 0; j < allToDoList.length; j++) {
                if (j == deleteBtn.dataset.position) {
                    allToDoList.splice(j, 1);
                    addToDoLocalStorage();
                }
            };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxvQkFBb0IsSUFBSSx3RUFBb0IsRUFBRTtBQUM5QyxRQUFRLGlFQUFhO0FBQ3JCLHdCQUF3Qix3QkFBd0I7QUFDaEQsMENBQTBDLGlFQUFhO0FBQ3ZELGdCQUFnQixpRUFBYTtBQUM3QixnQkFBZ0IsK0VBQXNCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHdCQUF3QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVnRjs7Ozs7Ozs7VUN6RmhGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOb0M7OztBQUdwQyxtREFBUyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG8tZG8tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlVG9EbywgdXBkYXRlUGFnZSwgdXBkYXRlUHJvamVjdH0gZnJvbSBcIi4vdG8tZG8tY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHtwcm9qZWN0c0FycmF5LCBjcmVhdGVOZXdQcm9qZWN0LCB1cGRhdGVQcm9qZWN0c0RPTX0gZnJvbSBcIi4vcHJvamVjdC1jb250cm9sbGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHN0cnVjdHVyZSgpIHtcbiAgICAvLyBBc3NpZ24gYm9keSBET00gZWxlbWVudCB0byBhIHZhcmlhYmxlXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgLy9DcmVhdGUgdGhlIGhlYWRlciBhbmQgYXNzaWduIGl0IGEgY2xhc3NcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IFwiVG8gRG8gTGlzdFwiO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIC8vIENyZWF0ZSBjb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4gICAgLy9EaXNwbGF5IG9uIHRoZSBsZWZ0IGZvciBwcm9qZWN0c1xuICAgIGNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtZGlzcGxheVwiKTtcblxuICAgIGNvbnN0IHByb2plY3RBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QXJlYS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1hcmVhXCIpO1xuICAgIHByb2plY3RBcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1hcmVhXCIpO1xuICAgIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKHByb2plY3RBcmVhKTtcbiAgICBcblxuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImFkZFByb2plY3RCdG5cIik7XG4gICAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiKyBBZGQgUHJvamVjdFwiO1xuICAgIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuXG4gICAgLy9DcmVhdGUgZm9ybSBmb3IgcHJvamVjdCBjcmVhdGlvblxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZm9ybVwiKTtcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByb2plY3RUaXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3QtdGl0bGVcIik7XG4gICAgcHJvamVjdFRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTmFtZTpcIlxuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3QtdGl0bGVcIik7XG4gICAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC10aXRsZVwiKTtcblxuICAgIGNvbnN0IHN1Ym1pdFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3VibWl0UHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIHN1Ym1pdFByb2plY3RCdG4uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImFkZC1wcm9qZWN0XCIpO1xuICAgIHN1Ym1pdFByb2plY3RCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvamVjdFwiKTtcbiAgICBzdWJtaXRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQWRkXCIpO1xuXG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlTGFiZWwpO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0UHJvamVjdEJ0bik7XG4gICAgcHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xuXG4gICAgLy9DcmVhdGUgbWFpbiBkaXNwbGF5XG4gICAgY29uc3QgaXRlbURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1EaXNwbGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaXRlbS1kaXNwbGF5XCIpO1xuICAgIGl0ZW1EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJpdGVtLWRpc3BsYXlcIik7XG4gICAgY29uc3QgdG9Eb0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvRG9EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJ0by1kby1kaXNwbGF5XCIpO1xuICAgIGNvbnN0IHRvRG9CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9Eb0Jsb2NrLmNsYXNzTGlzdC5hZGQoXCJ0by1kby1ibG9ja1wiKTtcblxuICAgIC8vIENyZWF0ZSBhIGZvcm0gdG8gZmlsbCBmb3IgdGhlIHRvZG9cbiAgICBjb25zdCB0b0RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIHRvRG9Gb3JtLmNsYXNzTGlzdC5hZGQoXCJ0by1kby1mb3JtXCIpO1xuXG4gICAgY29uc3QgdG9Eb1RpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdG9Eb1RpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay10aXRsZVwiKTtcbiAgICB0b0RvVGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCJcblxuICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0b0RvVGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdG9Eb1RpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLXRpdGxlXCIpO1xuICAgIHRvRG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stdGl0bGVcIik7XG5cbiAgICBjb25zdCB0b0RvRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRvRG9EYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1kYXRlXCIpO1xuICAgIHRvRG9EYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGU6XCJcblxuICAgIGNvbnN0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRvRG9EYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgIHRvRG9EYXRlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLWRhdGVcIik7XG4gICAgdG9Eb0RhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWRhdGVcIik7XG5cbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByb2plY3RTZWxlY3Rvci5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdFNlbGVjdG9yXCIpO1xuICAgIHByb2plY3RTZWxlY3Rvci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RTZWxlY3RvclwiKTtcbiAgICBmdW5jdGlvbiB1cGRhdGVTZWxlY3QoKSB7XG4gICAgICAgIHByb2plY3RTZWxlY3Rvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByb2plY3RzQXJyYXlbaV0ubmFtZSk7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0c0FycmF5W2ldLm5hbWU7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVTZWxlY3QoKTtcbiAgICBcbiAgICBcbiAgICBjb25zdCBzdWJtaXRUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN1Ym1pdFRvRG9CdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBzdWJtaXRUb0RvQnRuLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzdWJtaXRcIik7XG4gICAgc3VibWl0VG9Eb0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdFwiKTtcbiAgICBzdWJtaXRUb0RvQnRuLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQWRkXCIpO1xuICAgIFxuICAgIGNvbnN0IGFkZFRvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRvRG9CdG4uY2xhc3NMaXN0LmFkZChcImFkZFRvRG9CdG5cIik7XG4gICAgYWRkVG9Eb0J0bi50ZXh0Q29udGVudCA9IFwiKyBOZXcgdG8tZG9cIjtcblxuICAgIGNvbnN0IHRhc2tBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQXJlYS5jbGFzc0xpc3QuYWRkKFwidGFzay1hcmVhXCIpO1xuICAgIHRhc2tBcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1hcmVhXCIpO1xuXG4gICAgdXBkYXRlUHJvamVjdHNET00ocHJvamVjdEFyZWEsIHRhc2tBcmVhKTtcblxuICAgIHRvRG9CbG9jay5hcHBlbmRDaGlsZCh0b0RvRm9ybSk7XG4gICAgdG9Eb0Rpc3BsYXkuYXBwZW5kQ2hpbGQoYWRkVG9Eb0J0bik7XG4gICAgdG9Eb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodG9Eb0Jsb2NrKTtcbiAgICBpdGVtRGlzcGxheS5hcHBlbmRDaGlsZCh0b0RvRGlzcGxheSk7XG4gICAgaXRlbURpc3BsYXkuYXBwZW5kQ2hpbGQodGFza0FyZWEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGlzcGxheSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EaXNwbGF5KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZCh0b0RvVGl0bGVMYWJlbCk7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb1RpdGxlKTtcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZCh0b0RvRGF0ZUxhYmVsKTtcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZCh0b0RvRGF0ZSk7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdG9yKTtcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRUb0RvQnRuKTtcblxuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIndvcmtpbmdcIilcbiAgICAgICAgaWYgKHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPT0gXCJmbGV4XCIpIHtcbiAgICAgICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3VibWl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdGl0bGVcIik7XG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3QobmFtZS52YWx1ZSk7XG4gICAgICAgIG5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgICB1cGRhdGVQcm9qZWN0c0RPTShwcm9qZWN0QXJlYSwgdGFza0FyZWEpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHVwZGF0ZVNlbGVjdCgpO1xuICAgIH0pO1xuXG4gICAgYWRkVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0b0RvQmxvY2suc3R5bGUuZGlzcGxheSA9PSBcImlubGluZVwiKSB7XG4gICAgICAgICAgICB0b0RvQmxvY2suc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9Eb0Jsb2NrLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBzdWJtaXRUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGVcIik7XG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRhdGVcIik7XG4gICAgICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RTZWxlY3RvclwiKVxuICAgICAgICBjcmVhdGVUb0RvKHRpdGxlLnZhbHVlLCBkYXRlLnZhbHVlLCBzZWxlY3RlZFByb2plY3QudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRlLnZhbHVlKVxuICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgICB1cGRhdGVQYWdlKHRhc2tBcmVhKTtcbiAgICB9KTtcblxuICAgIHVwZGF0ZVBhZ2UodGFza0FyZWEpO1xufVxuXG5leHBvcnQge3N0cnVjdHVyZX0iLCJpbXBvcnQge2FsbFRvRG9MaXN0LCB1cGRhdGVQYWdlLCB1cGRhdGVQcm9qZWN0LCBhZGRUb0RvTG9jYWxTdG9yYWdlfSBmcm9tIFwiLi90by1kby1jb250cm9sbGVyLmpzXCJcblxubGV0IHByb2plY3RzQXJyYXk7XG5cbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0FycmF5XCIpKSB7XG4gICAgcHJvamVjdHNBcnJheSA9IFtdO1xufVxuZWxzZSB7XG4gICAgcHJvamVjdHNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0FycmF5XCIpKTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdExvY2FsU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzQXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSkpXG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RMb2NhbFN0b3JhZ2UoKSB7XG4gICAgbGV0IHN0b3JlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0FycmF5XCIpO1xuICAgIGNvbnNvbGUubG9nKHN0b3JlZFByb2plY3RzKTtcbn1cblxuXG5mdW5jdGlvbiBQcm9qZWN0KG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lLFxuICAgIHRoaXMudGFza3MgPSBbXVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KG5hbWUpIHtcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgIHByb2plY3RzQXJyYXkucHVzaChwcm9qZWN0KTtcbiAgICBhZGRQcm9qZWN0TG9jYWxTdG9yYWdlKCk7XG4gICAgZ2V0UHJvamVjdExvY2FsU3RvcmFnZSgpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0c0RPTShhcmVhLCBwYWdlKSB7XG4gICAgYXJlYS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3RzQXJyYXlbaV0ubmFtZSk7XG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0c0FycmF5W2ldLm5hbWU7XG4gICAgICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheVtpXS5uYW1lKTtcbiAgICAgICAgICAgIHVwZGF0ZVBhZ2VXaXRoUHJvamVjdChldmVudCwgcGFnZSlcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBhcmVhLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUGFnZVdpdGhQcm9qZWN0KGV2ZW50LCBwYWdlKSB7XG4gICAgcGFnZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFsbFRvRG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhbGxUb0RvTGlzdFtpXS5wcm9qZWN0ID09IGV2ZW50LnRhcmdldC5pZCkge1xuICAgICAgICAgICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1kaXZcIilcbiAgICAgICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgaSk7XG4gICAgICAgICAgICBsZXQgdGl0bGVPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIHRpdGxlT3V0cHV0LnRleHRDb250ZW50ID0gYWxsVG9Eb0xpc3RbaV0udGl0bGU7XG4gICAgICAgICAgICBsZXQgZGF0ZU91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgZGF0ZU91dHB1dC50ZXh0Q29udGVudCA9IGFsbFRvRG9MaXN0W2ldLmRhdGU7XG4gICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5kYXRhc2V0LnBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRpdGxlT3V0cHV0KTtcbiAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGF0ZU91dHB1dCk7XG4gICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgICAgICBwYWdlLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuXG4gICAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbFRvRG9MaXN0KVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlbGV0ZUJ0bi5kYXRhc2V0LnBvc2l0aW9uKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFRvRG9MaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09IGRlbGV0ZUJ0bi5kYXRhc2V0LnBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxUb0RvTGlzdC5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUb0RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHVwZGF0ZVBhZ2UocGFnZSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUHJvamVjdCgpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVBhZ2VXaXRoUHJvamVjdChldmVudCwgcGFnZSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IHtwcm9qZWN0c0FycmF5LCBjcmVhdGVOZXdQcm9qZWN0LCB1cGRhdGVQcm9qZWN0c0RPTSwgYWRkUHJvamVjdExvY2FsU3RvcmFnZX0iLCJpbXBvcnQge3Byb2plY3RzQXJyYXksIGFkZFByb2plY3RMb2NhbFN0b3JhZ2V9IGZyb20gXCIuL3Byb2plY3QtY29udHJvbGxlci5qc1wiXG5cbmxldCBhbGxUb0RvTGlzdDtcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvTGlzdFwiKSkge1xuICAgIGFsbFRvRG9MaXN0ID0gW11cbiAgICBjb25zb2xlLmxvZyhcIk5vbmUgZm91bmQuXCIpXG59XG5lbHNlIHtcbiAgICBhbGxUb0RvTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvTGlzdFwiKSk7XG4gICAgY29uc29sZS5sb2coXCJTb21lIGZvdW5kXCIpO1xuICAgIGNvbnNvbGUubG9nKGFsbFRvRG9MaXN0KTtcbn1cblxuLy8gbGV0IGFsbFRvRG9MaXN0ID0gW107XG5cbmZ1bmN0aW9uIFRhc2sodGl0bGUsIGRhdGUsIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGUsXG4gICAgdGhpcy5kYXRlID0gZGF0ZSxcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XG59XG5cbmZ1bmN0aW9uIGFkZFRvRG9Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0RvTGlzdFwiLCBKU09OLnN0cmluZ2lmeShhbGxUb0RvTGlzdCkpXG59XG5cbmZ1bmN0aW9uIGdldFRvZG9Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgbGV0IHN0b3JlZFRvZG8gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvRG9MaXN0XCIpO1xuICAgIGNvbnNvbGUubG9nKHN0b3JlZFRvZG8pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb0RvKHRpdGxlLCBkYXRlLCBwcm9qZWN0KSB7XG4gICAgbGV0IHRvRG8gPSBuZXcgVGFzayh0aXRsZSwgZGF0ZSwgcHJvamVjdCk7XG4gICAgYWxsVG9Eb0xpc3QucHVzaCh0b0RvKTtcbiAgICBhZGRUb0RvTG9jYWxTdG9yYWdlKCk7XG4gICAgdXBkYXRlUHJvamVjdCgpO1xuICAgIGdldFRvZG9Mb2NhbFN0b3JhZ2UoKTtcbi8vICAgICBjb25zb2xlLmxvZyhgUHJvamVjdHMgYXJyYXk6ICR7SlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSl9YCk7XG4vLyAgICAgY29uc29sZS5sb2coYWxsVG9Eb0xpc3QpO1xuLy8gfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBwcm9qZWN0c0FycmF5W2ldLnRhc2tzID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsVG9Eb0xpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChhbGxUb0RvTGlzdFtqXS5wcm9qZWN0ID09IHByb2plY3RzQXJyYXlbaV0ubmFtZSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzQXJyYXlbaV0udGFza3MucHVzaChhbGxUb0RvTGlzdFtqXSlcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0TG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJmb3VuZCBvbmVcIik7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWxsVG9Eb0xpc3QpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhZ2UocGFnZSkge1xuICAgIHBhZ2UudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxUb0RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2stZGl2XCIpXG4gICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgaSk7XG4gICAgICAgIGxldCB0aXRsZU91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0aXRsZU91dHB1dC50ZXh0Q29udGVudCA9IGFsbFRvRG9MaXN0W2ldLnRpdGxlO1xuICAgICAgICBsZXQgZGF0ZU91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkYXRlT3V0cHV0LnRleHRDb250ZW50ID0gYWxsVG9Eb0xpc3RbaV0uZGF0ZTtcbiAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRlbGV0ZUJ0bi5kYXRhc2V0LnBvc2l0aW9uID0gaTtcbiAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0aXRsZU91dHB1dCk7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGF0ZU91dHB1dCk7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgcGFnZS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcblxuICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJobVwiKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWxsVG9Eb0xpc3QpXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWxldGVCdG4uZGF0YXNldC5wb3NpdGlvbikucmVtb3ZlKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFRvRG9MaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGogPT0gZGVsZXRlQnRuLmRhdGFzZXQucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb0xpc3Quc3BsaWNlKGosIDEpO1xuICAgICAgICAgICAgICAgICAgICBhZGRUb0RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHVwZGF0ZVBhZ2UocGFnZSk7XG4gICAgICAgICAgICB1cGRhdGVQcm9qZWN0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IHtjcmVhdGVUb0RvLCB1cGRhdGVQYWdlLCBhbGxUb0RvTGlzdCwgdXBkYXRlUHJvamVjdCwgYWRkVG9Eb0xvY2FsU3RvcmFnZX1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge3N0cnVjdHVyZX0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuXG5cbnN0cnVjdHVyZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==