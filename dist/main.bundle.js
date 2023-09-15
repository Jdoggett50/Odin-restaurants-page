/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dessert-style.js":
/*!******************************!*\
  !*** ./src/dessert-style.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDessertTab);

function getDessertTab (){
    // const div = document.createElement('div');
    console.log('I\'m the dessert tab function button');
}

/***/ }),

/***/ "./src/drink-style.js":
/*!****************************!*\
  !*** ./src/drink-style.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDrinkTab);

function getDrinkTab (){
    // const div = document.createElement('div');
    console.log('I\'m the drink tab function button');
}

/***/ }),

/***/ "./src/menu-style.js":
/*!***************************!*\
  !*** ./src/menu-style.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMenuTab);

function getMenuTab (){
    // const div = document.createElement('div');
    console.log('I\'m the menu tab function button');
}

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadDom);

function loadDom(){
    const p = document.createElement('p');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    h1.textContent = "Tropical Paradise";
    p.textContent = "welcome to tropical paradise where our drinks are as fresh as the island breeze!";
    
    const domArr = [h1,p,img];
    return domArr 
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
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _menu_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-style */ "./src/menu-style.js");
/* harmony import */ var _dessert_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dessert-style */ "./src/dessert-style.js");
/* harmony import */ var _drink_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drink-style */ "./src/drink-style.js");





//this file is responsible for the tabbing behavior. The other files are resoinsible for creating showing the tabs.
//there needs to be a default 

//there needs to be a templating function that says "I'm appending this to the dom" 

//create 3 different buttons and have each button log what their supposed to be doing to the dom.

const content = document.querySelector('#content');

const dessertTab = document.createElement('button');
dessertTab.textContent = "dessert";
dessertTab.id = "dessert-tab";
content.append(dessertTab);

const drinkTab = document.createElement('button');
drinkTab.textContent = "drinks";
drinkTab.id = "drink-tab";
content.append(drinkTab);

const menuTab = document.createElement('button');
menuTab.textContent = "menu";
menuTab.id = "menu-tab";
content.append(menuTab);


menuTab.addEventListener('click',_menu_style__WEBPACK_IMPORTED_MODULE_1__["default"]);
dessertTab.addEventListener('click', _dessert_style__WEBPACK_IMPORTED_MODULE_2__["default"]);
drinkTab.addEventListener('click', _drink_style__WEBPACK_IMPORTED_MODULE_3__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZSxhQUFhOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNMQSxpRUFBZSxXQUFXOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNMQSxpRUFBZSxVQUFVOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNMQSxpRUFBZSxPQUFPOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDWEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNHO0FBQ007QUFDSjs7QUFFdkM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsaUNBQWlDLG1EQUFVO0FBQzNDLHFDQUFxQyxzREFBYTtBQUNsRCxtQ0FBbUMsb0RBQVcsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudHMtcGFnZS8uL3NyYy9kZXNzZXJ0LXN0eWxlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHMtcGFnZS8uL3NyYy9kcmluay1zdHlsZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRzLXBhZ2UvLi9zcmMvbWVudS1zdHlsZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRzLXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHMtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRzLXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHMtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHMtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHMtcGFnZS8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGdldERlc3NlcnRUYWJcblxuZnVuY3Rpb24gZ2V0RGVzc2VydFRhYiAoKXtcbiAgICAvLyBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zb2xlLmxvZygnSVxcJ20gdGhlIGRlc3NlcnQgdGFiIGZ1bmN0aW9uIGJ1dHRvbicpO1xufSIsImV4cG9ydCBkZWZhdWx0IGdldERyaW5rVGFiXG5cbmZ1bmN0aW9uIGdldERyaW5rVGFiICgpe1xuICAgIC8vIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnNvbGUubG9nKCdJXFwnbSB0aGUgZHJpbmsgdGFiIGZ1bmN0aW9uIGJ1dHRvbicpO1xufSIsImV4cG9ydCBkZWZhdWx0IGdldE1lbnVUYWJcblxuZnVuY3Rpb24gZ2V0TWVudVRhYiAoKXtcbiAgICAvLyBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zb2xlLmxvZygnSVxcJ20gdGhlIG1lbnUgdGFiIGZ1bmN0aW9uIGJ1dHRvbicpO1xufSIsImV4cG9ydCBkZWZhdWx0IGxvYWREb21cblxuZnVuY3Rpb24gbG9hZERvbSgpe1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGgxLnRleHRDb250ZW50ID0gXCJUcm9waWNhbCBQYXJhZGlzZVwiO1xuICAgIHAudGV4dENvbnRlbnQgPSBcIndlbGNvbWUgdG8gdHJvcGljYWwgcGFyYWRpc2Ugd2hlcmUgb3VyIGRyaW5rcyBhcmUgYXMgZnJlc2ggYXMgdGhlIGlzbGFuZCBicmVlemUhXCI7XG4gICAgXG4gICAgY29uc3QgZG9tQXJyID0gW2gxLHAsaW1nXTtcbiAgICByZXR1cm4gZG9tQXJyIFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWREb20gZnJvbSBcIi4vcGFnZS1sb2FkXCI7XG5pbXBvcnQgZ2V0TWVudVRhYiBmcm9tICcuL21lbnUtc3R5bGUnXG5pbXBvcnQgZ2V0RGVzc2VydFRhYiBmcm9tICcuL2Rlc3NlcnQtc3R5bGUnXG5pbXBvcnQgZ2V0RHJpbmtUYWIgZnJvbSAnLi9kcmluay1zdHlsZSdcblxuLy90aGlzIGZpbGUgaXMgcmVzcG9uc2libGUgZm9yIHRoZSB0YWJiaW5nIGJlaGF2aW9yLiBUaGUgb3RoZXIgZmlsZXMgYXJlIHJlc29pbnNpYmxlIGZvciBjcmVhdGluZyBzaG93aW5nIHRoZSB0YWJzLlxuLy90aGVyZSBuZWVkcyB0byBiZSBhIGRlZmF1bHQgXG5cbi8vdGhlcmUgbmVlZHMgdG8gYmUgYSB0ZW1wbGF0aW5nIGZ1bmN0aW9uIHRoYXQgc2F5cyBcIkknbSBhcHBlbmRpbmcgdGhpcyB0byB0aGUgZG9tXCIgXG5cbi8vY3JlYXRlIDMgZGlmZmVyZW50IGJ1dHRvbnMgYW5kIGhhdmUgZWFjaCBidXR0b24gbG9nIHdoYXQgdGhlaXIgc3VwcG9zZWQgdG8gYmUgZG9pbmcgdG8gdGhlIGRvbS5cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmNvbnN0IGRlc3NlcnRUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmRlc3NlcnRUYWIudGV4dENvbnRlbnQgPSBcImRlc3NlcnRcIjtcbmRlc3NlcnRUYWIuaWQgPSBcImRlc3NlcnQtdGFiXCI7XG5jb250ZW50LmFwcGVuZChkZXNzZXJ0VGFiKTtcblxuY29uc3QgZHJpbmtUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmRyaW5rVGFiLnRleHRDb250ZW50ID0gXCJkcmlua3NcIjtcbmRyaW5rVGFiLmlkID0gXCJkcmluay10YWJcIjtcbmNvbnRlbnQuYXBwZW5kKGRyaW5rVGFiKTtcblxuY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xubWVudVRhYi50ZXh0Q29udGVudCA9IFwibWVudVwiO1xubWVudVRhYi5pZCA9IFwibWVudS10YWJcIjtcbmNvbnRlbnQuYXBwZW5kKG1lbnVUYWIpO1xuXG5cbm1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGdldE1lbnVUYWIpO1xuZGVzc2VydFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldERlc3NlcnRUYWIpO1xuZHJpbmtUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXREcmlua1RhYik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9