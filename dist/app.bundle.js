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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navigation.component */ \"./js/components/navigation.component.js\");\n/* harmony import */ var _components_add_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/add.product.component */ \"./js/components/add.product.component.js\");\n/* harmony import */ var _components_products_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/products.list.component */ \"./js/components/products.list.component.js\");\n/* harmony import */ var _components_products_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/products.table.component */ \"./js/components/products.table.component.js\");\n/* harmony import */ var _components_notfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/notfound.component */ \"./js/components/notfound.component.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\nvar routes = {\n  '/productstable': new _components_products_table_component__WEBPACK_IMPORTED_MODULE_3__[\"ProductsTableComponent\"](),\n  '/addproduct': new _components_add_product_component__WEBPACK_IMPORTED_MODULE_1__[\"AddProductComponent\"](),\n  '/productslist': new _components_products_list_component__WEBPACK_IMPORTED_MODULE_2__[\"ProductsListComponent\"](),\n  '**': new _components_notfound_component__WEBPACK_IMPORTED_MODULE_4__[\"NotFoundComponent\"]()\n};\n\nvar router =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee() {\n    var url, container, component, beforeRender, render, afterRender;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            url = location.hash.slice(1).toLowerCase();\n            container = document.querySelector('app-container');\n            component = routes[url] || routes['**'];\n            beforeRender = component.beforeRender, render = component.render, afterRender = component.afterRender;\n            _context.t0 = beforeRender;\n\n            if (!_context.t0) {\n              _context.next = 8;\n              break;\n            }\n\n            _context.next = 8;\n            return beforeRender();\n\n          case 8:\n            container.innerHTML = render(); //afterRender && await afterRender();\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function router() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nwindow.addEventListener('load', router);\nwindow.addEventListener('hashchange', router);\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/components/add.product.component.js":
/*!************************************************!*\
  !*** ./js/components/add.product.component.js ***!
  \************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddProductComponent\", function() { return AddProductComponent; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar AddProductComponent =\n/*#__PURE__*/\nfunction () {\n  function AddProductComponent() {\n    _classCallCheck(this, AddProductComponent);\n  }\n\n  _createClass(AddProductComponent, [{\n    key: \"render\",\n    value: function render() {\n      return \"\\n        <div class=\\\"container\\\">\\n            <form name=\\\"addProducts\\\">\\n                <div class=\\\"form-group row\\\">\\n                <label for=\\\"code\\\" class=\\\"col-sm-2 col-form-label\\\">Code</label>\\n                    <div class=\\\"col-sm-10\\\">\\n                        <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"productCode\\\" placeholder=\\\"Code\\\">\\n                    </div>\\n                </div>\\n                <div class=\\\"form-group row\\\">\\n                <label for=\\\"name\\\" class=\\\"col-sm-2 col-form-label\\\">Name</label>\\n                    <div class=\\\"col-sm-10\\\">\\n                        <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"productName\\\" placeholder=\\\"Name\\\">\\n                    </div>\\n                </div>\\n                <div class=\\\"form-group row\\\">\\n                <label for=\\\"goodsPrice\\\" class=\\\"col-sm-2 col-form-label\\\">Price</label>\\n                    <div class=\\\"col-sm-10\\\">\\n                        <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"productPrice\\\" placeholder=\\\"Price\\\">\\n                    </div>\\n                </div>\\n                <div class=\\\"form-group row\\\">\\n                    <div class=\\\"col-sm-2\\\">Available</div>\\n                    <div class=\\\"col-sm-10\\\">\\n                        <div class=\\\"form-check\\\">\\n                            <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" id=\\\"productAvailable\\\">\\n                        </div>\\n                    </div>\\n                </div>\\n                <div class=\\\"form-group row\\\">\\n                <label for=\\\"goodsImage\\\" class=\\\"col-sm-2 col-form-label\\\">Image</label>\\n                    <div class=\\\"col-sm-10\\\">\\n                        <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"productImage\\\" placeholder=\\\"Paste image URL\\\">\\n                    </div>\\n                </div>\\n                <div class=\\\"form-group row\\\">\\n                <label for=\\\"goodsDescription\\\" class=\\\"col-sm-2 col-form-label\\\">Description</label>\\n                    <div class=\\\"col-sm-10\\\">\\n                        <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"productDescription\\\" placeholder=\\\"Description\\\">\\n                    </div>\\n                </div>\\n                <button type=\\\"submit\\\" class=\\\"btn btn-primary\\\">Save</button>\\n        </form>\\n        </div>\\n        \";\n    }\n  }, {\n    key: \"afterRender\",\n    value: function afterRender() {\n      document.forms['addProducts'].addEventListener('submit', function (e) {\n        e.preventDefault();\n        var productCode = e.target.elements['productCode'].value;\n        var productName = e.target.elements['productName'].value;\n        var productPrice = e.target.elements['productPrice'].value;\n        var productAvailable = e.target.elements['productAvailable'].value;\n        var productImage = e.target.elements['productImage'].value;\n        var productDescription = e.target.elements['productDescription'].value;\n\n        if (!productCode || !productName || !productPrice || !productAvailable || !productImage || !productDescription) {\n          return console.log('Please fill in all fields of the form!');\n        }\n      });\n    }\n  }]);\n\n  return AddProductComponent;\n}();\n\n//# sourceURL=webpack:///./js/components/add.product.component.js?");

/***/ }),

/***/ "./js/components/navigation.component.js":
/*!***********************************************!*\
  !*** ./js/components/navigation.component.js ***!
  \***********************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationComponent\", function() { return NavigationComponent; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar NavigationComponent =\n/*#__PURE__*/\nfunction () {\n  function NavigationComponent() {\n    _classCallCheck(this, NavigationComponent);\n  }\n\n  _createClass(NavigationComponent, [{\n    key: \"render\",\n    value: function render() {\n      return \"\\n            <div>NavigationComponent</div>\\n        \";\n    }\n  }]);\n\n  return NavigationComponent;\n}();\n\n//# sourceURL=webpack:///./js/components/navigation.component.js?");

/***/ }),

/***/ "./js/components/notfound.component.js":
/*!*********************************************!*\
  !*** ./js/components/notfound.component.js ***!
  \*********************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NotFoundComponent\", function() { return NotFoundComponent; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar NotFoundComponent =\n/*#__PURE__*/\nfunction () {\n  function NotFoundComponent() {\n    _classCallCheck(this, NotFoundComponent);\n  }\n\n  _createClass(NotFoundComponent, [{\n    key: \"render\",\n    value: function render() {\n      return \"\\n            <div>404</div>\\n        \";\n    }\n  }]);\n\n  return NotFoundComponent;\n}();\n\n//# sourceURL=webpack:///./js/components/notfound.component.js?");

/***/ }),

/***/ "./js/components/products.list.component.js":
/*!**************************************************!*\
  !*** ./js/components/products.list.component.js ***!
  \**************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductsListComponent\", function() { return ProductsListComponent; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ProductsListComponent =\n/*#__PURE__*/\nfunction () {\n  function ProductsListComponent() {\n    _classCallCheck(this, ProductsListComponent);\n  }\n\n  _createClass(ProductsListComponent, [{\n    key: \"render\",\n    value: function render() {\n      return \"\\n            <div>GoodsListComponent</div>\\n        \";\n    }\n  }]);\n\n  return ProductsListComponent;\n}();\n\n//# sourceURL=webpack:///./js/components/products.list.component.js?");

/***/ }),

/***/ "./js/components/products.table.component.js":
/*!***************************************************!*\
  !*** ./js/components/products.table.component.js ***!
  \***************************************************/
/*! exports provided: ProductsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductsTableComponent\", function() { return ProductsTableComponent; });\n/* harmony import */ var _services_products_table_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/products.table.service */ \"./js/services/products.table.service.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar ProductsTableComponent =\n/*#__PURE__*/\nfunction () {\n  function ProductsTableComponent() {\n    _classCallCheck(this, ProductsTableComponent);\n\n    this._productsTableService = new _services_products_table_service__WEBPACK_IMPORTED_MODULE_0__[\"ProductsTableService\"]();\n    this.beforeRender = this.beforeRender.bind(this);\n  }\n\n  _createClass(ProductsTableComponent, [{\n    key: \"beforeRender\",\n    value: function () {\n      var _beforeRender = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this._productsTableService.getProducts();\n\n              case 2:\n                this._products = _context.sent;\n                console.log(this._products);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function beforeRender() {\n        return _beforeRender.apply(this, arguments);\n      }\n\n      return beforeRender;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      return \"   \\n        <div class=\\\"container\\\">   \\n            <table class=\\\"table\\\">\\n                <thead class=\\\"thead-dark\\\">\\n                    <tr>\\n                        <th scope=\\\"col\\\">Code</th>\\n                        <th scope=\\\"col\\\">Name</th>\\n                        <th scope=\\\"col\\\">Description</th>\\n                        <th scope=\\\"col\\\">Price, $</th>\\n                        <th scope=\\\"col\\\">Available</th>\\n                        <th scope=\\\"col\\\">Image</th>\\n                        <th scope=\\\"col\\\">Actions</th>\\n                    </tr>\\n                </thead>\\n                <tbody>\\n                    <tr>\\n                        <th scope=\\\"row\\\">1</th>\\n                        <td>Desk</td>\\n                        <td>Wooden Desk</td>\\n                        <td>900</td>\\n                        <td>true</td>\\n                        <td><a href=\\\"https://cdn20.pamono.com/p/g/4/8/480322_7tuep2o7lr/vintage-wooden-desk-1930s-1.jpg\\\">Click to view</a></td>\\n                        <td>Edit, Delete</td>\\n                    </tr>\\n                    <tr>\\n                        <th scope=\\\"row\\\">2</th>\\n                        <td>Desk</td>\\n                        <td>Wooden Desk</td>\\n                        <td>900</td>\\n                        <td>true</td>\\n                        <td><a href=\\\"https://cdn20.pamono.com/p/g/4/8/480322_7tuep2o7lr/vintage-wooden-desk-1930s-1.jpg\\\">Click to view</a></td>\\n                        <td>Edit, Delete</td>\\n                    </tr>\\n                   \\n                </tbody>\\n          </table></div>\\n        \";\n    }\n  }]);\n\n  return ProductsTableComponent;\n}();\n\n//# sourceURL=webpack:///./js/components/products.table.component.js?");

/***/ }),

/***/ "./js/config/env.js":
/*!**************************!*\
  !*** ./js/config/env.js ***!
  \**************************/
/*! exports provided: ENV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ENV\", function() { return ENV; });\nvar ENV = {\n  mode: 'dev',\n  apiUrl: 'http://5dc00a2895f4b90014ddc13b.mockapi.io/store'\n};\n\n//# sourceURL=webpack:///./js/config/env.js?");

/***/ }),

/***/ "./js/core/http.service.js":
/*!*********************************!*\
  !*** ./js/core/http.service.js ***!
  \*********************************/
/*! exports provided: Http */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Http\", function() { return Http; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Http =\n/*#__PURE__*/\nfunction () {\n  function Http() {\n    _classCallCheck(this, Http);\n  }\n\n  _createClass(Http, [{\n    key: \"get\",\n    value: function get(url) {\n      return new Promise(function (resolve, reject) {\n        fetch(url).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          return resolve(data);\n        })[\"catch\"](function (err) {\n          return reject(err);\n        });\n      });\n    }\n  }, {\n    key: \"post\",\n    value: function post(url, data, options) {\n      return new Promise(function (resolve, reject) {\n        fetch(url, {\n          method: 'POST',\n          body: JSON.stringify(data),\n          headers: {\n            'Content-type': 'application/json'\n          }\n        }).then(function (responce) {\n          return responce.json();\n        }).then(function (data) {\n          return resolve(data);\n        })[\"catch\"](function (err) {\n          return reject(err);\n        });\n      });\n    }\n  }]);\n\n  return Http;\n}();\n\n//# sourceURL=webpack:///./js/core/http.service.js?");

/***/ }),

/***/ "./js/services/products.table.service.js":
/*!***********************************************!*\
  !*** ./js/services/products.table.service.js ***!
  \***********************************************/
/*! exports provided: ProductsTableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductsTableService\", function() { return ProductsTableService; });\n/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/env */ \"./js/config/env.js\");\n/* harmony import */ var _core_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../core/http.service */ \"./js/core/http.service.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar ProductsTableService =\n/*#__PURE__*/\nfunction () {\n  function ProductsTableService() {\n    _classCallCheck(this, ProductsTableService);\n  }\n\n  _createClass(ProductsTableService, [{\n    key: \"getProducts\",\n    value: function getProducts() {\n      var http = new _core_http_service__WEBPACK_IMPORTED_MODULE_1__[\"Http\"]();\n      console.log(ProductsTableService);\n      return new Promise(function (resolve, reject) {\n        http.get(\"\".concat(_config_env__WEBPACK_IMPORTED_MODULE_0__[\"ENV\"].apiUrl, \"/products\")).then(function (response) {\n          console.log(response);\n          resolve(response);\n        })[\"catch\"](function (err) {\n          return reject(err);\n        });\n      });\n    }\n  }]);\n\n  return ProductsTableService;\n}();\n\n//# sourceURL=webpack:///./js/services/products.table.service.js?");

/***/ })

/******/ });