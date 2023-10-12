/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/tab-style/dessert.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/tab-style/dessert.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/tab-style/drink.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/tab-style/drink.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/tab-style/menu.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/tab-style/menu.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.menu-container {
    display: grid;
    grid-row: 1 / 4;
    grid-template-areas: "app app app"
                         "special special special"
                         "sides sides sides";
    grid-template-rows: repeat(3, 20rem);
    grid-gap: 3rem;
    margin-top: 5rem;
}

.app-container {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: repeat(3, minmax(150px, 1fr));
    grid-gap: 3rem;
    grid-area: app;
}

.app-h2 {
    display: flex;
    grid-column: 1 / 4;
    justify-content: center;
}

.app-menu-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background: radial-gradient( #F4BFBBDD 10%, #9F8AC2FF);
    border-radius: 5%;
    border: 1px solid black;
}

.specials-container {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: repeat(3, minmax(150px, 1fr));
    grid-gap: 3rem;
    grid-area: special;
}

.specials-h2 {
    grid-column: 1 / 4;
    justify-self: center;
}

.special-menu-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background: radial-gradient( #F4BFBBDD 10%, #9F8AC2FF);
    border-radius: 5%;
    border: 1px solid black;
}

.sides-container {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: repeat(3, minmax(150px, 1fr));
    grid-gap: 3rem;
    grid-area: sides;
}

.sides-h2 {
    grid-column: 1 / 4;
    justify-self: center;
}

.side-menu-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: radial-gradient( #F4BFBBDD 10%, #9F8AC2FF);
    gap: 1rem;
    border-radius: 5%;
    border: 1px solid black;
}

.app-content {
    white-space: pre-line;
}

.specials-content {
    white-space: pre-line;
}

.sides-content {
    white-space: pre-line;
}`, "",{"version":3,"sources":["webpack://./src/tab-style/menu.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,eAAe;IACf;;4CAEwC;IACxC,oCAAoC;IACpC,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,oDAAoD;IACpD,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,sDAAsD;IACtD,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,oDAAoD;IACpD,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,sDAAsD;IACtD,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,oDAAoD;IACpD,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,sDAAsD;IACtD,SAAS;IACT,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":[".menu-container {\n    display: grid;\n    grid-row: 1 / 4;\n    grid-template-areas: \"app app app\"\n                         \"special special special\"\n                         \"sides sides sides\";\n    grid-template-rows: repeat(3, 20rem);\n    grid-gap: 3rem;\n    margin-top: 5rem;\n}\n\n.app-container {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: repeat(3, minmax(150px, 1fr));\n    grid-gap: 3rem;\n    grid-area: app;\n}\n\n.app-h2 {\n    display: flex;\n    grid-column: 1 / 4;\n    justify-content: center;\n}\n\n.app-menu-items {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    background: radial-gradient( #F4BFBBDD 10%, #9F8AC2FF);\n    border-radius: 5%;\n    border: 1px solid black;\n}\n\n.specials-container {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: repeat(3, minmax(150px, 1fr));\n    grid-gap: 3rem;\n    grid-area: special;\n}\n\n.specials-h2 {\n    grid-column: 1 / 4;\n    justify-self: center;\n}\n\n.special-menu-items {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    background: radial-gradient( #F4BFBBDD 10%, #9F8AC2FF);\n    border-radius: 5%;\n    border: 1px solid black;\n}\n\n.sides-container {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: repeat(3, minmax(150px, 1fr));\n    grid-gap: 3rem;\n    grid-area: sides;\n}\n\n.sides-h2 {\n    grid-column: 1 / 4;\n    justify-self: center;\n}\n\n.side-menu-items {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: radial-gradient( #F4BFBBDD 10%, #9F8AC2FF);\n    gap: 1rem;\n    border-radius: 5%;\n    border: 1px solid black;\n}\n\n.app-content {\n    white-space: pre-line;\n}\n\n.specials-content {\n    white-space: pre-line;\n}\n\n.sides-content {\n    white-space: pre-line;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/tab-style/page-load.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/tab-style/page-load.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/photos/tropical-scene.jpg */ "./src/assets/photos/tropical-scene.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* basically the home styling for the webpage */
body, * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

#content {
    display: grid;
    grid-template-rows: 100px 15fr 50px;
    grid-template-columns: 1fr 5fr 1fr;
    width: 100vw;
}

body {
    display: flex;
    flex-direction: column;
    overflow: hidden auto; 
}

header {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 2fr repeat(3, 2fr);
    z-index: 2;
    grid-row: 1 / 2;
    grid-column: 1 / 4;
    background: linear-gradient(#1A0735EF,#FEC0ABCC);
    border-bottom: 2px solid black;
}

.header-selection {
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid black;
    font-size: larger;
}

h1 {
    display: flex;
    justify-content: center;
    align-items: center;
}

.home-info-h2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.header-selection:hover{
    background: linear-gradient(#1A0735AA, #FEC0ABAA);
    cursor: grab;
}

.scrolling-container {
    display: grid;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    z-index: 2;
}

.background-container {
    grid-row: 1 / -1;
    grid-column: 1 / 4;
    position: sticky;
    top: 0;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    width: 100vw;
}

.home-info-container {
    grid-row: 2 / 3;
}

`, "",{"version":3,"sources":["webpack://./src/tab-style/page-load.css"],"names":[],"mappings":"AAAA,+CAA+C;AAC/C;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,yCAAyC;IACzC,UAAU;IACV,eAAe;IACf,kBAAkB;IAClB,gDAAgD;IAChD,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,4BAA4B;IAC5B,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,iDAAiD;IACjD,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,MAAM;IACN,6DAA8D;IAC9D,0BAA0B;IAC1B,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["/* basically the home styling for the webpage */\nbody, * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 100px 15fr 50px;\n    grid-template-columns: 1fr 5fr 1fr;\n    width: 100vw;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    overflow: hidden auto; \n}\n\nheader {\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 2fr repeat(3, 2fr);\n    z-index: 2;\n    grid-row: 1 / 2;\n    grid-column: 1 / 4;\n    background: linear-gradient(#1A0735EF,#FEC0ABCC);\n    border-bottom: 2px solid black;\n}\n\n.header-selection {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-left: 1px solid black;\n    font-size: larger;\n}\n\nh1 {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.home-info-h2 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.header-selection:hover{\n    background: linear-gradient(#1A0735AA, #FEC0ABAA);\n    cursor: grab;\n}\n\n.scrolling-container {\n    display: grid;\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    z-index: 2;\n}\n\n.background-container {\n    grid-row: 1 / -1;\n    grid-column: 1 / 4;\n    position: sticky;\n    top: 0;\n    background: url(../assets/photos/tropical-scene.jpg) no-repeat;\n    background-size: 100% 100%;\n    height: 100vh;\n    width: 100vw;\n}\n\n.home-info-container {\n    grid-row: 2 / 3;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/tab-style/dessert.css":
/*!***********************************!*\
  !*** ./src/tab-style/dessert.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dessert_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./dessert.css */ "./node_modules/css-loader/dist/cjs.js!./src/tab-style/dessert.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dessert_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dessert_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dessert_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dessert_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/tab-style/drink.css":
/*!*********************************!*\
  !*** ./src/tab-style/drink.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_drink_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./drink.css */ "./node_modules/css-loader/dist/cjs.js!./src/tab-style/drink.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_drink_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_drink_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_drink_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_drink_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/tab-style/menu.css":
/*!********************************!*\
  !*** ./src/tab-style/menu.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/tab-style/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/tab-style/page-load.css":
/*!*************************************!*\
  !*** ./src/tab-style/page-load.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_page_load_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./page-load.css */ "./node_modules/css-loader/dist/cjs.js!./src/tab-style/page-load.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_page_load_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_page_load_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_page_load_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_page_load_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/tab-build/dessert.js":
/*!**********************************!*\
  !*** ./src/tab-build/dessert.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tab_style_dessert_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tab-style/dessert.css */ "./src/tab-style/dessert.css");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dessertComponent);


function dessertComponent (){
    
    const div = document.createElement('div');
    console.log('I\'m the dessert tab function button');
}

/***/ }),

/***/ "./src/tab-build/drink.js":
/*!********************************!*\
  !*** ./src/tab-build/drink.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tab_style_drink_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tab-style/drink.css */ "./src/tab-style/drink.css");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drinkComponent);


//okay, now make these

function drinkComponent (){
    // const div = document.createElement('div');
    console.log('I\'m the drink tab function button');
}

/***/ }),

/***/ "./src/tab-build/menu.js":
/*!*******************************!*\
  !*** ./src/tab-build/menu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendGeneratedDivs: () => (/* binding */ appendGeneratedDivs),
/* harmony export */   appendGeneratedH2: () => (/* binding */ appendGeneratedH2),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tab_style_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tab-style/menu.css */ "./src/tab-style/menu.css");
 

//one function to generate the component

function menuComponent() {
    const scrollingContainer = document.querySelector('.scrolling-container');
    scrollingContainer.textContent = '';

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    scrollingContainer.appendChild(menuContainer);
    generateMenuItems();
}

// generates internal structure of the menu
function generateMenuItems() {
    //containers and container classes
    const appContainer = document.createElement('div');
    appContainer.classList.add('app-container');
    const specialsContainer = document.createElement('div');
    specialsContainer.classList.add('specials-container');
    const sidesContainer = document.createElement('div');
    sidesContainer.classList.add('sides-container');
    
    //appetizer section
    appendGeneratedH2(appContainer, 1, 'app-h2');
    appendGeneratedDivs(appContainer, 3, 'app-menu-items');

    //specials section
    appendGeneratedH2(specialsContainer, 1, 'specials-h2');
    appendGeneratedDivs(specialsContainer, 3, 'special-menu-items');

    //sides section
    appendGeneratedH2(sidesContainer, 1, 'sides-h2');
    appendGeneratedDivs(sidesContainer, 3, 'side-menu-items');
    
    //append children to menuContainer
    const menuContainer = document.querySelector('.menu-container');
    menuContainer.appendChild(appContainer);
    menuContainer.appendChild(specialsContainer);
    menuContainer.appendChild(sidesContainer);

    //h2s inside of menu items
    setAppetizerH2();
    setSpecialH2();
    setSidesH2();
    setAppsContentContainer();
    setSpecialsContentContainer();
    setSidesContentContainer();
}

function setAppetizerH2(){
    const appH2 = document.querySelector('.app-h2');
    appH2.textContent = 'Appetizers';
}

function setSpecialH2(){
    const specialsH2 = document.querySelector('.specials-h2');
    specialsH2.textContent = 'Specials';
}

function setSidesH2(){
    const sidesH2 = document.querySelector('.sides-h2');
    sidesH2.textContent = 'Sides';
}

function setAppsContentContainer() {
    const appMenuItems = document.querySelectorAll('.app-menu-items');
    appMenuItems.forEach(el => appendGeneratedDivs(el, 2, 'app-content'));
    giveDiffClasses('app-content');
    setAppTextBox1();
    setAppTextBox2();
    setAppTextBox3();
}

function setSpecialsContentContainer() {
    const specialsMenuItems = document.querySelectorAll('.special-menu-items');
    specialsMenuItems.forEach(el => appendGeneratedDivs(el, 2, 'specials-content'));
    giveDiffClasses('specials-content');
    setSpecialsTextBox1();
    setSpecialsTextBox2();
    setSpecialsTextBox3();
}

function setSidesContentContainer() {
    const sideMenuItems = document.querySelectorAll('.side-menu-items');
    sideMenuItems.forEach(el => appendGeneratedDivs(el, 2, 'sides-content'));
    giveDiffClasses('sides-content');
    setSidesTextBox1();
    setSidesTextBox2();
    setSidesTextBox3();
}

function setAppTextBox1() {
    const br = document.createElement('br');
    const appContent0 = document.querySelector('.app-content-0');
    const appContent1 = document.querySelector('.app-content-1');
    const h3 = document.createElement('h3');
    const p = document. createElement('p');
    appContent0.appendChild(h3).textContent = 'Lorem Ipsum \r\n Delight';
    appContent1.appendChild(p).textContent = "Fusce ac ligula vel quam blandit efficitur. Lorem ipsum dip into our special blend of crispy wontons filled with lorem ipsum.";
}

function setAppTextBox2() {
    const appContent2 = document.querySelector('.app-content-2');
    const appContent3 = document.querySelector('.app-content-3');
    const h3 = document.createElement('h3');
    const p = document. createElement('p');
    appContent2.appendChild(h3).textContent = "Quisque Vestibulum \r\n Tasting Platter";
    appContent3.appendChild(p).textContent = "Nullam aliquet eros ac metus cursus, vel condimentum justo tincidunt. Lorem ipsum crunch on our delectable assortment of lorem ipsum-infused crispy bites.";
}

function setAppTextBox3() {
    const appContent4 = document.querySelector('.app-content-4');
    const appContent5 = document.querySelector('.app-content-5');
    const h3 = document.createElement('h3');
    const p = document. createElement('p');
    appContent4.appendChild(h3).textContent = "Quam Blandit \r\n Quinoa Bites";
    appContent5.appendChild(p).textContent = "Crispy quinoa and cheese bites, served with a tangy Lorem Ipsum aioli. Duis non tortor a lectus consectetur fringilla. Sed lobortis arcu ut vestibulum elementum.";
}

function setSpecialsTextBox1() {
    const specialsContent0 = document.querySelector('.specials-content-0');
    const specialsContent1 = document.querySelector('.specials-content-1');
    const h3 = document.createElement('h3');
    const p = document. createElement('p');
    specialsContent0.appendChild(h3).textContent =  'Lorem Ipsum \r\n Bliss Burger'
    specialsContent1.appendChild(p).textContent = 'A mouthwatering blend of char-grilled Lorem Ipsum-infused beef patty, topped with Lorem Ipsum bacon jam, aged cheddar, and crisp lettuce on a brioche bun. Sed vitae neque a arcu eleifend ullamcorper. Nullam sagittis ipsum ut semper bibendum.'
}

function setSpecialsTextBox2 () {
    const specialsContent2 = document.querySelector('.specials-content-2');
    const specialsContent3 = document.querySelector('.specials-content-3');
    const h3 = document.createElement('h3');
    const p = document. createElement('p');
    specialsContent2.appendChild(h3).textContent = 'Quisque Eget \r\n Elegance Risotto';
    specialsContent3.appendChild(p).textContent = 'Creamy Arborio rice cooked to perfection, mixed with wild mushrooms, truffle oil, and a sprinkle of Lorem Ipsum dust. In hendrerit felis eu lorem ipsum creaminess. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';
}

function setSpecialsTextBox3 () {
    const specialsContent4 = document.querySelector('.specials-content-4');
    const specialsContent5 = document.querySelector('.specials-content-5');
    const h3 = document.createElement('h3');
    const p = document. createElement('p');
    specialsContent4.appendChild(h3).textContent = 'Lorem Ipsum \r\n Fusion Tacos';
    specialsContent5.appendChild(p).textContent = 'A culinary adventure with Korean BBQ-inspired Lorem Ipsum-marinated grilled chicken, pickled slaw, and spicy Lorem Ipsum aioli, all nestled in warm corn tortillas. Phasellus hendrerit turpis vitae libero bibendum, eu pellentesque sapien fermentum. Ut feugiat ligula id ligula luctus, non ullamcorper dolor hendrerit.';
}

function setSidesTextBox1() {
    const sidesContent4 = document.querySelector('.sides-content-0');
    const sidesContent5 = document.querySelector('.sides-content-1');
    const h3 = document.createElement('h3');
    const p = document. createElement('p');
    sidesContent4.appendChild(h3).textContent = 'Quisque Ipsum \r\n Garlic Knots';
    sidesContent5.appendChild(p).textContent = 'Soft and pillowy garlic knots brushed with Lorem Ipsum garlic butter, served with a side of marinara sauce. Duis non tortor a lectus consectetur fringilla. Sed lobortis arcu ut vestibulum elementum.';
}

function setSidesTextBox2() {
    const sidesContent4 = document.querySelector('.sides-content-2');
    const sidesContent5 = document.querySelector('.sides-content-3');
    const h3 = document.createElement('h3');
    const p = document. createElement('p');
    sidesContent4.appendChild(h3).textContent = 'Sed Ipsum Mediterranean \r\n Couscous Salad';
    sidesContent5.appendChild(p).textContent = 'A refreshing salad with fluffy couscous, cherry tomatoes, cucumber, feta cheese, and a tangy Lorem Ipsum vinaigrette. Vestibulum ac aliquam nisl. Sed vitae neque a arcu eleifend ullamcorper. Nullam sagittis ipsum ut semper bibendum.';
}

function setSidesTextBox3() {
    const sidesContent4 = document.querySelector('.sides-content-4');
    const sidesContent5 = document.querySelector('.sides-content-5');
    const h3 = document.createElement('h3');
    const p = document. createElement('p');
    sidesContent4.appendChild(h3).textContent = 'Lorem Ipsum Parmesan \r\n Truffle Fries';
    sidesContent5.appendChild(p).textContent = 'Crispy golden fries tossed with Parmesan cheese and a drizzle of Lorem Ipsum-infused truffle oil. Sed vitae neque a arcu eleifend ullamcorper. Nullam sagittis ipsum ut semper bibendum.';
}

function giveDiffClasses(elements) {
    const selection = document.querySelectorAll(`.${elements}`);
    for(let i = 0; i < selection.length; i++){
        selection[i].classList.add(`${elements}-${i}`);
    }
}

function appendGeneratedH2(parent, numOfH2s, className){
    const h2 = document.createElement('h2');
    if(className){
        h2.classList.add(className);
    }
    for(let i = 0; i < numOfH2s; i++){
        parent.appendChild(h2.cloneNode(true));
    }
}

function appendGeneratedDivs(parent,numOfDivs,className){
    const div = document.createElement('div');
    div.classList.add(className);
    for(let i = 0; i < numOfDivs; i++){
        parent.appendChild(div.cloneNode(true));
    };
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuComponent);

/***/ }),

/***/ "./src/tab-build/page-load.js":
/*!************************************!*\
  !*** ./src/tab-build/page-load.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tab_style_page_load_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tab-style/page-load.css */ "./src/tab-style/page-load.css");


const content = document.querySelector('#content');

//this will be the layout for the entire site. 
function pageLoad(el){
    //header and its contents
    const drinkTab = document.createElement('div');
    const dessertTab = document.createElement('div');
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const menuTab = document.createElement('div');
    
    //page-load content
    const homeInfoContainer = document.createElement('div');
    const homeInfoH2 = document.createElement('h2');
    homeInfoH2.classList.add('home-info-h2');
    const contactLinkAnchor = document.createElement('a');
    contactLinkAnchor.textContent = "Contact Us";
    contactLinkAnchor.title = "Contact";
    contactLinkAnchor.classList.add('contact-link');
    contactLinkAnchor.href = "";

    //image container
    const backgroundContainer = document.createElement('div');
    backgroundContainer.classList.add('background-container');
    
    //scrolling content container
    const scrollingContainer = document.createElement('div');
    scrollingContainer.classList.add('scrolling-container');
    
    //homeInfo contains the restaurant description
    homeInfoH2.textContent = `Welcome to my online shop! We accept sudo pay and bash bucks, this currency, that currency, tweedlebucks and casheroos! We cater as well!`
    homeInfoH2.append(contactLinkAnchor);
    homeInfoContainer.classList.add('home-info-container');
    h1.textContent = "Tropical Paradise";
    
    menuTab.textContent = "Menu";
    menuTab.classList.add('header-selection');
    menuTab.classList.add('menu-tab');

    drinkTab.textContent = "Drinks";
    drinkTab.classList.add('header-selection');
    drinkTab.classList.add('drinks-tab');

    dessertTab.textContent = "Desserts";
    dessertTab.classList.add('header-selection');
    dessertTab.classList.add('dessert-tab');

    const headerArr = [h1,menuTab,drinkTab,dessertTab];
    headerArr.forEach(i => {
        header.appendChild(i);
    })

    const contentArr = [header,backgroundContainer,scrollingContainer];
    
    scrollingContainer.appendChild(homeInfoContainer);
   
    homeInfoContainer.appendChild(homeInfoH2);
    return contentArr.forEach(i => {
        el.appendChild(i);
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);


/***/ }),

/***/ "./src/assets/photos/tropical-scene.jpg":
/*!**********************************************!*\
  !*** ./src/assets/photos/tropical-scene.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd0c58460bae8d28f4b1.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/tab-build/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ "./src/tab-build/page-load.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/tab-build/menu.js");
/* harmony import */ var _drink_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drink.js */ "./src/tab-build/drink.js");
/* harmony import */ var _dessert_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dessert.js */ "./src/tab-build/dessert.js");






(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_page_load_js__WEBPACK_IMPORTED_MODULE_0__.content);

const menuButton = document.querySelector('.menu-tab');
menuButton.addEventListener('click',() => {
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiQSxpRUFBZSxnQkFBZ0IsRUFBQztBQUNvQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUEEsaUVBQWUsY0FBYyxFQUFDO0FBQ2E7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1IrQjs7QUFFL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0QsU0FBUztBQUM3RCxtQkFBbUIsc0JBQXNCO0FBQ3pDLHNDQUFzQyxTQUFTLEdBQUcsRUFBRTtBQUNwRDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBOzs7O0FBSUEsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7OztBQzFNUTs7QUFFcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRXhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0F1QztBQUNEO0FBQ0E7QUFDRTtBQUNJOztBQUU1Qyx5REFBUSxDQUFDLGtEQUFPOztBQUVoQjtBQUNBO0FBQ0EsSUFBSSxvREFBYTtBQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cy1wYWdlLy4vc3JjL3RhYi1zdHlsZS9kZXNzZXJ0LmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRzLXBhZ2UvLi9zcmMvdGFiLXN0eWxlL2RyaW5rLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRzLXBhZ2UvLi9zcmMvdGFiLXN0eWxlL21lbnUuY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHMtcGFnZS8uL3NyYy90YWItc3R5bGUvcGFnZS1sb2FkLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRzLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHMtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cy1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cy1wYWdlLy4vc3JjL3RhYi1zdHlsZS9kZXNzZXJ0LmNzcz8xYWJkIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHMtcGFnZS8uL3NyYy90YWItc3R5bGUvZHJpbmsuY3NzPzkzMGUiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cy1wYWdlLy4vc3JjL3RhYi1zdHlsZS9tZW51LmNzcz9lZWNhIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHMtcGFnZS8uL3NyYy90YWItc3R5bGUvcGFnZS1sb2FkLmNzcz8xMjc5Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHMtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRzLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHMtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRzLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cy1wYWdlLy4vc3JjL3RhYi1idWlsZC9kZXNzZXJ0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHMtcGFnZS8uL3NyYy90YWItYnVpbGQvZHJpbmsuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cy1wYWdlLy4vc3JjL3RhYi1idWlsZC9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHMtcGFnZS8uL3NyYy90YWItYnVpbGQvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHMtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRzLXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cy1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRzLXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRzLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRzLXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRzLXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cy1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHMtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cy1wYWdlLy4vc3JjL3RhYi1idWlsZC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubWVudS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1yb3c6IDEgLyA0O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYXBwIGFwcCBhcHBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BlY2lhbCBzcGVjaWFsIHNwZWNpYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFwic2lkZXMgc2lkZXMgc2lkZXNcIjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAyMHJlbSk7XG4gICAgZ3JpZC1nYXA6IDNyZW07XG4gICAgbWFyZ2luLXRvcDogNXJlbTtcbn1cblxuLmFwcC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMTUwcHgsIDFmcikpO1xuICAgIGdyaWQtZ2FwOiAzcmVtO1xuICAgIGdyaWQtYXJlYTogYXBwO1xufVxuXG4uYXBwLWgyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFwcC1tZW51LWl0ZW1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCAjRjRCRkJCREQgMTAlLCAjOUY4QUMyRkYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uc3BlY2lhbHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDE1MHB4LCAxZnIpKTtcbiAgICBncmlkLWdhcDogM3JlbTtcbiAgICBncmlkLWFyZWE6IHNwZWNpYWw7XG59XG5cbi5zcGVjaWFscy1oMiB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uc3BlY2lhbC1tZW51LWl0ZW1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCAjRjRCRkJCREQgMTAlLCAjOUY4QUMyRkYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uc2lkZXMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDE1MHB4LCAxZnIpKTtcbiAgICBncmlkLWdhcDogM3JlbTtcbiAgICBncmlkLWFyZWE6IHNpZGVzO1xufVxuXG4uc2lkZXMtaDIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLnNpZGUtbWVudS1pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCAjRjRCRkJCREQgMTAlLCAjOUY4QUMyRkYpO1xuICAgIGdhcDogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmFwcC1jb250ZW50IHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG5cbi5zcGVjaWFscy1jb250ZW50IHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG5cbi5zaWRlcy1jb250ZW50IHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdGFiLXN0eWxlL21lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZjs7NENBRXdDO0lBQ3hDLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixvREFBb0Q7SUFDcEQsY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxzREFBc0Q7SUFDdEQsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsb0RBQW9EO0lBQ3BELGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHNEQUFzRDtJQUN0RCxpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixvREFBb0Q7SUFDcEQsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixzREFBc0Q7SUFDdEQsU0FBUztJQUNULGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1lbnUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDEgLyA0O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiYXBwIGFwcCBhcHBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJzcGVjaWFsIHNwZWNpYWwgc3BlY2lhbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcInNpZGVzIHNpZGVzIHNpZGVzXFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMjByZW0pO1xcbiAgICBncmlkLWdhcDogM3JlbTtcXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcXG59XFxuXFxuLmFwcC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgICBncmlkLWdhcDogM3JlbTtcXG4gICAgZ3JpZC1hcmVhOiBhcHA7XFxufVxcblxcbi5hcHAtaDIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYXBwLW1lbnUtaXRlbXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCggI0Y0QkZCQkREIDEwJSwgIzlGOEFDMkZGKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc3BlY2lhbHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gICAgZ3JpZC1nYXA6IDNyZW07XFxuICAgIGdyaWQtYXJlYTogc3BlY2lhbDtcXG59XFxuXFxuLnNwZWNpYWxzLWgyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNwZWNpYWwtbWVudS1pdGVtcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCAjRjRCRkJCREQgMTAlLCAjOUY4QUMyRkYpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zaWRlcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgICBncmlkLWdhcDogM3JlbTtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlcztcXG59XFxuXFxuLnNpZGVzLWgyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGUtbWVudS1pdGVtcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCggI0Y0QkZCQkREIDEwJSwgIzlGOEFDMkZGKTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5hcHAtY29udGVudCB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuXFxuLnNwZWNpYWxzLWNvbnRlbnQge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxufVxcblxcbi5zaWRlcy1jb250ZW50IHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9waG90b3MvdHJvcGljYWwtc2NlbmUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBiYXNpY2FsbHkgdGhlIGhvbWUgc3R5bGluZyBmb3IgdGhlIHdlYnBhZ2UgKi9cbmJvZHksICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMTVmciA1MHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvOyBcbn1cblxuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIHJlcGVhdCgzLCAyZnIpO1xuICAgIHotaW5kZXg6IDI7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzFBMDczNUVGLCNGRUMwQUJDQyk7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4uaGVhZGVyLXNlbGVjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbmgxIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ob21lLWluZm8taDIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGVhZGVyLXNlbGVjdGlvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzFBMDczNUFBLCAjRkVDMEFCQUEpO1xuICAgIGN1cnNvcjogZ3JhYjtcbn1cblxuLnNjcm9sbGluZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uYmFja2dyb3VuZC1jb250YWluZXIge1xuICAgIGdyaWQtcm93OiAxIC8gLTE7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG59XG5cbi5ob21lLWluZm8tY29udGFpbmVyIHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RhYi1zdHlsZS9wYWdlLWxvYWQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLCtDQUErQztBQUMvQztJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix5Q0FBeUM7SUFDekMsVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0RBQWdEO0lBQ2hELDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLDZEQUE4RDtJQUM5RCwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGJhc2ljYWxseSB0aGUgaG9tZSBzdHlsaW5nIGZvciB0aGUgd2VicGFnZSAqL1xcbmJvZHksICoge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxNWZyIDUwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBoaWRkZW4gYXV0bzsgXFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciByZXBlYXQoMywgMmZyKTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMUEwNzM1RUYsI0ZFQzBBQkNDKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uaGVhZGVyLXNlbGVjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuaDEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtaW5mby1oMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLXNlbGVjdGlvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMxQTA3MzVBQSwgI0ZFQzBBQkFBKTtcXG4gICAgY3Vyc29yOiBncmFiO1xcbn1cXG5cXG4uc2Nyb2xsaW5nLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uYmFja2dyb3VuZC1jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMSAvIC0xO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9waG90b3MvdHJvcGljYWwtc2NlbmUuanBnKSBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5ob21lLWluZm8tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVzc2VydC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rlc3NlcnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RyaW5rLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZHJpbmsuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWdlLWxvYWQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWdlLWxvYWQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBkZXNzZXJ0Q29tcG9uZW50O1xuaW1wb3J0IGRlc3NlcnRTdHlsZSBmcm9tICcuLi90YWItc3R5bGUvZGVzc2VydC5jc3MnO1xuXG5mdW5jdGlvbiBkZXNzZXJ0Q29tcG9uZW50ICgpe1xuICAgIFxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnNvbGUubG9nKCdJXFwnbSB0aGUgZGVzc2VydCB0YWIgZnVuY3Rpb24gYnV0dG9uJyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZHJpbmtDb21wb25lbnQ7XG5pbXBvcnQgZHJpbmsgZnJvbSAnLi4vdGFiLXN0eWxlL2RyaW5rLmNzcyc7XG5cbi8vb2theSwgbm93IG1ha2UgdGhlc2VcblxuZnVuY3Rpb24gZHJpbmtDb21wb25lbnQgKCl7XG4gICAgLy8gY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc29sZS5sb2coJ0lcXCdtIHRoZSBkcmluayB0YWIgZnVuY3Rpb24gYnV0dG9uJyk7XG59IiwiaW1wb3J0ICcuLi90YWItc3R5bGUvbWVudS5jc3MnOyBcblxuLy9vbmUgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgdGhlIGNvbXBvbmVudFxuXG5mdW5jdGlvbiBtZW51Q29tcG9uZW50KCkge1xuICAgIGNvbnN0IHNjcm9sbGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxpbmctY29udGFpbmVyJyk7XG4gICAgc2Nyb2xsaW5nQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuICAgIHNjcm9sbGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgICBnZW5lcmF0ZU1lbnVJdGVtcygpO1xufVxuXG4vLyBnZW5lcmF0ZXMgaW50ZXJuYWwgc3RydWN0dXJlIG9mIHRoZSBtZW51XG5mdW5jdGlvbiBnZW5lcmF0ZU1lbnVJdGVtcygpIHtcbiAgICAvL2NvbnRhaW5lcnMgYW5kIGNvbnRhaW5lciBjbGFzc2VzXG4gICAgY29uc3QgYXBwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXBwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FwcC1jb250YWluZXInKTtcbiAgICBjb25zdCBzcGVjaWFsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwZWNpYWxzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NwZWNpYWxzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHNpZGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZXMtY29udGFpbmVyJyk7XG4gICAgXG4gICAgLy9hcHBldGl6ZXIgc2VjdGlvblxuICAgIGFwcGVuZEdlbmVyYXRlZEgyKGFwcENvbnRhaW5lciwgMSwgJ2FwcC1oMicpO1xuICAgIGFwcGVuZEdlbmVyYXRlZERpdnMoYXBwQ29udGFpbmVyLCAzLCAnYXBwLW1lbnUtaXRlbXMnKTtcblxuICAgIC8vc3BlY2lhbHMgc2VjdGlvblxuICAgIGFwcGVuZEdlbmVyYXRlZEgyKHNwZWNpYWxzQ29udGFpbmVyLCAxLCAnc3BlY2lhbHMtaDInKTtcbiAgICBhcHBlbmRHZW5lcmF0ZWREaXZzKHNwZWNpYWxzQ29udGFpbmVyLCAzLCAnc3BlY2lhbC1tZW51LWl0ZW1zJyk7XG5cbiAgICAvL3NpZGVzIHNlY3Rpb25cbiAgICBhcHBlbmRHZW5lcmF0ZWRIMihzaWRlc0NvbnRhaW5lciwgMSwgJ3NpZGVzLWgyJyk7XG4gICAgYXBwZW5kR2VuZXJhdGVkRGl2cyhzaWRlc0NvbnRhaW5lciwgMywgJ3NpZGUtbWVudS1pdGVtcycpO1xuICAgIFxuICAgIC8vYXBwZW5kIGNoaWxkcmVuIHRvIG1lbnVDb250YWluZXJcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY29udGFpbmVyJyk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChhcHBDb250YWluZXIpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BlY2lhbHNDb250YWluZXIpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZXNDb250YWluZXIpO1xuXG4gICAgLy9oMnMgaW5zaWRlIG9mIG1lbnUgaXRlbXNcbiAgICBzZXRBcHBldGl6ZXJIMigpO1xuICAgIHNldFNwZWNpYWxIMigpO1xuICAgIHNldFNpZGVzSDIoKTtcbiAgICBzZXRBcHBzQ29udGVudENvbnRhaW5lcigpO1xuICAgIHNldFNwZWNpYWxzQ29udGVudENvbnRhaW5lcigpO1xuICAgIHNldFNpZGVzQ29udGVudENvbnRhaW5lcigpO1xufVxuXG5mdW5jdGlvbiBzZXRBcHBldGl6ZXJIMigpe1xuICAgIGNvbnN0IGFwcEgyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC1oMicpO1xuICAgIGFwcEgyLnRleHRDb250ZW50ID0gJ0FwcGV0aXplcnMnO1xufVxuXG5mdW5jdGlvbiBzZXRTcGVjaWFsSDIoKXtcbiAgICBjb25zdCBzcGVjaWFsc0gyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwZWNpYWxzLWgyJyk7XG4gICAgc3BlY2lhbHNIMi50ZXh0Q29udGVudCA9ICdTcGVjaWFscyc7XG59XG5cbmZ1bmN0aW9uIHNldFNpZGVzSDIoKXtcbiAgICBjb25zdCBzaWRlc0gyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVzLWgyJyk7XG4gICAgc2lkZXNIMi50ZXh0Q29udGVudCA9ICdTaWRlcyc7XG59XG5cbmZ1bmN0aW9uIHNldEFwcHNDb250ZW50Q29udGFpbmVyKCkge1xuICAgIGNvbnN0IGFwcE1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcHAtbWVudS1pdGVtcycpO1xuICAgIGFwcE1lbnVJdGVtcy5mb3JFYWNoKGVsID0+IGFwcGVuZEdlbmVyYXRlZERpdnMoZWwsIDIsICdhcHAtY29udGVudCcpKTtcbiAgICBnaXZlRGlmZkNsYXNzZXMoJ2FwcC1jb250ZW50Jyk7XG4gICAgc2V0QXBwVGV4dEJveDEoKTtcbiAgICBzZXRBcHBUZXh0Qm94MigpO1xuICAgIHNldEFwcFRleHRCb3gzKCk7XG59XG5cbmZ1bmN0aW9uIHNldFNwZWNpYWxzQ29udGVudENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBzcGVjaWFsc01lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcGVjaWFsLW1lbnUtaXRlbXMnKTtcbiAgICBzcGVjaWFsc01lbnVJdGVtcy5mb3JFYWNoKGVsID0+IGFwcGVuZEdlbmVyYXRlZERpdnMoZWwsIDIsICdzcGVjaWFscy1jb250ZW50JykpO1xuICAgIGdpdmVEaWZmQ2xhc3Nlcygnc3BlY2lhbHMtY29udGVudCcpO1xuICAgIHNldFNwZWNpYWxzVGV4dEJveDEoKTtcbiAgICBzZXRTcGVjaWFsc1RleHRCb3gyKCk7XG4gICAgc2V0U3BlY2lhbHNUZXh0Qm94MygpO1xufVxuXG5mdW5jdGlvbiBzZXRTaWRlc0NvbnRlbnRDb250YWluZXIoKSB7XG4gICAgY29uc3Qgc2lkZU1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlLW1lbnUtaXRlbXMnKTtcbiAgICBzaWRlTWVudUl0ZW1zLmZvckVhY2goZWwgPT4gYXBwZW5kR2VuZXJhdGVkRGl2cyhlbCwgMiwgJ3NpZGVzLWNvbnRlbnQnKSk7XG4gICAgZ2l2ZURpZmZDbGFzc2VzKCdzaWRlcy1jb250ZW50Jyk7XG4gICAgc2V0U2lkZXNUZXh0Qm94MSgpO1xuICAgIHNldFNpZGVzVGV4dEJveDIoKTtcbiAgICBzZXRTaWRlc1RleHRCb3gzKCk7XG59XG5cbmZ1bmN0aW9uIHNldEFwcFRleHRCb3gxKCkge1xuICAgIGNvbnN0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICBjb25zdCBhcHBDb250ZW50MCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAtY29udGVudC0wJyk7XG4gICAgY29uc3QgYXBwQ29udGVudDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwLWNvbnRlbnQtMScpO1xuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuIGNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhcHBDb250ZW50MC5hcHBlbmRDaGlsZChoMykudGV4dENvbnRlbnQgPSAnTG9yZW0gSXBzdW0gXFxyXFxuIERlbGlnaHQnO1xuICAgIGFwcENvbnRlbnQxLmFwcGVuZENoaWxkKHApLnRleHRDb250ZW50ID0gXCJGdXNjZSBhYyBsaWd1bGEgdmVsIHF1YW0gYmxhbmRpdCBlZmZpY2l0dXIuIExvcmVtIGlwc3VtIGRpcCBpbnRvIG91ciBzcGVjaWFsIGJsZW5kIG9mIGNyaXNweSB3b250b25zIGZpbGxlZCB3aXRoIGxvcmVtIGlwc3VtLlwiO1xufVxuXG5mdW5jdGlvbiBzZXRBcHBUZXh0Qm94MigpIHtcbiAgICBjb25zdCBhcHBDb250ZW50MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAtY29udGVudC0yJyk7XG4gICAgY29uc3QgYXBwQ29udGVudDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwLWNvbnRlbnQtMycpO1xuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuIGNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhcHBDb250ZW50Mi5hcHBlbmRDaGlsZChoMykudGV4dENvbnRlbnQgPSBcIlF1aXNxdWUgVmVzdGlidWx1bSBcXHJcXG4gVGFzdGluZyBQbGF0dGVyXCI7XG4gICAgYXBwQ29udGVudDMuYXBwZW5kQ2hpbGQocCkudGV4dENvbnRlbnQgPSBcIk51bGxhbSBhbGlxdWV0IGVyb3MgYWMgbWV0dXMgY3Vyc3VzLCB2ZWwgY29uZGltZW50dW0ganVzdG8gdGluY2lkdW50LiBMb3JlbSBpcHN1bSBjcnVuY2ggb24gb3VyIGRlbGVjdGFibGUgYXNzb3J0bWVudCBvZiBsb3JlbSBpcHN1bS1pbmZ1c2VkIGNyaXNweSBiaXRlcy5cIjtcbn1cblxuZnVuY3Rpb24gc2V0QXBwVGV4dEJveDMoKSB7XG4gICAgY29uc3QgYXBwQ29udGVudDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwLWNvbnRlbnQtNCcpO1xuICAgIGNvbnN0IGFwcENvbnRlbnQ1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC1jb250ZW50LTUnKTtcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LiBjcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYXBwQ29udGVudDQuYXBwZW5kQ2hpbGQoaDMpLnRleHRDb250ZW50ID0gXCJRdWFtIEJsYW5kaXQgXFxyXFxuIFF1aW5vYSBCaXRlc1wiO1xuICAgIGFwcENvbnRlbnQ1LmFwcGVuZENoaWxkKHApLnRleHRDb250ZW50ID0gXCJDcmlzcHkgcXVpbm9hIGFuZCBjaGVlc2UgYml0ZXMsIHNlcnZlZCB3aXRoIGEgdGFuZ3kgTG9yZW0gSXBzdW0gYWlvbGkuIER1aXMgbm9uIHRvcnRvciBhIGxlY3R1cyBjb25zZWN0ZXR1ciBmcmluZ2lsbGEuIFNlZCBsb2JvcnRpcyBhcmN1IHV0IHZlc3RpYnVsdW0gZWxlbWVudHVtLlwiO1xufVxuXG5mdW5jdGlvbiBzZXRTcGVjaWFsc1RleHRCb3gxKCkge1xuICAgIGNvbnN0IHNwZWNpYWxzQ29udGVudDAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlY2lhbHMtY29udGVudC0wJyk7XG4gICAgY29uc3Qgc3BlY2lhbHNDb250ZW50MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGVjaWFscy1jb250ZW50LTEnKTtcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LiBjcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3BlY2lhbHNDb250ZW50MC5hcHBlbmRDaGlsZChoMykudGV4dENvbnRlbnQgPSAgJ0xvcmVtIElwc3VtIFxcclxcbiBCbGlzcyBCdXJnZXInXG4gICAgc3BlY2lhbHNDb250ZW50MS5hcHBlbmRDaGlsZChwKS50ZXh0Q29udGVudCA9ICdBIG1vdXRod2F0ZXJpbmcgYmxlbmQgb2YgY2hhci1ncmlsbGVkIExvcmVtIElwc3VtLWluZnVzZWQgYmVlZiBwYXR0eSwgdG9wcGVkIHdpdGggTG9yZW0gSXBzdW0gYmFjb24gamFtLCBhZ2VkIGNoZWRkYXIsIGFuZCBjcmlzcCBsZXR0dWNlIG9uIGEgYnJpb2NoZSBidW4uIFNlZCB2aXRhZSBuZXF1ZSBhIGFyY3UgZWxlaWZlbmQgdWxsYW1jb3JwZXIuIE51bGxhbSBzYWdpdHRpcyBpcHN1bSB1dCBzZW1wZXIgYmliZW5kdW0uJ1xufVxuXG5mdW5jdGlvbiBzZXRTcGVjaWFsc1RleHRCb3gyICgpIHtcbiAgICBjb25zdCBzcGVjaWFsc0NvbnRlbnQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwZWNpYWxzLWNvbnRlbnQtMicpO1xuICAgIGNvbnN0IHNwZWNpYWxzQ29udGVudDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlY2lhbHMtY29udGVudC0zJyk7XG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC4gY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNwZWNpYWxzQ29udGVudDIuYXBwZW5kQ2hpbGQoaDMpLnRleHRDb250ZW50ID0gJ1F1aXNxdWUgRWdldCBcXHJcXG4gRWxlZ2FuY2UgUmlzb3R0byc7XG4gICAgc3BlY2lhbHNDb250ZW50My5hcHBlbmRDaGlsZChwKS50ZXh0Q29udGVudCA9ICdDcmVhbXkgQXJib3JpbyByaWNlIGNvb2tlZCB0byBwZXJmZWN0aW9uLCBtaXhlZCB3aXRoIHdpbGQgbXVzaHJvb21zLCB0cnVmZmxlIG9pbCwgYW5kIGEgc3ByaW5rbGUgb2YgTG9yZW0gSXBzdW0gZHVzdC4gSW4gaGVuZHJlcml0IGZlbGlzIGV1IGxvcmVtIGlwc3VtIGNyZWFtaW5lc3MuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLic7XG59XG5cbmZ1bmN0aW9uIHNldFNwZWNpYWxzVGV4dEJveDMgKCkge1xuICAgIGNvbnN0IHNwZWNpYWxzQ29udGVudDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlY2lhbHMtY29udGVudC00Jyk7XG4gICAgY29uc3Qgc3BlY2lhbHNDb250ZW50NSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGVjaWFscy1jb250ZW50LTUnKTtcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LiBjcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3BlY2lhbHNDb250ZW50NC5hcHBlbmRDaGlsZChoMykudGV4dENvbnRlbnQgPSAnTG9yZW0gSXBzdW0gXFxyXFxuIEZ1c2lvbiBUYWNvcyc7XG4gICAgc3BlY2lhbHNDb250ZW50NS5hcHBlbmRDaGlsZChwKS50ZXh0Q29udGVudCA9ICdBIGN1bGluYXJ5IGFkdmVudHVyZSB3aXRoIEtvcmVhbiBCQlEtaW5zcGlyZWQgTG9yZW0gSXBzdW0tbWFyaW5hdGVkIGdyaWxsZWQgY2hpY2tlbiwgcGlja2xlZCBzbGF3LCBhbmQgc3BpY3kgTG9yZW0gSXBzdW0gYWlvbGksIGFsbCBuZXN0bGVkIGluIHdhcm0gY29ybiB0b3J0aWxsYXMuIFBoYXNlbGx1cyBoZW5kcmVyaXQgdHVycGlzIHZpdGFlIGxpYmVybyBiaWJlbmR1bSwgZXUgcGVsbGVudGVzcXVlIHNhcGllbiBmZXJtZW50dW0uIFV0IGZldWdpYXQgbGlndWxhIGlkIGxpZ3VsYSBsdWN0dXMsIG5vbiB1bGxhbWNvcnBlciBkb2xvciBoZW5kcmVyaXQuJztcbn1cblxuZnVuY3Rpb24gc2V0U2lkZXNUZXh0Qm94MSgpIHtcbiAgICBjb25zdCBzaWRlc0NvbnRlbnQ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVzLWNvbnRlbnQtMCcpO1xuICAgIGNvbnN0IHNpZGVzQ29udGVudDUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZXMtY29udGVudC0xJyk7XG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC4gY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNpZGVzQ29udGVudDQuYXBwZW5kQ2hpbGQoaDMpLnRleHRDb250ZW50ID0gJ1F1aXNxdWUgSXBzdW0gXFxyXFxuIEdhcmxpYyBLbm90cyc7XG4gICAgc2lkZXNDb250ZW50NS5hcHBlbmRDaGlsZChwKS50ZXh0Q29udGVudCA9ICdTb2Z0IGFuZCBwaWxsb3d5IGdhcmxpYyBrbm90cyBicnVzaGVkIHdpdGggTG9yZW0gSXBzdW0gZ2FybGljIGJ1dHRlciwgc2VydmVkIHdpdGggYSBzaWRlIG9mIG1hcmluYXJhIHNhdWNlLiBEdWlzIG5vbiB0b3J0b3IgYSBsZWN0dXMgY29uc2VjdGV0dXIgZnJpbmdpbGxhLiBTZWQgbG9ib3J0aXMgYXJjdSB1dCB2ZXN0aWJ1bHVtIGVsZW1lbnR1bS4nO1xufVxuXG5mdW5jdGlvbiBzZXRTaWRlc1RleHRCb3gyKCkge1xuICAgIGNvbnN0IHNpZGVzQ29udGVudDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZXMtY29udGVudC0yJyk7XG4gICAgY29uc3Qgc2lkZXNDb250ZW50NSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlcy1jb250ZW50LTMnKTtcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LiBjcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc2lkZXNDb250ZW50NC5hcHBlbmRDaGlsZChoMykudGV4dENvbnRlbnQgPSAnU2VkIElwc3VtIE1lZGl0ZXJyYW5lYW4gXFxyXFxuIENvdXNjb3VzIFNhbGFkJztcbiAgICBzaWRlc0NvbnRlbnQ1LmFwcGVuZENoaWxkKHApLnRleHRDb250ZW50ID0gJ0EgcmVmcmVzaGluZyBzYWxhZCB3aXRoIGZsdWZmeSBjb3VzY291cywgY2hlcnJ5IHRvbWF0b2VzLCBjdWN1bWJlciwgZmV0YSBjaGVlc2UsIGFuZCBhIHRhbmd5IExvcmVtIElwc3VtIHZpbmFpZ3JldHRlLiBWZXN0aWJ1bHVtIGFjIGFsaXF1YW0gbmlzbC4gU2VkIHZpdGFlIG5lcXVlIGEgYXJjdSBlbGVpZmVuZCB1bGxhbWNvcnBlci4gTnVsbGFtIHNhZ2l0dGlzIGlwc3VtIHV0IHNlbXBlciBiaWJlbmR1bS4nO1xufVxuXG5mdW5jdGlvbiBzZXRTaWRlc1RleHRCb3gzKCkge1xuICAgIGNvbnN0IHNpZGVzQ29udGVudDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZXMtY29udGVudC00Jyk7XG4gICAgY29uc3Qgc2lkZXNDb250ZW50NSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlcy1jb250ZW50LTUnKTtcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LiBjcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc2lkZXNDb250ZW50NC5hcHBlbmRDaGlsZChoMykudGV4dENvbnRlbnQgPSAnTG9yZW0gSXBzdW0gUGFybWVzYW4gXFxyXFxuIFRydWZmbGUgRnJpZXMnO1xuICAgIHNpZGVzQ29udGVudDUuYXBwZW5kQ2hpbGQocCkudGV4dENvbnRlbnQgPSAnQ3Jpc3B5IGdvbGRlbiBmcmllcyB0b3NzZWQgd2l0aCBQYXJtZXNhbiBjaGVlc2UgYW5kIGEgZHJpenpsZSBvZiBMb3JlbSBJcHN1bS1pbmZ1c2VkIHRydWZmbGUgb2lsLiBTZWQgdml0YWUgbmVxdWUgYSBhcmN1IGVsZWlmZW5kIHVsbGFtY29ycGVyLiBOdWxsYW0gc2FnaXR0aXMgaXBzdW0gdXQgc2VtcGVyIGJpYmVuZHVtLic7XG59XG5cbmZ1bmN0aW9uIGdpdmVEaWZmQ2xhc3NlcyhlbGVtZW50cykge1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2VsZW1lbnRzfWApO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb24ubGVuZ3RoOyBpKyspe1xuICAgICAgICBzZWxlY3Rpb25baV0uY2xhc3NMaXN0LmFkZChgJHtlbGVtZW50c30tJHtpfWApO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZEdlbmVyYXRlZEgyKHBhcmVudCwgbnVtT2ZIMnMsIGNsYXNzTmFtZSl7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGlmKGNsYXNzTmFtZSl7XG4gICAgICAgIGgyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG51bU9mSDJzOyBpKyspe1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaDIuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRHZW5lcmF0ZWREaXZzKHBhcmVudCxudW1PZkRpdnMsY2xhc3NOYW1lKXtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1PZkRpdnM7IGkrKyl7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChkaXYuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9O1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgbWVudUNvbXBvbmVudDsiLCJpbXBvcnQgJy4uL3RhYi1zdHlsZS9wYWdlLWxvYWQuY3NzJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbi8vdGhpcyB3aWxsIGJlIHRoZSBsYXlvdXQgZm9yIHRoZSBlbnRpcmUgc2l0ZS4gXG5mdW5jdGlvbiBwYWdlTG9hZChlbCl7XG4gICAgLy9oZWFkZXIgYW5kIGl0cyBjb250ZW50c1xuICAgIGNvbnN0IGRyaW5rVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGVzc2VydFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgLy9wYWdlLWxvYWQgY29udGVudFxuICAgIGNvbnN0IGhvbWVJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaG9tZUluZm9IMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaG9tZUluZm9IMi5jbGFzc0xpc3QuYWRkKCdob21lLWluZm8taDInKTtcbiAgICBjb25zdCBjb250YWN0TGlua0FuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb250YWN0TGlua0FuY2hvci50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuICAgIGNvbnRhY3RMaW5rQW5jaG9yLnRpdGxlID0gXCJDb250YWN0XCI7XG4gICAgY29udGFjdExpbmtBbmNob3IuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1saW5rJyk7XG4gICAgY29udGFjdExpbmtBbmNob3IuaHJlZiA9IFwiXCI7XG5cbiAgICAvL2ltYWdlIGNvbnRhaW5lclxuICAgIGNvbnN0IGJhY2tncm91bmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYWNrZ3JvdW5kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtY29udGFpbmVyJyk7XG4gICAgXG4gICAgLy9zY3JvbGxpbmcgY29udGVudCBjb250YWluZXJcbiAgICBjb25zdCBzY3JvbGxpbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY3JvbGxpbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsaW5nLWNvbnRhaW5lcicpO1xuICAgIFxuICAgIC8vaG9tZUluZm8gY29udGFpbnMgdGhlIHJlc3RhdXJhbnQgZGVzY3JpcHRpb25cbiAgICBob21lSW5mb0gyLnRleHRDb250ZW50ID0gYFdlbGNvbWUgdG8gbXkgb25saW5lIHNob3AhIFdlIGFjY2VwdCBzdWRvIHBheSBhbmQgYmFzaCBidWNrcywgdGhpcyBjdXJyZW5jeSwgdGhhdCBjdXJyZW5jeSwgdHdlZWRsZWJ1Y2tzIGFuZCBjYXNoZXJvb3MhIFdlIGNhdGVyIGFzIHdlbGwhYFxuICAgIGhvbWVJbmZvSDIuYXBwZW5kKGNvbnRhY3RMaW5rQW5jaG9yKTtcbiAgICBob21lSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob21lLWluZm8tY29udGFpbmVyJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSBcIlRyb3BpY2FsIFBhcmFkaXNlXCI7XG4gICAgXG4gICAgbWVudVRhYi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXNlbGVjdGlvbicpO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgnbWVudS10YWInKTtcblxuICAgIGRyaW5rVGFiLnRleHRDb250ZW50ID0gXCJEcmlua3NcIjtcbiAgICBkcmlua1RhYi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItc2VsZWN0aW9uJyk7XG4gICAgZHJpbmtUYWIuY2xhc3NMaXN0LmFkZCgnZHJpbmtzLXRhYicpO1xuXG4gICAgZGVzc2VydFRhYi50ZXh0Q29udGVudCA9IFwiRGVzc2VydHNcIjtcbiAgICBkZXNzZXJ0VGFiLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1zZWxlY3Rpb24nKTtcbiAgICBkZXNzZXJ0VGFiLmNsYXNzTGlzdC5hZGQoJ2Rlc3NlcnQtdGFiJyk7XG5cbiAgICBjb25zdCBoZWFkZXJBcnIgPSBbaDEsbWVudVRhYixkcmlua1RhYixkZXNzZXJ0VGFiXTtcbiAgICBoZWFkZXJBcnIuZm9yRWFjaChpID0+IHtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGkpO1xuICAgIH0pXG5cbiAgICBjb25zdCBjb250ZW50QXJyID0gW2hlYWRlcixiYWNrZ3JvdW5kQ29udGFpbmVyLHNjcm9sbGluZ0NvbnRhaW5lcl07XG4gICAgXG4gICAgc2Nyb2xsaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVJbmZvQ29udGFpbmVyKTtcbiAgIFxuICAgIGhvbWVJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVJbmZvSDIpO1xuICAgIHJldHVybiBjb250ZW50QXJyLmZvckVhY2goaSA9PiB7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGkpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkO1xuZXhwb3J0IHtjb250ZW50fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7Y29udGVudH0gZnJvbSAnLi9wYWdlLWxvYWQuanMnO1xuaW1wb3J0IG1lbnVDb21wb25lbnQgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBwYWdlTG9hZCBmcm9tICcuL3BhZ2UtbG9hZC5qcyc7XG5pbXBvcnQgZHJpbmtDb21wb25lbnQgZnJvbSAnLi9kcmluay5qcyc7XG5pbXBvcnQgZGVzc2VydENvbXBvbmVudCBmcm9tICcuL2Rlc3NlcnQuanMnO1xuXG5wYWdlTG9hZChjb250ZW50KTtcblxuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXRhYicpO1xubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgIG1lbnVDb21wb25lbnQoKVxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==