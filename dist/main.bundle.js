/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'style.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _js_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/lazyload */ \"./src/app/js/lazyload.js\");\n/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/slider */ \"./src/app/js/slider.js\");\n/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_slider__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_billedeHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/billedeHandler */ \"./src/app/js/billedeHandler.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nObject(_js_lazyload__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document);\n\n//# sourceURL=webpack:///./src/app/index.js?");

/***/ }),

/***/ "./src/app/js/billedeHandler.js":
/*!**************************************!*\
  !*** ./src/app/js/billedeHandler.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazyload */ \"./src/app/js/lazyload.js\");\n\r\n\r\nvar billeder = document.querySelectorAll(\".img\");\r\n\r\nfor (var i = 0; i < billeder.length; i++) {\r\n  billeder[i].addEventListener(\"click\", navngivBillede);\r\n}\r\n\r\nfunction navngivBillede(e) {\r\n  if (!e.target) return;\r\n\r\n  var txt;\r\n  var navn = prompt(\"Navngiv billedet:\", \"\");\r\n  if (navn == null || navn == \"\") {\r\n    txt = \"Du annulerede\";\r\n  } else {\r\n    txt = navn;\r\n  }\r\n  e.target.parentNode.querySelector(\"li h3\").innerHTML = txt;\r\n}\r\n\r\nconsole.log(\"Navngivning JS loaded\");\r\n\r\nvar addImgBtn = document.getElementById(\"addImgBtn\");\r\naddImgBtn.addEventListener(\"click\", addImg);\r\nvar inputFields = document.querySelector(\".inputfields\");\r\nvar inputSubmit = document.getElementById(\"imgSubmit\")\r\n\r\nfunction addImg() {\r\n\r\n  if (inputFields.style.display == \"none\"){\r\n    inputFields.style.display = \"block\";\r\n  } else {\r\n    inputFields.style.display = \"none\";\r\n  }\r\n  // var imgUrl = prompt(\"Skriv linket til billedet:\", \"\");\r\n  // if (!imgUrl) {\r\n  //   alert(\"Du skrev ikke en URL ind\");\r\n  //   console.log(\"Du skrev ikke en URL ind\");\r\n  //   return;\r\n  // }\r\n  inputSubmit.addEventListener(\"click\", function (){\r\n  var imgUrl = document.getElementById(\"imgUrl\").value;\r\n\r\n\r\n  var imgNode = document.createElement(\"img\");\r\n  imgNode.setAttribute(\"src\", \"\");\r\n  imgNode.dataset.src = imgUrl;\r\n  imgNode.classList.add(\"img\", \"lazy\");\r\n\r\n  var imgName = document.getElementById(\"imgName\").value;\r\n\r\n  // var imgName = prompt(\"Hvad skal billedet hedde?:\", \"\");\r\n  if (!imgName) {\r\n    var nameNode = document.createElement(\"h3\");\r\n    var newNumber = document.querySelectorAll(\".img\").length + 1;\r\n    console.log(document.querySelectorAll(\".img\").length);\r\n    var countText = document.createTextNode(newNumber);\r\n    nameNode.appendChild(countText);\r\n  } else {\r\n    var nameNode = document.createElement(\"h3\");\r\n    var countText = document.createTextNode(imgName);\r\n    nameNode.appendChild(countText);\r\n  }\r\n\r\n  var subNode = document.createElement(\"h4\");\r\n  var subText = document.createTextNode(\"Klik på billedet for at ændre navnet\");\r\n  subNode.appendChild(subText);\r\n\r\n  var subBtnText = document.createTextNode(\"Fjern\");\r\n  var subBtn = document.createElement(\"div\");\r\n  subBtn.classList.add(\"deleteBtn\");\r\n  subBtn.appendChild(subBtnText);\r\n  subBtn.addEventListener(\"click\", deleteImage);\r\n\r\n\r\n  var liNode = document.createElement(\"li\");\r\n\r\n  liNode.appendChild(imgNode);\r\n  liNode.appendChild(nameNode);\r\n  liNode.appendChild(subNode);\r\n  liNode.appendChild(subBtn);\r\n  document.getElementById(\"list\").appendChild(liNode);\r\n  imgNode.addEventListener(\"click\", navngivBillede);\r\n  console.log(\"Billede tilføjet med navn:\", countText)\r\n\r\n  document.getElementById(\"imgUrl\").value = \"\";\r\n  document.getElementById(\"imgName\").value = \"\";\r\n\r\n  Object(_lazyload__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.querySelector(\".wrapper\"));\r\n  }\r\n  )\r\n  \r\n  \r\n}\r\n\r\nconsole.log(\"Tilføjbillede JS loaded\");\r\n\r\nvar deleteBtn = document.querySelectorAll(\".deleteBtn\");\r\nfor (var i = 0; i < deleteBtn.length; i++) {\r\n  deleteBtn[i].addEventListener(\"click\", deleteImage);\r\n}\r\n\r\nfunction deleteImage(e) {\r\n  e.target.parentNode.parentNode.removeChild(e.target.parentNode);\r\n}\r\n\r\nconsole.log(\"Fjernbillede JS loaded\");\n\n//# sourceURL=webpack:///./src/app/js/billedeHandler.js?");

/***/ }),

/***/ "./src/app/js/lazyload.js":
/*!********************************!*\
  !*** ./src/app/js/lazyload.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return lazyLoading; });\nfunction lazyLoading(view) {\r\n  var lazyBackgrounds = [].slice.call(view.querySelectorAll(\".lazy\"));\r\n\r\n  if (\"IntersectionObserver\" in window) {\r\n    var lazyBackgroundObserver = new IntersectionObserver(function (entries, observer) {\r\n      entries.forEach(function (entry) {\r\n        if (entry.isIntersecting) {\r\n          var lazyImg = entry.target;\r\n          lazyImg.src = lazyImg.dataset.src;\r\n          lazyImg.classList.remove(\"lazy\");\r\n          lazyBackgroundObserver.unobserve(lazyImg);\r\n        }\r\n      });\r\n    });\r\n\r\n    lazyBackgrounds.forEach(function (lazyBackground) {\r\n      lazyBackgroundObserver.observe(lazyBackground);\r\n    });\r\n  } else {\r\n    console.warn(\"IntersectionObserver not supported\")\r\n  }\r\n}\r\n\r\nconsole.log(\"Lazyload JS loaded\")\n\n//# sourceURL=webpack:///./src/app/js/lazyload.js?");

/***/ }),

/***/ "./src/app/js/slider.js":
/*!******************************!*\
  !*** ./src/app/js/slider.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var right = document.getElementById(\"right\");\r\nvar left = document.getElementById(\"left\");\r\n\r\nright.addEventListener(\"click\", scrollRight);\r\nleft.addEventListener(\"click\", scrollL);\r\n\r\nvar wrapper = document.querySelector(\".wrapper\");\r\nvar list = document.getElementById(\"list\");\r\nvar animation = [\r\n  { transform: \"translateX(\" + (wrapper.clientWidth + 16) + \"px)\" }\r\n];\r\n\r\nvar animationTiming = {\r\n  duration: 350,\r\n  fill: \"forwards\",\r\n  easing: \"ease-in-out\"\r\n};\r\n\r\nvar oldPosition = 0;\r\n\r\nfunction scrollL() {\r\n  var scrollLength = oldPosition + (wrapper.clientWidth + 16);\r\n\r\n  console.log(\"%i -> %i\", oldPosition, scrollLength);\r\n\r\n  var left = list.animate(\r\n    {\r\n      transform: [\r\n        \"translateX(\" + oldPosition + \"px)\",\r\n        \"translateX(\" + scrollLength + \"px)\"\r\n      ]\r\n    },\r\n    animationTiming\r\n  );\r\n\r\n  left.onfinish = function() {\r\n    oldPosition = scrollLength;\r\n  };\r\n}\r\n\r\n\r\n\r\nfunction scrollRight() {\r\n  var scrollLength = oldPosition - (wrapper.clientWidth + 16);\r\n\r\n  console.log(\"%i -> %i\", oldPosition, scrollLength);\r\n\r\n  var right = list.animate(\r\n    {\r\n      transform: [\r\n        \"translateX(\" + oldPosition + \"px)\",\r\n        \"translateX(\" + scrollLength + \"px)\"\r\n      ]\r\n    },\r\n    animationTiming\r\n  );\r\n\r\n  right.onfinish = function() {\r\n    oldPosition = scrollLength;\r\n  };\r\n\r\n  \r\n}\r\n\r\nconsole.log(\"Slider JS loaded\");\r\n\r\nvar resizeTimeout;\r\nvar list = document.getElementById(\"list\");\r\n\r\nwindow.addEventListener(\"resize\", function(e) {\r\n  if (resizeTimeout !== null) {\r\n    clearTimeout(resizeTimeout);\r\n  }\r\n\r\n  resizeTimeout = setTimeout(function() {\r\n    resizeTimeout = null;\r\n    oldPosition = 0;\r\n\r\n    // wrapper.scrollLeft = 0;\r\n    list.animate(\r\n      {\r\n        transform: [\"translateX(\" + 0 + \"px)\", \"translateX(\" + 0 + \"px)\"]\r\n      },\r\n      animationTiming\r\n    );\r\n  }, 100);\r\n});\r\n\r\nconsole.log(\"Resizing JS loaded\");\r\n\n\n//# sourceURL=webpack:///./src/app/js/slider.js?");

/***/ })

/******/ });