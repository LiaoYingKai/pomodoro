(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Done/style.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Done/style.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".done__item {\\n  padding: 10px 0px;\\n  border-bottom: 1px solid #335a83;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  text-decoration: line-through;\\n  color: #ffffff;\\n  cursor: pointer; }\\n  .done__item p {\\n    width: 100%;\\n    padding-left: 4px;\\n    color: #ffffff;\\n    font-size: 16px; }\\n  .done__item__pomodoro__group {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center; }\\n  .done__item__pomodoro {\\n    width: 12px;\\n    height: 12px;\\n    border-radius: 50%;\\n    border: 0px solid transparent;\\n    background-color: #ffffff;\\n    box-sizing: border-box;\\n    margin-left: 8px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/Done/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Title/style.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Title/style.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".title-bar {\\n  width: 100%;\\n  padding: 8px 16px;\\n  background-color: #335a83;\\n  font-size: 24px;\\n  color: #ffffff;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  box-sizing: border-box; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/Title/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/pages/TodoList/style.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/pages/TodoList/style.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".todo__list label {\\n  cursor: pointer;\\n  display: inline-block;\\n  content: '';\\n  width: 0;\\n  height: 0;\\n  border-style: solid;\\n  border-width: 7px 0 7px 12.11px;\\n  border-color: transparent transparent transparent #ffffff;\\n  position: relative;\\n  top: 0;\\n  left: 0;\\n  transform: rotate(0deg);\\n  transition: 0.5s; }\\n\\n.todo__list__contnet {\\n  height: 0px;\\n  overflow: hidden;\\n  transition: 0.5s;\\n  margin-bottom: 30px; }\\n\\n.todo__list input[type=checkbox] {\\n  display: none; }\\n  .todo__list input[type=checkbox]:checked + .title-bar label {\\n    transform: rotate(90deg); }\\n  .todo__list input[type=checkbox]:checked ~ .todo__list__contnet {\\n    height: 200px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/pages/TodoList/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./src/components/Done/Done.jsx":
/*!**************************************!*\
  !*** ./src/components/Done/Done.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ButtonIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ButtonIcon */ \"./src/components/ButtonIcon/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar propTypes = {\n  done: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  pomodoroNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  onCheckTodo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  onDeleteTodo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\nvar defaultProps = {\n  done: '',\n  pomodoroNumber: 0,\n  onCheckTodo: function onCheckTodo() {},\n  onDeleteTodo: function onDeleteTodo() {}\n};\n\nvar Done =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Done, _React$Component);\n\n  function Done() {\n    var _this;\n\n    _classCallCheck(this, Done);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Done).call(this));\n    _this._renderPomodoroGroup = _this._renderPomodoroGroup.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Done, [{\n    key: \"_renderPomodoroGroup\",\n    value: function _renderPomodoroGroup() {\n      var pomodoroNumber = this.props.pomodoroNumber;\n      var pomodoreGroup = [];\n      var name = 'done__item__pomodoro';\n\n      for (var i = 0; i < pomodoroNumber; i++) {\n        pomodoreGroup.push(name);\n      }\n\n      return pomodoreGroup.map(function (item, index) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          key: \"\".concat(item, \"__\").concat(index),\n          className: item\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          done = _this$props.done,\n          onCheckTodo = _this$props.onCheckTodo,\n          onDeleteTodo = _this$props.onDeleteTodo;\n      var _renderPomodoroGroup = this._renderPomodoroGroup;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"done__item\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        type: _ButtonIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ButtonIconEnums.CHECKED,\n        onClick: onDeleteTodo\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        onClick: onCheckTodo\n      }, done), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"done__item__pomodoro__group\"\n      }, _renderPomodoroGroup()));\n    }\n  }]);\n\n  return Done;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nDone.propTypes = propTypes;\nDone.defaultProps = defaultProps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Done);\n\n//# sourceURL=webpack:///./src/components/Done/Done.jsx?");

/***/ }),

/***/ "./src/components/Done/index.js":
/*!**************************************!*\
  !*** ./src/components/Done/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Done_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Done.jsx */ \"./src/components/Done/Done.jsx\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/components/Done/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Done_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/components/Done/index.js?");

/***/ }),

/***/ "./src/components/Done/style.scss":
/*!****************************************!*\
  !*** ./src/components/Done/style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Done/style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Done/style.scss?");

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

/***/ "./src/pages/TodoList/TodoList.jsx":
/*!*****************************************!*\
  !*** ./src/pages/TodoList/TodoList.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Title */ \"./src/components/Title/index.js\");\n/* harmony import */ var _components_InputTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/InputTodo */ \"./src/components/InputTodo/index.js\");\n/* harmony import */ var _components_ButtonIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ButtonIcon */ \"./src/components/ButtonIcon/index.js\");\n/* harmony import */ var _components_Todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Todo */ \"./src/components/Todo/index.js\");\n/* harmony import */ var _components_Done__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Done */ \"./src/components/Done/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions_todoActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/todoActions */ \"./src/actions/todoActions.js\");\n/* harmony import */ var _actions_doingActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/doingActions */ \"./src/actions/doingActions.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n\n\n\nvar TodoList =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(TodoList, _Component);\n\n  function TodoList() {\n    var _this;\n\n    _classCallCheck(this, TodoList);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));\n    _this._renderTodo = _this._renderTodo.bind(_assertThisInitialized(_this));\n    _this._renderDoneTodo = _this._renderDoneTodo.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(TodoList, [{\n    key: \"_renderTodo\",\n    value: function _renderTodo() {\n      var _this$props = this.props,\n          todos = _this$props.todos,\n          changeTodoState = _this$props.changeTodoState,\n          setDoing = _this$props.setDoing;\n      return todos.filter(function (item) {\n        return !item.isDone;\n      }).map(function (item) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Todo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          key: \"todo__\".concat(item.id),\n          todo: item.text,\n          onCheckTodo: function onCheckTodo() {\n            changeTodoState(item.id);\n          },\n          onChangeTodo: function onChangeTodo() {\n            setDoing(item.id);\n          }\n        });\n      });\n    }\n  }, {\n    key: \"_renderDoneTodo\",\n    value: function _renderDoneTodo() {\n      var _this$props2 = this.props,\n          todos = _this$props2.todos,\n          deleteTodo = _this$props2.deleteTodo,\n          changeTodoState = _this$props2.changeTodoState;\n      return todos.filter(function (item) {\n        return item.isDone;\n      }).map(function (item) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Done__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          key: \"done__todo__\".concat(item.id),\n          done: item.text,\n          pomodoroNumber: item.pomodoroNumber,\n          onDeleteTodo: function onDeleteTodo() {\n            deleteTodo(item.id);\n          },\n          onCheckTodo: function onCheckTodo() {\n            changeTodoState(item.id);\n          }\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _renderTodo = this._renderTodo,\n          _renderDoneTodo = this._renderDoneTodo;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"todo__list\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_InputTodo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        color: _components_InputTodo__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ColorEnums.PINK\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"checkbox\",\n        name: \"tab\",\n        id: \"tab1\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"TO-DO\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"tab1\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"todo__list__contnet\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Todo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        todo: \"the first thing to do today\"\n      }), _renderTodo())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"checkbox\",\n        name: \"tab\",\n        id: \"tab2\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"DONE\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"tab2\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"todo__list__contnet\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Done__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        done: \"The first thing to do today\",\n        pomodoroNumber: 5\n      }), _renderDoneTodo()))));\n    }\n  }]);\n\n  return TodoList;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nfunction mapStateToProps(state) {\n  return {\n    todos: state.todos\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    deleteTodo: function deleteTodo(id) {\n      dispatch(Object(_actions_todoActions__WEBPACK_IMPORTED_MODULE_8__[\"deleteTodo\"])(id));\n    },\n    changeTodoState: function changeTodoState(id) {\n      dispatch(Object(_actions_todoActions__WEBPACK_IMPORTED_MODULE_8__[\"changeTodoState\"])(id));\n    },\n    setDoing: function setDoing(id) {\n      dispatch(Object(_actions_doingActions__WEBPACK_IMPORTED_MODULE_9__[\"setDoing\"])(id));\n    }\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(mapStateToProps, mapDispatchToProps)(TodoList));\n\n//# sourceURL=webpack:///./src/pages/TodoList/TodoList.jsx?");

/***/ }),

/***/ "./src/pages/TodoList/index.js":
/*!*************************************!*\
  !*** ./src/pages/TodoList/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TodoList_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList.jsx */ \"./src/pages/TodoList/TodoList.jsx\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/pages/TodoList/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_TodoList_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/pages/TodoList/index.js?");

/***/ }),

/***/ "./src/pages/TodoList/style.scss":
/*!***************************************!*\
  !*** ./src/pages/TodoList/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/pages/TodoList/style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/pages/TodoList/style.scss?");

/***/ })

}]);