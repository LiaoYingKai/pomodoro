(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{237:function(e,n,t){var r=t(238);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(9)(r,o);r.locals&&(e.exports=r.locals)},238:function(e,n,t){(e.exports=t(8)(!1)).push([e.i,".ringtones__container {\n  width: 445px; }\n\n.ringtones__item {\n  color: #ffffff;\n  width: 33%;\n  font-size: 16px;\n  display: inline-flex;\n  align-items: center;\n  margin-top: 16px;\n  cursor: pointer; }\n\n.ringtones__break,\n.ringtones__work {\n  margin-bottom: 48px; }\n",""])},241:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),i=(t(1),t(81)),a=t(12);t(237);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var p=["none","default","alarm","alert","beep","bell","bird","bugle","difital","drop","horn","music","ring","warning","whistle"],b=function(e){function n(){var e,t,r;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),t=this,(e=!(r=u(n).call(this))||"object"!==c(r)&&"function"!=typeof r?l(t):r)._renderList=e._renderList.bind(l(e)),e._handleChangeMusic=e._handleChangeMusic.bind(l(e)),e.state={workMusic:"default",breakMusic:"alert"},e}var t,b,d;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}(n,r["Component"]),t=n,(b=[{key:"_handleChangeMusic",value:function(e,n){"workMusic"===e?this.setState({workMusic:p[n]}):this.setState({breakMusic:p[n]})}},{key:"_renderList",value:function(e,n){var t=this;return p.map(function(r,i){return o.a.createElement("div",{className:"ringtones__item",key:"music".concat(i),onClick:function(){return t._handleChangeMusic(e,i)}},r===n?o.a.createElement(a.a,{type:a.a.ButtonIconEnums.CHOOSED}):o.a.createElement(a.a,null),r)})}},{key:"render",value:function(){var e=this._renderList,n=this.state,t=n.workMusic,r=n.breakMusic;return o.a.createElement("div",{className:"ringtones__container"},o.a.createElement("div",{className:"ringtones__work"},o.a.createElement(i.a,{title:"WORK"}),e("workMusic",t)),o.a.createElement("div",{className:"ringtones__break"},o.a.createElement(i.a,{title:"BREAK"}),e("breakMusic",r)))}}])&&s(t.prototype,b),d&&s(t,d),n}();n.default=b},73:function(e,n,t){var r=t(74);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(9)(r,o);r.locals&&(e.exports=r.locals)},74:function(e,n,t){(e.exports=t(8)(!1)).push([e.i,".title-bar {\n  width: 100%;\n  padding: 8px 16px;\n  background-color: #335a83;\n  font-size: 24px;\n  color: #ffffff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box; }\n",""])},81:function(e,n,t){"use strict";var r=t(0),o=t.n(r),i=function(e){var n=e.title,t=e.children;return o.a.createElement("div",{className:"title-bar"},o.a.createElement("p",null,n),t)};t(73),n.a=i}}]);