"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Saas/About/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/Saas/About/index.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_Saas_about_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @data/Saas/about.json */ \"./src/data/Saas/about.json\");\n/* harmony import */ var _data_Saas_about_rtl_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data/Saas/about-rtl.json */ \"./src/data/Saas/about-rtl.json\");\n/* harmony import */ var _Content1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content1 */ \"./src/components/Saas/About/Content1.jsx\");\n/* harmony import */ var _Content2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content2 */ \"./src/components/Saas/About/Content2.jsx\");\nvar _this = undefined;\n\n\n\n\n\nvar About = function(param) {\n    var noPaddingTop = param.noPaddingTop, rtl = param.rtl;\n    var data = rtl ? _data_Saas_about_rtl_json__WEBPACK_IMPORTED_MODULE_2__ : _data_Saas_about_json__WEBPACK_IMPORTED_MODULE_1__;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"about \".concat(noPaddingTop ? \"pt-0 pb-150\" : \"section-padding\", \" style-5\"),\n        \"data-scroll-index\": \"1\",\n        id: \"challengs\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Content1__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                links: data.lineLinks,\n                rtl: rtl\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\index.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Content2__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                list: data.list,\n                rtl: rtl\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\index.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\index.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TYWFzL0Fib3V0L2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQThDO0FBQ087QUFDbkI7QUFDQTtBQUVsQyxJQUFNSSxLQUFLLEdBQUcsZ0JBQTJCO1FBQXhCQyxZQUFZLFNBQVpBLFlBQVksRUFBRUMsR0FBRyxTQUFIQSxHQUFHO0lBQ2hDLElBQU1DLElBQUksR0FBR0QsR0FBRyxHQUFHTCxzREFBWSxHQUFHRCxrREFBUztJQUUzQyxxQkFDRSw4REFBQ1EsU0FBTztRQUFDQyxTQUFTLEVBQUUsUUFBTyxDQUFpRCxNQUFRLENBQXZESixZQUFZLEdBQUcsYUFBYSxHQUFDLGlCQUFpQixFQUFDLFVBQVEsQ0FBQztRQUFFSyxtQkFBaUIsRUFBQyxHQUFHO1FBQUNDLEVBQUUsRUFBQyxXQUFXOzswQkFDekgsOERBQUNULGlEQUFRO2dCQUFDVSxLQUFLLEVBQUVMLElBQUksQ0FBQ00sU0FBUztnQkFBRVAsR0FBRyxFQUFFQSxHQUFHOzs7OztxQkFBSTswQkFDN0MsOERBQUNILGlEQUFRO2dCQUFDVyxJQUFJLEVBQUVQLElBQUksQ0FBQ08sSUFBSTtnQkFBRVIsR0FBRyxFQUFFQSxHQUFHOzs7OztxQkFBSTs7Ozs7O2FBQy9CLENBQ1g7Q0FDRjtBQVRLRixLQUFBQSxLQUFLO0FBV1gsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2Fhcy9BYm91dC9pbmRleC5qc3g/NTlkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWJvdXREYXRhIGZyb20gJ0BkYXRhL1NhYXMvYWJvdXQuanNvbic7XHJcbmltcG9ydCBhYm91dERhdGFSVEwgZnJvbSAnQGRhdGEvU2Fhcy9hYm91dC1ydGwuanNvbic7XHJcbmltcG9ydCBDb250ZW50MSBmcm9tICcuL0NvbnRlbnQxJztcclxuaW1wb3J0IENvbnRlbnQyIGZyb20gJy4vQ29udGVudDInO1xyXG5cclxuY29uc3QgQWJvdXQgPSAoeyBub1BhZGRpbmdUb3AsIHJ0bCB9KSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHJ0bCA/IGFib3V0RGF0YVJUTCA6IGFib3V0RGF0YTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YGFib3V0ICR7bm9QYWRkaW5nVG9wID8gJ3B0LTAgcGItMTUwJzonc2VjdGlvbi1wYWRkaW5nJ30gc3R5bGUtNWB9IGRhdGEtc2Nyb2xsLWluZGV4PVwiMVwiIGlkPVwiY2hhbGxlbmdzXCI+XHJcbiAgICAgIDxDb250ZW50MSBsaW5rcz17ZGF0YS5saW5lTGlua3N9IHJ0bD17cnRsfSAvPlxyXG4gICAgICA8Q29udGVudDIgbGlzdD17ZGF0YS5saXN0fSBydGw9e3J0bH0gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0Il0sIm5hbWVzIjpbImFib3V0RGF0YSIsImFib3V0RGF0YVJUTCIsIkNvbnRlbnQxIiwiQ29udGVudDIiLCJBYm91dCIsIm5vUGFkZGluZ1RvcCIsInJ0bCIsImRhdGEiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGF0YS1zY3JvbGwtaW5kZXgiLCJpZCIsImxpbmtzIiwibGluZUxpbmtzIiwibGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Saas/About/index.jsx\n"));

/***/ })

});