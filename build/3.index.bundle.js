(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Title/style.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Title/style.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".title-bar {\\n  width: 100%;\\n  padding: 8px 16px;\\n  background-color: #335a83;\\n  font-size: 24px;\\n  color: #ffffff;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  box-sizing: border-box; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/Title/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/pages/Ringtones/style.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/pages/Ringtones/style.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".ringtones__container {\\n  width: 445px; }\\n\\n.ringtones__item {\\n  color: #ffffff;\\n  width: 33%;\\n  font-size: 16px;\\n  display: inline-flex;\\n  align-items: center;\\n  margin-top: 16px;\\n  cursor: pointer; }\\n\\n.ringtones__break,\\n.ringtones__work {\\n  margin-bottom: 48px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/pages/Ringtones/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./src/components/Title/Title.jsx":
/*!****************************************!*\
  !*** ./src/components/Title/Title.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Title = function Title(_ref) {\n  var title = _ref.title,\n      children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"title-bar\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, title), children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Title);\n\n//# sourceURL=webpack:///./src/components/Title/Title.jsx?");

/***/ }),

/***/ "./src/components/Title/index.js":
/*!***************************************!*\
  !*** ./src/components/Title/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Title_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Title.jsx */ \"./src/components/Title/Title.jsx\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/components/Title/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Title_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/components/Title/index.js?");

/***/ }),

/***/ "./src/components/Title/style.scss":
/*!*****************************************!*\
  !*** ./src/components/Title/style.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Title/style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Title/style.scss?");

/***/ }),

/***/ "./src/pages/Ringtones/Ringtones.jsx":
/*!*******************************************!*\
  !*** ./src/pages/Ringtones/Ringtones.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Title */ \"./src/components/Title/index.js\");\n/* harmony import */ var _components_ButtonIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ButtonIcon */ \"./src/components/ButtonIcon/index.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ \"./src/pages/Ringtones/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar music = ['none', 'default', 'alarm', 'alert', 'beep', 'bell', 'bird', 'bugle', 'difital', 'drop', 'horn', 'music', 'ring', 'warning', 'whistle'];\n\nvar Ringtones =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Ringtones, _Component);\n\n  function Ringtones() {\n    var _this;\n\n    _classCallCheck(this, Ringtones);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ringtones).call(this));\n    _this._renderList = _this._renderList.bind(_assertThisInitialized(_this));\n    _this._handleChangeMusic = _this._handleChangeMusic.bind(_assertThisInitialized(_this));\n    _this.state = {\n      workMusic: 'default',\n      breakMusic: 'alert'\n    };\n    return _this;\n  }\n\n  _createClass(Ringtones, [{\n    key: \"_handleChangeMusic\",\n    value: function _handleChangeMusic(type, index) {\n      type === 'workMusic' ? this.setState({\n        workMusic: music[index]\n      }) : this.setState({\n        breakMusic: music[index]\n      });\n    }\n  }, {\n    key: \"_renderList\",\n    value: function _renderList(type, chooseItem) {\n      var _this2 = this;\n\n      return music.map(function (item, index) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"ringtones__item\",\n          key: \"music\".concat(index),\n          onClick: function onClick() {\n            return _this2._handleChangeMusic(type, index);\n          }\n        }, item === chooseItem ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ButtonIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          type: _components_ButtonIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ButtonIconEnums.CHOOSED\n        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ButtonIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), item);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _renderList = this._renderList;\n      var _this$state = this.state,\n          workMusic = _this$state.workMusic,\n          breakMusic = _this$state.breakMusic;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"ringtones__container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"ringtones__work\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"WORK\"\n      }), _renderList('workMusic', workMusic)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"ringtones__break\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"BREAK\"\n      }), _renderList('breakMusic', breakMusic)));\n    }\n  }]);\n\n  return Ringtones;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ringtones);\n\n//# sourceURL=webpack:///./src/pages/Ringtones/Ringtones.jsx?");

/***/ }),

/***/ "./src/pages/Ringtones/index.js":
/*!**************************************!*\
  !*** ./src/pages/Ringtones/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ringtones_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ringtones.jsx */ \"./src/pages/Ringtones/Ringtones.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Ringtones_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/pages/Ringtones/index.js?");

/***/ }),

/***/ "./src/pages/Ringtones/style.scss":
/*!****************************************!*\
  !*** ./src/pages/Ringtones/style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/pages/Ringtones/style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/pages/Ringtones/style.scss?");

/***/ })

}]);