/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkop_restaurant_page"] = self["webpackChunkop_restaurant_page"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const homePage = (() => {\n    let content = document.querySelector(\"#content\");\n\n    function stuff() {\n        const element = document.createElement('div');\n        element.classList.add(\"content\");\n        return element;\n      };\n    function createDiv(text) {\n        const div = document.createElement('div');\n        div.innerText = `${text}`\n        return div;\n    };\n      content.appendChild(createDiv('hello'));\n}\n)();\n\n//# sourceURL=webpack://op-restaurant-page/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);