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
    toDoDate.setAttribute("type", "text");
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

    (0,_project_controller_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectsDOM)(projectArea);

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
        (0,_project_controller_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectsDOM)(projectArea);
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
        title.value = "";
        date.value = "";
        (0,_to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__.updatePage)(taskArea, selectedProject.value);
    });

    (0,_to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__.updatePage)(taskArea, "Main");
    
}



/***/ }),

/***/ "./src/project-controller.js":
/*!***********************************!*\
  !*** ./src/project-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewProject": () => (/* binding */ createNewProject),
/* harmony export */   "projectsArray": () => (/* binding */ projectsArray),
/* harmony export */   "updateProjectsDOM": () => (/* binding */ updateProjectsDOM)
/* harmony export */ });
/* harmony import */ var _to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-controller.js */ "./src/to-do-controller.js");

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



/***/ }),

/***/ "./src/to-do-controller.js":
/*!*********************************!*\
  !*** ./src/to-do-controller.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allToDoList": () => (/* binding */ allToDoList),
/* harmony export */   "createToDo": () => (/* binding */ createToDo),
/* harmony export */   "updatePage": () => (/* binding */ updatePage),
/* harmony export */   "updateProject": () => (/* binding */ updateProject)
/* harmony export */ });
/* harmony import */ var _project_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-controller.js */ "./src/project-controller.js");

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
    for (let i = 0; i < _project_controller_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray.length; i++) {
        _project_controller_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].tasks = [];
        for (let j = 0; j < allToDoList.length; j++) {
            if (allToDoList[j].project == _project_controller_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].name) {
                _project_controller_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].tasks.push(allToDoList[j])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQzs7O0FBR3BDLG1EQUFTLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90by1kby1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVUb0RvLCB1cGRhdGVQYWdlLCB1cGRhdGVQcm9qZWN0fSBmcm9tIFwiLi90by1kby1jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQge3Byb2plY3RzQXJyYXksIGNyZWF0ZU5ld1Byb2plY3QsIHVwZGF0ZVByb2plY3RzRE9NfSBmcm9tIFwiLi9wcm9qZWN0LWNvbnRyb2xsZXIuanNcIjtcblxuZnVuY3Rpb24gc3RydWN0dXJlKCkge1xuICAgIC8vIEFzc2lnbiBib2R5IERPTSBlbGVtZW50IHRvIGEgdmFyaWFibGVcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAvL0NyZWF0ZSB0aGUgaGVhZGVyIGFuZCBhc3NpZ24gaXQgYSBjbGFzc1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gXCJUbyBEbyBMaXN0XCI7XG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgLy8gQ3JlYXRlIGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbiAgICAvL0Rpc3BsYXkgb24gdGhlIGxlZnQgZm9yIHByb2plY3RzXG4gICAgY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1kaXNwbGF5XCIpO1xuXG4gICAgY29uc3QgcHJvamVjdEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RBcmVhLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWFyZWFcIik7XG4gICAgcHJvamVjdEFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LWFyZWFcIik7XG4gICAgcHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQocHJvamVjdEFyZWEpO1xuICAgIFxuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkUHJvamVjdEJ0blwiKTtcbiAgICBhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCIrIEFkZCBQcm9qZWN0XCI7XG4gICAgcHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG5cbiAgICAvL0NyZWF0ZSBmb3JtIGZvciBwcm9qZWN0IGNyZWF0aW9uXG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1mb3JtXCIpO1xuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJvamVjdFRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdC10aXRsZVwiKTtcbiAgICBwcm9qZWN0VGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lOlwiXG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdC10aXRsZVwiKTtcbiAgICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LXRpdGxlXCIpO1xuXG4gICAgY29uc3Qgc3VibWl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgc3VibWl0UHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiYWRkLXByb2plY3RcIik7XG4gICAgc3VibWl0UHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC1wcm9qZWN0XCIpO1xuICAgIHN1Ym1pdFByb2plY3RCdG4uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJBZGRcIik7XG5cbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVMYWJlbCk7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRQcm9qZWN0QnRuKTtcbiAgICBwcm9qZWN0RGlzcGxheS5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG5cbiAgICAvL0NyZWF0ZSBtYWluIGRpc3BsYXlcbiAgICBjb25zdCBpdGVtRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbURpc3BsYXkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpdGVtLWRpc3BsYXlcIik7XG4gICAgaXRlbURpc3BsYXkuY2xhc3NMaXN0LmFkZChcIml0ZW0tZGlzcGxheVwiKTtcbiAgICBjb25zdCB0b0RvRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9Eb0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcInRvLWRvLWRpc3BsYXlcIik7XG4gICAgY29uc3QgdG9Eb0Jsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b0RvQmxvY2suY2xhc3NMaXN0LmFkZChcInRvLWRvLWJsb2NrXCIpO1xuXG4gICAgLy8gQ3JlYXRlIGEgZm9ybSB0byBmaWxsIGZvciB0aGUgdG9kb1xuICAgIGNvbnN0IHRvRG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgdG9Eb0Zvcm0uY2xhc3NMaXN0LmFkZChcInRvLWRvLWZvcm1cIik7XG5cbiAgICBjb25zdCB0b0RvVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0b0RvVGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLXRpdGxlXCIpO1xuICAgIHRvRG9UaXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIlxuXG4gICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRvRG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0b0RvVGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stdGl0bGVcIik7XG4gICAgdG9Eb1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay10aXRsZVwiKTtcblxuICAgIGNvbnN0IHRvRG9EYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdG9Eb0RhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWRhdGVcIik7XG4gICAgdG9Eb0RhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRGF0ZTpcIlxuXG4gICAgY29uc3QgdG9Eb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdG9Eb0RhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdG9Eb0RhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stZGF0ZVwiKTtcbiAgICB0b0RvRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stZGF0ZVwiKTtcblxuICAgIGNvbnN0IHByb2plY3RTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJvamVjdFNlbGVjdG9yLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0U2VsZWN0b3JcIik7XG4gICAgcHJvamVjdFNlbGVjdG9yLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdFNlbGVjdG9yXCIpO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZVNlbGVjdCgpIHtcbiAgICAgICAgcHJvamVjdFNlbGVjdG9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcHJvamVjdHNBcnJheVtpXS5uYW1lKTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RzQXJyYXlbaV0ubmFtZTtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVNlbGVjdCgpO1xuICAgIFxuICAgIFxuICAgIGNvbnN0IHN1Ym1pdFRvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3VibWl0VG9Eb0J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIHN1Ym1pdFRvRG9CdG4uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBzdWJtaXRUb0RvQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0XCIpO1xuICAgIHN1Ym1pdFRvRG9CdG4uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJBZGRcIik7XG4gICAgXG4gICAgY29uc3QgYWRkVG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkVG9Eb0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkVG9Eb0J0blwiKTtcbiAgICBhZGRUb0RvQnRuLnRleHRDb250ZW50ID0gXCIrIE5ldyB0by1kb1wiO1xuXG4gICAgY29uc3QgdGFza0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tBcmVhLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFyZWFcIik7XG4gICAgdGFza0FyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWFyZWFcIik7XG5cbiAgICB1cGRhdGVQcm9qZWN0c0RPTShwcm9qZWN0QXJlYSk7XG5cbiAgICB0b0RvQmxvY2suYXBwZW5kQ2hpbGQodG9Eb0Zvcm0pO1xuICAgIHRvRG9EaXNwbGF5LmFwcGVuZENoaWxkKGFkZFRvRG9CdG4pO1xuICAgIHRvRG9EaXNwbGF5LmFwcGVuZENoaWxkKHRvRG9CbG9jayk7XG4gICAgaXRlbURpc3BsYXkuYXBwZW5kQ2hpbGQodG9Eb0Rpc3BsYXkpO1xuICAgIGl0ZW1EaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tBcmVhKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGlzcGxheSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb1RpdGxlTGFiZWwpO1xuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHRvRG9UaXRsZSk7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb0RhdGVMYWJlbCk7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb0RhdGUpO1xuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3Rvcik7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0VG9Eb0J0bik7XG5cbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3b3JraW5nXCIpXG4gICAgICAgIGlmIChwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09IFwiZmxleFwiKSB7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHN1Ym1pdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0KG5hbWUudmFsdWUpO1xuICAgICAgICBuYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgICAgdXBkYXRlUHJvamVjdHNET00ocHJvamVjdEFyZWEpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHVwZGF0ZVNlbGVjdCgpO1xuICAgIH0pO1xuXG4gICAgYWRkVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0b0RvQmxvY2suc3R5bGUuZGlzcGxheSA9PSBcImlubGluZVwiKSB7XG4gICAgICAgICAgICB0b0RvQmxvY2suc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9Eb0Jsb2NrLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBzdWJtaXRUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGVcIik7XG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRhdGVcIik7XG4gICAgICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RTZWxlY3RvclwiKVxuICAgICAgICBjcmVhdGVUb0RvKHRpdGxlLnZhbHVlLCBkYXRlLnZhbHVlLCBzZWxlY3RlZFByb2plY3QudmFsdWUpO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgICB1cGRhdGVQYWdlKHRhc2tBcmVhLCBzZWxlY3RlZFByb2plY3QudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgdXBkYXRlUGFnZSh0YXNrQXJlYSwgXCJNYWluXCIpO1xuICAgIFxufVxuXG5leHBvcnQge3N0cnVjdHVyZX0iLCJpbXBvcnQge3VwZGF0ZVBhZ2V9IGZyb20gXCIuL3RvLWRvLWNvbnRyb2xsZXIuanNcIlxubGV0IHByb2plY3RzQXJyYXkgPSBbXVxuXG5mdW5jdGlvbiBQcm9qZWN0KG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lLFxuICAgIHRoaXMudGFza3MgPSBbXVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KG5hbWUpIHtcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgIHByb2plY3RzQXJyYXkucHVzaChwcm9qZWN0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbn1cblxuY3JlYXRlTmV3UHJvamVjdChcIkhvbWVcIik7XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzRE9NKGFyZWEpIHtcbiAgICAvL3VwZGF0ZVByb2plY3RzKCk7XG4gICAgYXJlYS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3RzQXJyYXlbaV0ubmFtZSk7XG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0c0FycmF5W2ldLm5hbWU7XG4gICAgICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheVtpXS5uYW1lKTtcbiAgICAgICAgICAgIC8vIHBhZ2UudGV4dENvbnRlbnQgPSBcIkxPTFwiO1xuICAgICAgICAgICAgLy8gdXBkYXRlUGFnZShwYWdlLCBwcm9qZWN0c0FycmF5W2ldLm5hbWUpXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgYXJlYS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICB9XG59XG5cbmV4cG9ydCB7cHJvamVjdHNBcnJheSwgY3JlYXRlTmV3UHJvamVjdCwgdXBkYXRlUHJvamVjdHNET019IiwiaW1wb3J0IHtwcm9qZWN0c0FycmF5fSBmcm9tIFwiLi9wcm9qZWN0LWNvbnRyb2xsZXIuanNcIlxubGV0IGFsbFRvRG9MaXN0ID0gW107XG5cbmZ1bmN0aW9uIFRhc2sodGl0bGUsIGRhdGUsIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGUsXG4gICAgdGhpcy5kYXRlID0gZGF0ZSxcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlVG9Ebyh0aXRsZSwgZGF0ZSwgcHJvamVjdCkge1xuICAgIGxldCB0b0RvID0gbmV3IFRhc2sodGl0bGUsIGRhdGUsIHByb2plY3QpO1xuICAgIGFsbFRvRG9MaXN0LnB1c2godG9Ebyk7XG4gICAgdXBkYXRlUHJvamVjdCgpO1xuLy8gICAgIGNvbnNvbGUubG9nKGBQcm9qZWN0cyBhcnJheTogJHtKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycmF5KX1gKTtcbi8vICAgICBjb25zb2xlLmxvZyhhbGxUb0RvTGlzdCk7XG4vLyB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3QoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHByb2plY3RzQXJyYXlbaV0udGFza3MgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxUb0RvTGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGFsbFRvRG9MaXN0W2pdLnByb2plY3QgPT0gcHJvamVjdHNBcnJheVtpXS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNBcnJheVtpXS50YXNrcy5wdXNoKGFsbFRvRG9MaXN0W2pdKVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZm91bmQgb25lXCIpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFsbFRvRG9MaXN0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQYWdlKHBhZ2UsIHByb2plY3QpIHtcbiAgICBwYWdlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYWxsVG9Eb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRpdlwiKVxuICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIGkpO1xuICAgICAgICBsZXQgdGl0bGVPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGl0bGVPdXRwdXQudGV4dENvbnRlbnQgPSBhbGxUb0RvTGlzdFtpXS50aXRsZTtcbiAgICAgICAgbGV0IGRhdGVPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGF0ZU91dHB1dC50ZXh0Q29udGVudCA9IGFsbFRvRG9MaXN0W2ldLmRhdGU7XG4gICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVCdG4uZGF0YXNldC5wb3NpdGlvbiA9IGk7XG4gICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGl0bGVPdXRwdXQpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRhdGVPdXRwdXQpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIHBhZ2UuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbiAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlbGV0ZUJ0bi5kYXRhc2V0LnBvc2l0aW9uKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsVG9Eb0xpc3RbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaiA9PSBkZWxldGVCdG4uZGF0YXNldC5wb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBhbGxUb0RvTGlzdFtpXS5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHVwZGF0ZVBhZ2UocGFnZSk7XG4gICAgICAgICAgICB1cGRhdGVQcm9qZWN0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IHtjcmVhdGVUb0RvLCB1cGRhdGVQYWdlLCBhbGxUb0RvTGlzdCwgdXBkYXRlUHJvamVjdH1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge3N0cnVjdHVyZX0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuXG5cbnN0cnVjdHVyZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==