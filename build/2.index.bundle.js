(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Title/style.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Title/style.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".title-bar {\\n  width: 100%;\\n  padding: 8px 16px;\\n  background-color: #335a83;\\n  font-size: 24px;\\n  color: #ffffff;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  box-sizing: border-box; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/Title/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/pages/Analytics/style.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/pages/Analytics/style.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".analytics__focus {\\n  margin: 16px 0 60px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center; }\\n  .analytics__focus__title {\\n    font-size: 16px;\\n    color: #ffffff; }\\n  .analytics__focus__content {\\n    font-size: 60px;\\n    color: #FF4384; }\\n    .analytics__focus__content span {\\n      font-size: 16px;\\n      color: #335a83; }\\n\\n.analytics__chart__date {\\n  font-size: 16px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/pages/Analytics/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./src/components/BarChart/BarChart.jsx":
/*!**********************************************!*\
  !*** ./src/components/BarChart/BarChart.jsx ***!
  \**********************************************/
/*! exports provided: BarChart, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BarChart\", function() { return BarChart; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts/lib/echarts */ \"./node_modules/echarts/lib/echarts.js\");\n/* harmony import */ var echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var echarts_lib_chart_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts/lib/chart/bar */ \"./node_modules/echarts/lib/chart/bar.js\");\n/* harmony import */ var echarts_lib_chart_bar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_chart_bar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var echarts_lib_component_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts/lib/component/title */ \"./node_modules/echarts/lib/component/title.js\");\n/* harmony import */ var echarts_lib_component_title__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_component_title__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.js */ \"./src/components/BarChart/config.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar BarChart =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(BarChart, _React$Component);\n\n  function BarChart(props) {\n    var _this;\n\n    _classCallCheck(this, BarChart);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(BarChart).call(this, props));\n    var id = ('_' + Math.random()).replace('.', '_');\n    _this.state = {\n      barId: 'bar' + id\n    };\n    return _this;\n  }\n\n  _createClass(BarChart, [{\n    key: \"initPie\",\n    value: function initPie(id) {\n      var myChart = echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_1___default.a.getInstanceByDom(document.getElementById(id));\n\n      if (myChart === undefined) {\n        myChart = echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_1___default.a.init(document.getElementById(id));\n      }\n\n      myChart.setOption(_config_js__WEBPACK_IMPORTED_MODULE_4___default.a);\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.initPie(this.state.barId);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        id: this.state.barId,\n        style: {\n          width: '100%',\n          height: '300px'\n        }\n      }));\n    }\n  }]);\n\n  return BarChart;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\n\n//# sourceURL=webpack:///./src/components/BarChart/BarChart.jsx?");

/***/ }),

/***/ "./src/components/BarChart/config.js":
/*!*******************************************!*\
  !*** ./src/components/BarChart/config.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  color: ['#3398DB'],\n  tooltip: {\n    trigger: 'axis',\n    axisPointer: {\n      // 坐标轴指示器，坐标轴触发有效\n      type: 'line' // 默认为直线，可选为：'line' | 'shadow'\n\n    }\n  },\n  grid: {\n    top: 30,\n    bottom: 30,\n    right: 0\n  },\n  xAxis: [{\n    type: 'category',\n    data: ['7/1', '7/2', '7/3', '7/4', '7/5', '7/6', '7/7'],\n    axisLine: {\n      show: true,\n      lineStyle: {\n        color: '#fff'\n      }\n    },\n    axisTick: {\n      alignWithLabel: true\n    },\n    splitLine: {\n      show: false\n    },\n    axisLabel: {\n      textStyle: {\n        color: '#fff',\n        fontSize: '16'\n      }\n    }\n  }],\n  yAxis: [{\n    axisLine: {\n      show: true,\n      lineStyle: {\n        color: '#fff'\n      }\n    },\n    type: 'value',\n    splitLine: {\n      show: false\n    },\n    axisLabel: {\n      textStyle: {\n        color: '#fff',\n        fontSize: '16'\n      }\n    }\n  }],\n  series: [{\n    name: '直接访问',\n    type: 'bar',\n    barWidth: '60%',\n    data: [16, 12, 16, 8, 12, 4, {\n      value: 24,\n      itemStyle: {\n        color: '#FF4384'\n      }\n    }],\n    itemStyle: {\n      normal: {\n        color: '#fff'\n      }\n    }\n  }],\n  textStyle: [{\n    color: '#fff',\n    fontSize: '14px'\n  }]\n};\n\n//# sourceURL=webpack:///./src/components/BarChart/config.js?");

/***/ }),

/***/ "./src/components/BarChart/index.js":
/*!******************************************!*\
  !*** ./src/components/BarChart/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BarChart_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarChart.jsx */ \"./src/components/BarChart/BarChart.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_BarChart_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/components/BarChart/index.js?");

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

/***/ "./src/pages/Analytics/Analytics.jsx":
/*!*******************************************!*\
  !*** ./src/pages/Analytics/Analytics.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Title */ \"./src/components/Title/index.js\");\n/* harmony import */ var _components_BarChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BarChart */ \"./src/components/BarChart/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar Main =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Main, _Component);\n\n  function Main() {\n    _classCallCheck(this, Main);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Main).apply(this, arguments));\n  }\n\n  _createClass(Main, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"analytics__container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"focus Time\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"analytics__focus\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"analytics__focus__container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"analytics__focus__title\"\n      }, \"today\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"analytics__focus__content\"\n      }, \"20\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"/tomato\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"analytics__focus__container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"analytics__focus__title\"\n      }, \"week\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"analytics__focus__content\"\n      }, \"108\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"/tomato\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"chart\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"analytics__chart__date\"\n      }, \"< 2019.7.1 - 2019.7.7 >\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BarChart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\n//# sourceURL=webpack:///./src/pages/Analytics/Analytics.jsx?");

/***/ }),

/***/ "./src/pages/Analytics/index.js":
/*!**************************************!*\
  !*** ./src/pages/Analytics/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Analytics_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Analytics.jsx */ \"./src/pages/Analytics/Analytics.jsx\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/pages/Analytics/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Analytics_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/pages/Analytics/index.js?");

/***/ }),

/***/ "./src/pages/Analytics/style.scss":
/*!****************************************!*\
  !*** ./src/pages/Analytics/style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/pages/Analytics/style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/pages/Analytics/style.scss?");

/***/ })

}]);