webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Event.js":
/*!*****************************!*\
  !*** ./components/Event.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Monter.Marco/Udemy/React/cryptocenter/components/Event.js";


var Event = function Event(props) {
  var _props$info = props.info,
      name = _props$info.name,
      url = _props$info.url,
      description = _props$info.description;
  var ttl = name.text;

  if (ttl.length > 100) {
    ttl = ttl.substr(0, 100);
  }

  var desc = description.text;

  if (desc) {
    desc = desc.substr(0, 200);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card bg-primary disable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: url,
    target: "_blank",
    className: "list-group-item text-primary mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, ttl), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, desc)));
};

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ })

})
//# sourceMappingURL=index.js.9f24ed4ebe9db803563c.hot-update.js.map