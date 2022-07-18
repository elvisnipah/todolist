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
    projectDisplay.classList.add("projectsDisplay");
    const defaultProjects = document.createElement("div");
    defaultProjects.classList.add("defaultProjects");
    projectDisplay.appendChild(defaultProjects);
    const mainProject = document.createElement("div");
    const todayProject = document.createElement("div");
    mainProject.classList.add("mainProject", "project");
    mainProject.textContent = "HOME";
    todayProject.classList.add("todayProject", "project");
    todayProject.textContent = "TODAY";
    defaultProjects.appendChild(mainProject);
    defaultProjects.appendChild(todayProject);
    const userProjects = document.createElement("div");
    userProjects.classList.add("userProjects");
    const userProjectTitle = document.createElement("p");
    userProjectTitle.innerText = "My Projects";
    userProjects.appendChild(userProjectTitle);
    const addProjectBtn = document.createElement("button");
    addProjectBtn.classList.add("addProjectBtn");
    addProjectBtn.textContent = "+ Add Project";
    userProjects.appendChild(addProjectBtn);
    projectDisplay.appendChild(userProjects);
    // REMEMBER TO CREATE A NEW MODULE TO DISPLAY USER-CREATED PROJECTS

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
    toDoTitleLabel.textContent = "Title:"
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
    const submitToDoBtn = document.createElement("input");
    submitToDoBtn.setAttribute("type", "submit");
    submitToDoBtn.setAttribute("name", "submit");
    submitToDoBtn.setAttribute("id", "submit");
    submitToDoBtn.textContent = "Submit";
    
    const addToDoBtn = document.createElement("button");
    addToDoBtn.classList.add("addToDoBtn");
    addToDoBtn.textContent = "+ New to-do";

    const taskArea = document.createElement("div");
    taskArea.classList.add("task-area");
    taskArea.setAttribute("id", "taskArea");

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
    toDoForm.appendChild(submitToDoBtn);

    addToDoBtn.addEventListener("click", function() {
        if (toDoBlock.style.display == "inline") {
            toDoBlock.style.display = "none";
        }
        else {
            toDoBlock.style.display = "inline";
        }
    })

    submitToDoBtn.addEventListener("click", function(event) {
        event.preventDefault();
        let title = document.getElementById("task-title");
        let date = document.getElementById("task-date");
        (0,_to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__.createToDo)(title.value, date.value);
        title.value = "";
        date.value = "";
        (0,_to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__.updatePage)(taskArea);
        console.log(taskArea);
        console.log(itemDisplay)
    })


    ;(0,_to_do_controller_js__WEBPACK_IMPORTED_MODULE_0__.updatePage)(taskArea);
}






/***/ }),

/***/ "./src/to-do-controller.js":
/*!*********************************!*\
  !*** ./src/to-do-controller.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createToDo": () => (/* binding */ createToDo),
/* harmony export */   "updatePage": () => (/* binding */ updatePage)
/* harmony export */ });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0VBQVU7QUFDbEI7QUFDQTtBQUNBLFFBQVEsZ0VBQVU7QUFDbEI7QUFDQTtBQUNBLEtBQUs7OztBQUdMLElBQUksaUVBQVU7QUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUUrQjs7Ozs7Ozs7VUM3Qy9CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOb0M7O0FBRXBDLG1EQUFTLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvLWRvLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVRvRG8sIHVwZGF0ZVBhZ2V9IGZyb20gXCIuL3RvLWRvLWNvbnRyb2xsZXIuanNcIlxuXG5mdW5jdGlvbiBzdHJ1Y3R1cmUoKSB7XG4gICAgLy8gQXNzaWduIGJvZHkgRE9NIGVsZW1lbnQgdG8gYSB2YXJpYWJsZVxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIC8vQ3JlYXRlIHRoZSBoZWFkZXIgYW5kIGFzc2lnbiBpdCBhIGNsYXNzXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICAgIGhlYWRlci5pbm5lclRleHQgPSBcIlRvIERvIExpc3RcIjtcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAvLyBDcmVhdGUgY29udGFpbmVyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuICAgIC8vRGlzcGxheSBvbiB0aGUgbGVmdCBmb3IgcHJvamVjdHNcbiAgICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LmFkZChcInByb2plY3RzRGlzcGxheVwiKTtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlZmF1bHRQcm9qZWN0cy5jbGFzc0xpc3QuYWRkKFwiZGVmYXVsdFByb2plY3RzXCIpO1xuICAgIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKGRlZmF1bHRQcm9qZWN0cyk7XG4gICAgY29uc3QgbWFpblByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvZGF5UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpblByb2plY3QuY2xhc3NMaXN0LmFkZChcIm1haW5Qcm9qZWN0XCIsIFwicHJvamVjdFwiKTtcbiAgICBtYWluUHJvamVjdC50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xuICAgIHRvZGF5UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwidG9kYXlQcm9qZWN0XCIsIFwicHJvamVjdFwiKTtcbiAgICB0b2RheVByb2plY3QudGV4dENvbnRlbnQgPSBcIlRPREFZXCI7XG4gICAgZGVmYXVsdFByb2plY3RzLmFwcGVuZENoaWxkKG1haW5Qcm9qZWN0KTtcbiAgICBkZWZhdWx0UHJvamVjdHMuYXBwZW5kQ2hpbGQodG9kYXlQcm9qZWN0KTtcbiAgICBjb25zdCB1c2VyUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHVzZXJQcm9qZWN0cy5jbGFzc0xpc3QuYWRkKFwidXNlclByb2plY3RzXCIpO1xuICAgIGNvbnN0IHVzZXJQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB1c2VyUHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IFwiTXkgUHJvamVjdHNcIjtcbiAgICB1c2VyUHJvamVjdHMuYXBwZW5kQ2hpbGQodXNlclByb2plY3RUaXRsZSk7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkUHJvamVjdEJ0blwiKTtcbiAgICBhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCIrIEFkZCBQcm9qZWN0XCI7XG4gICAgdXNlclByb2plY3RzLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuICAgIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKHVzZXJQcm9qZWN0cyk7XG4gICAgLy8gUkVNRU1CRVIgVE8gQ1JFQVRFIEEgTkVXIE1PRFVMRSBUTyBESVNQTEFZIFVTRVItQ1JFQVRFRCBQUk9KRUNUU1xuXG4gICAgLy9DcmVhdGUgbWFpbiBkaXNwbGF5XG4gICAgY29uc3QgaXRlbURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1EaXNwbGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaXRlbS1kaXNwbGF5XCIpO1xuICAgIGl0ZW1EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJpdGVtLWRpc3BsYXlcIik7XG4gICAgY29uc3QgdG9Eb0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvRG9EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJ0by1kby1kaXNwbGF5XCIpO1xuICAgIGNvbnN0IHRvRG9CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9Eb0Jsb2NrLmNsYXNzTGlzdC5hZGQoXCJ0by1kby1ibG9ja1wiKTtcblxuICAgIC8vIENyZWF0ZSBhIGZvcm0gdG8gZmlsbCBmb3IgdGhlIHRvZG9cbiAgICBjb25zdCB0b0RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIHRvRG9Gb3JtLmNsYXNzTGlzdC5hZGQoXCJ0by1kby1mb3JtXCIpO1xuICAgIGNvbnN0IHRvRG9UaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRvRG9UaXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stdGl0bGVcIik7XG4gICAgdG9Eb1RpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiXG4gICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRvRG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0b0RvVGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stdGl0bGVcIik7XG4gICAgdG9Eb1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay10aXRsZVwiKTtcbiAgICBjb25zdCB0b0RvRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRvRG9EYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1kYXRlXCIpO1xuICAgIHRvRG9EYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGU6XCJcbiAgICBjb25zdCB0b0RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0b0RvRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0b0RvRGF0ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1kYXRlXCIpO1xuICAgIHRvRG9EYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1kYXRlXCIpO1xuICAgIGNvbnN0IHN1Ym1pdFRvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3VibWl0VG9Eb0J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIHN1Ym1pdFRvRG9CdG4uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBzdWJtaXRUb0RvQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0XCIpO1xuICAgIHN1Ym1pdFRvRG9CdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIFxuICAgIGNvbnN0IGFkZFRvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRvRG9CdG4uY2xhc3NMaXN0LmFkZChcImFkZFRvRG9CdG5cIik7XG4gICAgYWRkVG9Eb0J0bi50ZXh0Q29udGVudCA9IFwiKyBOZXcgdG8tZG9cIjtcblxuICAgIGNvbnN0IHRhc2tBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQXJlYS5jbGFzc0xpc3QuYWRkKFwidGFzay1hcmVhXCIpO1xuICAgIHRhc2tBcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza0FyZWFcIik7XG5cbiAgICB0b0RvQmxvY2suYXBwZW5kQ2hpbGQodG9Eb0Zvcm0pO1xuICAgIHRvRG9EaXNwbGF5LmFwcGVuZENoaWxkKGFkZFRvRG9CdG4pO1xuICAgIHRvRG9EaXNwbGF5LmFwcGVuZENoaWxkKHRvRG9CbG9jayk7XG4gICAgaXRlbURpc3BsYXkuYXBwZW5kQ2hpbGQodG9Eb0Rpc3BsYXkpO1xuICAgIGl0ZW1EaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tBcmVhKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGlzcGxheSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb1RpdGxlTGFiZWwpO1xuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHRvRG9UaXRsZSk7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb0RhdGVMYWJlbCk7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb0RhdGUpO1xuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFRvRG9CdG4pO1xuXG4gICAgYWRkVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0b0RvQmxvY2suc3R5bGUuZGlzcGxheSA9PSBcImlubGluZVwiKSB7XG4gICAgICAgICAgICB0b0RvQmxvY2suc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9Eb0Jsb2NrLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHN1Ym1pdFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZVwiKTtcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGF0ZVwiKTtcbiAgICAgICAgY3JlYXRlVG9Ebyh0aXRsZS52YWx1ZSwgZGF0ZS52YWx1ZSk7XG4gICAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHVwZGF0ZVBhZ2UodGFza0FyZWEpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrQXJlYSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1EaXNwbGF5KVxuICAgIH0pXG5cblxuICAgIHVwZGF0ZVBhZ2UodGFza0FyZWEpO1xufVxuXG5cblxuXG5leHBvcnQge3N0cnVjdHVyZX0iLCJsZXQgdG9Eb0xpc3QgPSBbXTtcblxuZnVuY3Rpb24gVGFzayh0aXRsZSwgZGF0ZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZSxcbiAgICB0aGlzLmRhdGUgPSBkYXRlXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlVG9Ebyh0aXRsZSwgZGF0ZSkge1xuICAgIGxldCB0b0RvID0gbmV3IFRhc2sodGl0bGUsIGRhdGUpO1xuICAgIHRvRG9MaXN0LnB1c2godG9Ebyk7XG4gICAgY29uc29sZS5sb2codG9Eb0xpc3QpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQYWdlKHBhZ2UpIHtcbiAgICBwYWdlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9Eb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRpdlwiKVxuICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIGkpO1xuICAgICAgICBsZXQgdGl0bGVPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGl0bGVPdXRwdXQudGV4dENvbnRlbnQgPSB0b0RvTGlzdFtpXS50aXRsZTtcbiAgICAgICAgbGV0IGRhdGVPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGF0ZU91dHB1dC50ZXh0Q29udGVudCA9IHRvRG9MaXN0W2ldLmRhdGU7XG4gICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVCdG4uZGF0YXNldC5wb3NpdGlvbiA9IGk7XG4gICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGl0bGVPdXRwdXQpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRhdGVPdXRwdXQpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIHBhZ2UuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbiAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlbGV0ZUJ0bi5kYXRhc2V0LnBvc2l0aW9uKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdG9Eb0xpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaiA9PSBkZWxldGVCdG4uZGF0YXNldC5wb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0b0RvTGlzdC5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlUGFnZShwYWdlKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG59XG5cbmV4cG9ydCB7Y3JlYXRlVG9EbywgdXBkYXRlUGFnZX1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge3N0cnVjdHVyZX0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuXG5zdHJ1Y3R1cmUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=