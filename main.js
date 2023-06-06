/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(13), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(14), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(15), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(16), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(17), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(18), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(19), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "OhMyNotes";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
}

@font-face {
  font-family: "SundayTime";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff2"),
    url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff");
}

@font-face {
  font-family: "RobotoMedium";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("woff2"),
    url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("woff");
}

@font-face {
  font-family: "RobotoBlack";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format("woff2"),
    url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format("woff");
}

:root {
  --primary-color: rgb(0, 0, 0);
  --secondary-color: rgb(244, 244, 171);
  --linear-background: linear-gradient(to top left, #973ab7, #009688, #4caf50);
  --dashed-border-black: 1px dashed #000;
  --dashed-border-yellow: 1px dashed rgb(244, 244, 171);
  --header-gradient-background: radial-gradient(
    at left top,
    rgba(63, 134, 192, 1),
    rgba(222, 229, 157, 1)
  );
  --nav-gradient-background: linear-gradient(
    315deg,
    rgba(107, 213, 238, 1),
    rgba(140, 113, 155, 1)
  );
  --main-container-background-color: #eaeef7;
  --add-btn-background-gradient: linear-gradient(135deg, #d74368, #e04463);
  --main-box-shadow: 0 2px 5px #000;
  --inset-box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  --toggle-btn-box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  --buttons-text-shadow: 0 3px 6px rgba(0, 0, 0, 0.2),
    0 6px 12px rgba(0, 0, 0, 0.1);
  --logo-text-shadow: 0 0 4px #c28073, 0 0 8px #c28073, 0 0 16px #e13358;
  --logo-3D-text-shadow: 1px 1px #000000, 2px 2px #111111, 3px 3px #222222,
    4px 4px #333333;
  --nav-menu-text-shadow: 0 0 4px #00ffff, 0 0 8px #00ffff, 0 0 16px #ff00ff;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-family: "RobotoMedium";
  line-height: 1.5;
  height: 100%;
}

/* Header */

header {
  position: fixed;
  width: 100%;
  height: 70px;
  background: var(--header-gradient-background);
  color: var(--secondary-color);
  border-bottom: var(--dashed-border-yellow);
  box-shadow: var(--main-box-shadow);
  z-index: 1;
}

#header {
  display: flex;
  justify-content: space-between;
  line-height: 70px;
  transition: margin-left 0.5s;
}

.logo {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 7px;
  left: 45px;
}

.logo-text {
  font-family: "RobotoBlack";
  text-shadow: var(--logo-text-shadow);
}

.logo i {
  margin-right: 10px;
  color: var(--secondary-color);
  text-shadow: var(--logo-3D-text-shadow);
}

.toggle-menu {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 18px;
  left: 200px;
}

#toggle-btn {
  width: 40px;
  height: 40px;
  font-size: 18px;
  background: rgba(140, 113, 155, 1);
  box-shadow: var(--inset-box-shadow);
  border: var(--dashed-border-yellow);
  cursor: pointer;
  color: var(--secondary-color);
  transition: linear 0.2s;
}

#toggle-btn svg {
  text-shadow: var(--buttons-text-shadow);
}

#toggle-btn:hover {
  background: var(--secondary-color);
  box-shadow: var(--toggle-btn-box-shadow);
  color: #8721db;
}

/* Sidebar Menu */

nav {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  position: fixed;
  width: 200px;
  height: 100%;
  z-index: 100;
  color: var(--secondary-color);
  background: var(--nav-gradient-background);
  transition: ease-in 0.3s;
}

nav.hide {
  width: 0;
}

#sidebar {
  padding-top: 20px;
  width: 100%;
  height: 100%;
  list-style: none;
  overflow: hidden;
  box-shadow: var(--main-box-shadow);
  border-right: var(--dashed-border-yellow);
}

.sidebar-options {
  width: 100%;
  list-style: none;
  font-family: "RobotoMedium";
  font-family: "OhMyNotes";
}

.sidebar-options li {
  text-align: center;
  width: 100%;
}

.sidebar-options li a {
  display: inline-flex;
  align-items: center;
  width: 95%;
  padding: 5px 10px;
  color: var(--secondary-color);
  text-shadow: var(--nav-menu-text-shadow);
  text-decoration: none;
  font-size: 20px;
  transition: ease-in 0.2s;
  border: var(--dashed-border-yellow);
  box-shadow: var(--main-box-shadow);
}

.sidebar-options li a i {
  margin: 0 10px;
  width: 20px;
}

.sidebar-options li a:hover,
.sidebar-options li a:active {
  color: var(--secondary-color);
  text-shadow: var(--buttons-text-shadow);
  background: rgb(109, 152, 162);
  box-shadow: var(--inset-box-shadow);
}

.projects-add {
  margin-top: 30px;
  text-align: center;
  width: 100%;
}

#add-project-btn {
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 8px;
  font-family: "RobotoMedium";
  cursor: pointer;
  border: var(--dashed-border-yellow);
  box-shadow: var(--main-box-shadow);
  color: var(--secondary-color);
  background: var(--add-btn-background-gradient);
}

#add-project-btn:hover {
  box-shadow: var(--inset-box-shadow);
  background: var(--nav-gradient-background);
  color: var(--secondary-color);
  text-shadow: var(--buttons-text-shadow);
}

.projects-add i {
  padding-left: 8px;
}

/* Main Container */

#main-container {
  position: absolute;
  top: 70px;
  left: 200px;
  background-color: var(--main-container-background-color);
  width: calc(100% - 200px);
  height: 100%;
  transition: ease-in 0.3s;
}

#main-container.expand {
  width: 100%;
  height: 100%;
  left: 0;
}

#main-content {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: var(--main-container-background-color);
}

/* Form Modals */

.hidden {
  display: none;
}

#modal {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: var(--header-gradient-background);
}

.modal-form {
  text-align: center;
  background-color: #fefefe;
  margin: 10% auto;
  border: 1px solid #888;
  width: 35%;
  border: var(--dashed-border-black);
  background-color: rgb(109, 152, 162);
}

.modal-form-container {
  font-family: "SundayTime";
}

.modal-title {
  margin-bottom: 15px;
  background-color: var(--secondary-color);
  padding: 15px;
  font-family: "OhMyNotes";
  box-shadow: var(--main-box-shadow);
  text-shadow: 0 0 4px rgb(109, 152, 162), 0 0 8px rgb(109, 152, 162);
}

input[type="text"],
input[type="date"],
#todo-priority-select {
  width: 80%;
  padding: 8px;
  border: 3px dashed rgb(109, 152, 162);
  border-radius: 8px;
  outline: none;
  font-family: "SundayTime";
}

#todo-priority-select {
  text-shadow: var(--nav-menu-text-shadow);
}

input[type="text"]:focus,
input[type="date"]:focus,
#todo-priority-select:focus {
  box-shadow: var(--main-box-shadow);
}

#todo-priority-select option {
  color: rgb(109, 152, 162);
  text-shadow: none;
  background-color: var(--secondary-color);
}

.modal-form-container > div > h3 {
  margin-bottom: 8px;
}

textarea {
  width: 80%;
  height: 150px;
  outline: none;
  border: 3px dashed rgb(109, 152, 162);
  font-family: "SundayTime";
  padding: 8px;
}

textarea:focus {
  box-shadow: var(--main-box-shadow);
}

.project-name-form,
.project-description-form,
.project-color-form {
  padding-top: 8px;
  padding-bottom: 15px;
  font-size: 0.9rem;
  color: var(--secondary-color);
  text-shadow: var(--logo-3D-text-shadow);
}

.project-color-form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.color-input-text {
  padding-right: 16px;
}

.modal-form-submit,
.modal-form-close {
  margin-top: 15px;
  padding: 10px;
  font-size: 1.3rem;
  font-family: "OhMyNotes";
  margin-bottom: 18px;
  background-color: var(--secondary-color);
  border: none;
  box-shadow: var(--main-box-shadow);
  border-radius: 8px;
  cursor: pointer;
}

.modal-form-submit {
  margin-right: 15px;
}

.modal-form-submit:hover,
.modal-form-close:hover {
  box-shadow: var(--inset-box-shadow);
  color: var(--secondary-color);
  background-color: var(--nav-gradient-background);
}

.todo-name-text,
.todo-duedate-text,
.todo-priority-text {
  padding-top: 10px;
  padding-bottom: 5px;
  font-size: 0.9rem;
  color: var(--secondary-color);
  text-shadow: var(--logo-3D-text-shadow);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "19fe3629c8496b2da5af.woff2";

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d029bff4df1bb13bb265.woff";

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58d851065b3c47bfd934.woff2";

/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef62acbe69a0352a1b75.woff";

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ac4fcddff886d0c78a5.woff2";

/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f7e91da72e12519427c.woff";

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38b31a6b3cbbb2ececdc.woff2";

/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a29d5a9079c97e7cfb61.woff";

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);

const handlers = (() => {
  const toggleSidebar = () => {
    const nav = document.querySelector("nav");
    const toggle_btn = document.getElementById("toggle-btn");
    const content = document.getElementById("main-container");

    toggle_btn.onclick = function () {
      nav.classList.toggle("hide");
      content.classList.toggle("expand");
    };
  };

  //Project Modals

  const modal = document.querySelector("[data-modal]");
  const closeModalBtn = document.querySelector("[data-close-modal]");
  const modalForm = document.querySelector("[data-form]");

  closeModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modalForm.removeEventListener("submit", addNewProjectEvent);

    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      e.preventDefault();
      modalForm.removeEventListener("submit", addNewProjectEvent);

      modal.classList.add("hidden");
    }
  });

  //Add Project

  const openNewProjectModal = () => {
    _dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].createAddProjectModal();
    modalForm.addEventListener("submit", addNewProjectEvent);
    modal.classList.remove("hidden");
  };

  const addNewProjectEvent = (e) => {
    e.preventDefault();

    const nameInput = document.querySelector("[data-new-project-name]");
    const descriptionInput = document.querySelector(
      "[data-new-project-description]"
    );
    const colorInput = document.querySelector("[data-project-color]");

    if (nameInput.value === "") {
      nameInput.value = "Project Unnamed";
    }

    if (projectName !== "") {
      projects.createNewProject(
        nameInput.value,
        descriptionInput.value,
        colorInput.value
      );
      _dom_elements__WEBPACK_IMPORTED_MODULE_0__["default"].renderAllProjectsPage();
    }

    modalForm.removeEventListener("submit", addNewProjectEvent);
    modal.classList.add("hidden");
  };

  return {
    toggleSidebar,
    openNewProjectModal,
  };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlers);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const domElements = (() => {
  //Main dom elements
  const createH2 = (className) => {
    const h2 = document.createElement("h2");
    h2.classList.add(className);
    return h2;
  };

  const createH3 = (className) => {
    const h3 = document.createElement("h3");
    h3.classList.add(className);
    return h3;
  };

  const createPara = (className) => {
    const p = document.createElement("p");
    p.classList.add(className);
    return p;
  };

  const createDiv = (className) => {
    const div = document.createElement("div");
    div.classList.add(className);
    return div;
  };

  const createButton = (className) => {
    const button = document.createElement("button");
    button.classList.add(className);
    return button;
  };

  const createLabel = (className) => {
    const label = document.createElement("label");
    label.classList.add(`${className}-label`);
    label.setAttribute("for", `${className}-input`);
    return label;
  };

  const createInput = (className, inputType) => {
    const input = document.createElement("input");
    input.classList.add(`${className}-input`);
    input.setAttribute("type", inputType);
    input.setAttribute("id", `${className}-input`);
    return input;
  };

  const createTextArea = (className) => {
    const textArea = document.createElement("textarea");
    textArea.classList.add(`${className}-input`);
    textArea.setAttribute("id", `${className}-input`);
    textArea.setAttribute("name", `${className}-input`);
    return textArea;
  };

  const createSelectElement = (className) => {
    const selectElement = document.createElement("select");
    selectElement.setAttribute("name", `${className}-select`);
    selectElement.setAttribute("id", `${className}-select`);
    return selectElement;
  };

  const createOption = (value) => {
    const option = document.createElement("option");
    option.setAttribute("value", value);
    return option;
  };

  //Modals

  const formContainer = document.querySelector("[data-modal-form]");

  const createAddProjectModal = () => {
    const divTitle = createDiv("modal-title");
    const modalTitle = createH2("modal-new-project-title");
    modalTitle.textContent = "Add New Project";

    const divProjectTitleInput = createDiv("project-name-form");
    const inputNameText = createH3("name-input-text");
    inputNameText.textContent = "Project Name:";
    const newProjectLabel = createLabel("new-project");
    const newProjectInput = createInput("new-project", "text");
    newProjectInput.placeholder = "How would you call it?";
    newProjectInput.setAttribute("data-new-project-name", "");
    newProjectInput.maxLength = 50;

    const divProjectDescriptionInput = createDiv("project-description-form");
    const inputDescriptionText = createH3("description-input-text");
    inputDescriptionText.textContent = "Project Description:";
    const newProjectDescriptionLabel = createLabel("new-project-description");
    const newProjectDescriptionInput = createTextArea(
      "new-project-description"
    );
    newProjectDescriptionInput.placeholder =
      "Your choice if you want to add a short description to your project...";
    newProjectDescriptionInput.setAttribute("data-new-project-description", "");
    newProjectDescriptionInput.maxLength = 350;

    const divColorInput = createDiv("project-color-form");
    const inputColorText = createH3("color-input-text");
    inputColorText.textContent = `Project's Color:`;
    const colorInputLabel = createLabel("project-color");
    const colorInput = createInput("project-color", "color");
    colorInput.setAttribute("data-project-color", "");

    formContainer.textContent = "";

    divTitle.appendChild(modalTitle);
    divProjectTitleInput.append(
      inputNameText,
      newProjectLabel,
      newProjectInput
    );
    divProjectDescriptionInput.append(
      inputDescriptionText,
      newProjectDescriptionLabel,
      newProjectDescriptionInput
    );

    divColorInput.append(inputColorText, colorInputLabel, colorInput);

    formContainer.append(
      divTitle,
      divProjectTitleInput,
      divProjectDescriptionInput,
      divColorInput
    );
  };

  const createEditProjectModal = () => {
    const divTitle = createDiv("modal-title");
    const modalTitle = createH2("modal-edit-project-title");
    modalTitle.textContent = "Edit Project";

    const divProjectTitleInput = createDiv("project-name-form");
    const inputNameText = createH3("name-input-text");
    inputNameText.textContent = "Project Name:";
    const editProjectLabel = createLabel("edit-project");
    const editProjectInput = createInput("edit-project", "text");
    editProjectInput.setAttribute("data-edit-project-name", "");
    editProjectInput.maxLength = 60;

    const divProjectDescriptionInput = createDiv("project-description-form");
    const inputDescriptionText = createH3("description-input-text");
    inputDescriptionText.textContent = "Project Description:";
    const editProjectDescriptionLabel = createLabel("edit-project-description");
    const editProjectDescriptionInput = createTextArea(
      "edit-project-description"
    );
    editProjectDescriptionInput.placeholder =
      "Your choice if you want to add a short description to your project...";
    editProjectDescriptionInput.setAttribute(
      "data-edit-project-description",
      ""
    );
    editProjectDescriptionInput.maxLength = 350;

    const divColorInput = createDiv("project-color-form");
    const inputColorText = createH3("color-input-text");
    inputColorText.textContent = `Project's Color:`;
    const editColorInputLabel = createLabel("project-color");
    const editColorInput = createInput("project-color", "color");
    editColorInput.setAttribute("data-edit-project-color", "");

    formContainer.textContent = "";

    divTitle.appendChild(modalTitle);
    divProjectTitleInput.append(
      inputNameText,
      editProjectLabel,
      editProjectInput
    );
    divProjectDescriptionInput.append(
      inputDescriptionText,
      editProjectDescriptionLabel,
      editProjectDescriptionInput
    );

    divColorInput.append(inputColorText, editColorInputLabel, editColorInput);

    formContainer.append(
      divTitle,
      divProjectTitleInput,
      divProjectDescriptionInput,
      divColorInput
    );
  };

  const createAddToDoModal = () => {
    const divTitle = createDiv("modal-title");
    const modalTitle = createH2("modal-new-todo-title");
    modalTitle.textContent = "Add New ToDo";

    const divToDoTitleInput = createDiv("todo-name-form");
    const inputNameText = createH3("todo-name-text");
    inputNameText.textContent = "ToDo Name:";
    const newToDoLabel = createLabel("new-todo");
    const newToDoInput = createInput("new-todo", "text");
    newToDoInput.placeholder = "ToDo Name?";
    newToDoInput.setAttribute("data-new-todo-name", "");
    newToDoInput.maxLength = 150;
    newToDoInput.setAttribute("required", "");

    const dateDiv = createDiv("todo-duedate");
    const dateInputNameText = createH3("todo-duedate-text");
    dateInputNameText.textContent = "Due Date:";
    const dueDateLabel = createLabel("due-date");
    const dueDateInput = createInput("due-date", "date");
    dueDateInput.setAttribute("data-due-date-input", "");
    dueDateInput.setAttribute("required", "");

    const priorityDiv = createDiv("todo-priority");
    const priorityNameText = createH3("todo-priority-text");
    priorityNameText.textContent = "Priority: ";
    const selectPriorityLabel = createLabel("todo-priority");
    const selectPriority = createSelectElement("todo-priority");
    selectPriority.setAttribute("data-select-priority", "");
    const priorityLow = createOption("Low Priority");
    priorityLow.textContent = "Low Priority";
    const priorityMedium = createOption("Medium Priority");
    priorityMedium.textContent = "Medium Priority";
    const priorityHigh = createOption("High Priority");
    priorityHigh.textContent = "High Priority";

    formContainer.textContent = "";

    divTitle.appendChild(modalTitle);
    divToDoTitleInput.append(inputNameText, newToDoLabel, newToDoInput);

    dateDiv.append(dateInputNameText, dueDateLabel, dueDateInput);

    selectPriority.append(priorityLow, priorityMedium, priorityHigh);
    priorityDiv.append(priorityNameText, selectPriorityLabel, selectPriority);

    formContainer.append(divTitle, divToDoTitleInput, dateDiv, priorityDiv);
  };

  const createEditToDoModal = () => {
    const divTitle = createDiv("modal-title");
    const modalTitle = createH2("modal-edit-todo-title");
    modalTitle.textContent = "Edit ToDo";

    const divToDoTitleInput = createDiv("todo-name-form");
    const inputNameText = createH3("todo-name-text");
    inputNameText.textContent = "Edit Name:";
    const editToDoLabel = createLabel("edit-todo");
    const editToDoInput = createInput("edit-todo", "text");
    editToDoInput.setAttribute("data-edit-todo-name", "");
    editToDoInput.maxLength = 150;
    editToDoInput.setAttribute("required", "");

    const dateDiv = createDiv("todo-duedate");
    const dateInputNameText = createH3("todo-duedate-text");
    dateInputNameText.textContent = "Due Date:";
    const editDueDateLabel = createLabel("edit-duedate");
    const editDueDateInput = createInput("edit-duedate", "date");
    editDueDateInput.setAttribute("data-edit-duedate-input", "");
    editDueDateInput.setAttribute("required", "");

    const priorityDiv = createDiv("todo-priority");
    const priorityNameText = createH3("todo-priority-text");
    priorityNameText.textContent = "Priority: ";
    const editSelectPriorityLabel = createLabel("todo-priority");
    const editSelectPriority = createSelectElement("todo-priority");
    editSelectPriority.setAttribute("data-edit-select", "");
    const priorityLow = createOption("Low Priority");
    priorityLow.textContent = "Low Priority";
    const priorityMedium = createOption("Medium Priority");
    priorityMedium.textContent = "Medium Priority";
    const priorityHigh = createOption("High Priority");
    priorityHigh.textContent = "High Priority";

    formContainer.textContent = "";

    divTitle.appendChild(modalTitle);
    divToDoTitleInput.append(inputNameText, editToDoLabel, editToDoInput);

    dateDiv.append(dateInputNameText, editDueDateLabel, editDueDateInput);

    editSelectPriority.append(priorityLow, priorityMedium, priorityHigh);
    priorityDiv.append(
      priorityNameText,
      editSelectPriorityLabel,
      editSelectPriority
    );

    formContainer.append(divTitle, divToDoTitleInput, dateDiv, priorityDiv);
  };

  //Project Card

  const createProjectCard = (project, index) => {
    const projectCard = createDiv("project-card");
    projectCard.setAttribute("data-project", index);
    projectCard.style.backgroundColor = project.color;

    const projectName = createH3("project-title");
    projectName.setAttribute("data-index", index);
    projectName.textContent = project.name;
    const tasksNumb = createPara("tasks-number");
    tasksNumb.textContent = `Tasks(${project.todos.length})`;

    const projectDescription = createPara("project-description");
    projectDescription.setAttribute("data-index", index);
    const textDescription = project.description;
    const truncatedTextDescription = textDescription.substring(0, 50) + "...";
    projectDescription.textContent = truncatedTextDescription;
    projectCard.append(projectName, tasksNumb, projectDescription);
    return projectCard;
  };

  //Render Pages

  const mainContent = document.querySelector("#main-content");
  const mainContainer = document.querySelector("#main-container");

  const renderAllProjectsPage = () => {
    projects.saveProjects();
    mainContainer.setAttribute("data-page", "All Projects");
    mainContent.textContent = "";

    const pageHeader = createDiv("page-header");
    const pageTitle = createH2("page-title");
    const projectsNumb = projects.todoList.length;
    pageTitle.textContent = `You have: ${projectsNumb} projects`;
    const cardsContainer = createDiv("cards-container");

    projects.todoList.forEach((project, index) => {
      project.id = index;

      const projectCard = createProjectCard(project, index);
      projectCard.addEventListener("click", () =>
        renderSingleProjectPage(project, index)
      );

      cardsContainer.append(projectCard);
    });
    mainContent.textContent = "";
    pageHeader.append(pageTitle);

    mainContent.append(pageHeader, cardsContainer);
  };

  const renderSingleProjectPage = (project, index) => {
    mainContainer.setAttribute("data-page", `${index}-Project`);
    const pageDiv = createDiv("project-page");
    pageDiv.setAttribute("data-page-index", index);
    const pageHeaderDiv = createDiv("page-header");
    const projectName = createH2("project-name-header");
    projectName.textContent = project.name;
    const projectDesc = createPara("project-description-header");

    if (project.description === "") {
      projectDesc.textContent = "Project has no description";
    } else {
      projectDesc.textContent = project.description;
    }

    const projectActions = createDiv("project-actions");
    const projectEditBtn = createButton("project-edit");
    projectEditBtn.textContent = "Edit";
    projectEditBtn.setAttribute("data-edit-project-btn", "");
    projectEditBtn.setAttribute("data-index", index);
    projectEditBtn.addEventListener("click", () =>
      handlers.openEditProjectModal(project)
    );

    const projectDeleteBtn = createButton("project-delete");
    projectDeleteBtn.textContent = "Delete";
    projectDeleteBtn.setAttribute("data-delete-project-btn", "");
    projectDeleteBtn.setAttribute("data-index", index);

    const toDoSection = createDiv("todos-section");
    const toDoSectionActions = createDiv("todos-section-actions");
    toDoSectionActions.setAttribute("data-color-project-id", index);
    toDoSectionActions.style.backgroundColor = project.color;
    const addToDoBtn = createButton("add-todo-btn");
    addToDoBtn.textContent = `Add New ToDo`;
    addToDoBtn.setAttribute("data-add-todo-btn", "");

    const toDosContainer = createDiv("todos-container");
    toDosContainer.setAttribute("data-todos-container", "");

    mainContent.textContent = "";

    projectActions.append(projectEditBtn, projectDeleteBtn);
    pageHeaderDiv.append(projectName, projectDesc, projectActions);
    pageDiv.append(pageHeaderDiv);

    toDoSectionActions.append(addToDoBtn);
    toDoSection.append(toDoSectionActions, toDosContainer);

    mainContent.append(pageDiv, toDoSection);
  };

  return {
    createAddProjectModal,
    createEditProjectModal,
    createAddToDoModal,
    createEditToDoModal,
    renderAllProjectsPage,
    renderSingleProjectPage,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domElements);


/***/ })
/******/ 	]);
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
/******/ 			0: 0
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _js_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);



const addNewProjectBtn = document.querySelector("[data-add-new-project]");

addNewProjectBtn.addEventListener("click", () => {
  _js_handlers__WEBPACK_IMPORTED_MODULE_1__["default"].openNewProjectModal();
});

_js_handlers__WEBPACK_IMPORTED_MODULE_1__["default"].toggleSidebar();

})();

/******/ })()
;