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

/***/ "./src/components/Saas/About/Content1.jsx":
/*!************************************************!*\
  !*** ./src/components/Saas/About/Content1.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Content = function(param) {\n    var links = param.links, rtl = param.rtl;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isVisible = ref[0], setIsVisible = ref[1];\n    var sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var observer = new IntersectionObserver(function(param) {\n            var _param = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(param, 1), entry = _param[0];\n            if (entry.isIntersecting) {\n                setIsVisible(true);\n                observer.unobserve(sectionRef.current); // Stop observing once it becomes visible\n            }\n        }, {\n            threshold: 0.5\n        } // Adjust the threshold as needed\n        );\n        if (sectionRef.current) {\n            observer.observe(sectionRef.current);\n        }\n        return function() {\n            if (sectionRef.current) {\n                observer.unobserve(sectionRef.current); // Cleanup on unmount\n            }\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"content mb-lg-5 pb-lg-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row align-items-center justify-content-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"section-head mb-30 pb-lg-5 style-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg-center text-left\",\n                            children: [\n                                \"What's slowing \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"lenders down?\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 71\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-lg-3 d-grid gap-lg-5 gap-4 order-1 order-lg-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: sectionRef,\n                                className: \"fade-in \".concat(isVisible ? \"active\" : \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-blue lender_down_num\",\n                                        children: \"80%\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"lender_down_title\",\n                                        children: \"Customer drop offs \"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: sectionRef,\n                                className: \"fade-in \".concat(isVisible ? \"active\" : \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-blue lender_down_num\",\n                                        children: \"$200 - $500\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-dark lender_down_title\",\n                                        children: \"Cost of acquiring a customer \"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-lg-4 order-0 order-lg-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"img main-img1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/assets/img/about/about_s5_1_1.png\",\n                                    alt: \"\",\n                                    className: \"sm-circle\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/assets/img/about/about_s5_1_2.jpeg\",\n                                    alt: \"\",\n                                    className: \"img-body\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/assets/img/about/about_s5_1_5.png\",\n                                    alt: \"\",\n                                    className: \"lg-circle\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-lg-4 d-grid gap-lg-5 gap-4 order-2 order-lg-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: sectionRef,\n                                className: \"fade-in \".concat(isVisible ? \"active\" : \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-blue lender_down_num\",\n                                        children: \"5 to 7 days\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-dark lender_down_title\",\n                                        children: \"Loan processing times  \"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: sectionRef,\n                                className: \"fade-in \".concat(isVisible ? \"active\" : \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-blue lender_down_num\",\n                                        children: \"6 months to 1 year\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-dark lender_down_title\",\n                                        children: \"To launch new products \"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\QUIKCARE COMPUTERS\\\\Desktop\\\\Projects\\\\iteck_react\\\\src\\\\components\\\\Saas\\\\About\\\\Content1.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_s(Content, \"V6vBcR9/q+6EzWHldrLvzlU2jjw=\");\n_c = Content;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\nvar _c;\n$RefreshReg$(_c, \"Content\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TYWFzL0Fib3V0L0NvbnRlbnQxLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7O0FBQXlCO0FBQ3dCOztBQUVqRCxJQUFNSSxPQUFPLEdBQUcsZ0JBQW9CO1FBQWpCQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsR0FBRyxTQUFIQSxHQUFHOztJQUMzQixJQUFrQ0wsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUExQ00sU0FBUyxHQUFrQk4sR0FBZSxHQUFqQyxFQUFFTyxZQUFZLEdBQUlQLEdBQWUsR0FBbkI7SUFDOUIsSUFBTVEsVUFBVSxHQUFHTiw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUUvQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTVEsUUFBUSxHQUFHLElBQUlDLG9CQUFvQixDQUN2QyxnQkFBYTtxSEFBWEMsS0FBSztZQUNMLElBQUlBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2dCQUN4QkwsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQkUsUUFBUSxDQUFDSSxTQUFTLENBQUNMLFVBQVUsQ0FBQ00sT0FBTyxDQUFDLENBQUMsQ0FBQyx5Q0FBeUM7YUFDbEY7U0FDRixFQUNEO1lBQUVDLFNBQVMsRUFBRSxHQUFHO1NBQUUsQ0FBQyxpQ0FBaUM7U0FDckQ7UUFFRCxJQUFJUCxVQUFVLENBQUNNLE9BQU8sRUFBRTtZQUN0QkwsUUFBUSxDQUFDTyxPQUFPLENBQUNSLFVBQVUsQ0FBQ00sT0FBTyxDQUFDLENBQUM7U0FDdEM7UUFFRCxPQUFPLFdBQU07WUFDWCxJQUFJTixVQUFVLENBQUNNLE9BQU8sRUFBRTtnQkFDdEJMLFFBQVEsQ0FBQ0ksU0FBUyxDQUFDTCxVQUFVLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUMscUJBQXFCO2FBQzlEO1NBQ0YsQ0FBQztLQUNILEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ0csS0FBRztRQUFDQyxTQUFTLEVBQUMseUJBQXlCO2tCQUN0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QSxLQUFBQSxPQUFPO0FBeUViLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NhYXMvQWJvdXQvQ29udGVudDEuanN4P2YzMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDb250ZW50ID0gKHsgbGlua3MsIHJ0bCB9KSA9PiB7XHJcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzZWN0aW9uUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXHJcbiAgICAgIChbZW50cnldKSA9PiB7XHJcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICBzZXRJc1Zpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoc2VjdGlvblJlZi5jdXJyZW50KTsgLy8gU3RvcCBvYnNlcnZpbmcgb25jZSBpdCBiZWNvbWVzIHZpc2libGVcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdGhyZXNob2xkOiAwLjUgfSAvLyBBZGp1c3QgdGhlIHRocmVzaG9sZCBhcyBuZWVkZWRcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHNlY3Rpb25SZWYuY3VycmVudCkge1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHNlY3Rpb25SZWYuY3VycmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKHNlY3Rpb25SZWYuY3VycmVudCkge1xyXG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShzZWN0aW9uUmVmLmN1cnJlbnQpOyAvLyBDbGVhbnVwIG9uIHVubW91bnRcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgbWItbGctNSBwYi1sZy01XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZCBtYi0zMCBwYi1sZy01IHN0eWxlLTVcIj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZy1jZW50ZXIgdGV4dC1sZWZ0XCI+V2hhdCdzIHNsb3dpbmcgPHNwYW4+bGVuZGVycyBkb3duPzwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgZC1ncmlkIGdhcC1sZy01IGdhcC00IG9yZGVyLTEgb3JkZXItbGctMVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgcmVmPXtzZWN0aW9uUmVmfSBjbGFzc05hbWU9e2BmYWRlLWluICR7aXNWaXNpYmxlID8gJ2FjdGl2ZScgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUgbGVuZGVyX2Rvd25fbnVtXCI+ODAlPC9oMj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJsZW5kZXJfZG93bl90aXRsZVwiPkN1c3RvbWVyIGRyb3Agb2ZmcyA8L2g0PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiByZWY9e3NlY3Rpb25SZWZ9IGNsYXNzTmFtZT17YGZhZGUtaW4gJHtpc1Zpc2libGUgPyAnYWN0aXZlJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtYmx1ZSBsZW5kZXJfZG93bl9udW1cIj4kMjAwIC0gJDUwMDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1kYXJrIGxlbmRlcl9kb3duX3RpdGxlXCI+Q29zdCBvZiBhY3F1aXJpbmcgYSBjdXN0b21lciA8L2g0PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IG9yZGVyLTAgb3JkZXItbGctMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZyBtYWluLWltZzFcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2Fib3V0L2Fib3V0X3M1XzFfMS5wbmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJzbS1jaXJjbGVcIiAvPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvYWJvdXQvYWJvdXRfczVfMV8yLmpwZWdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctYm9keVwiIC8+XHJcbiAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvYWJvdXQvYWJvdXRfczVfMV8zLnBuZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImNhcmQxXCIgLz5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2Fib3V0L2Fib3V0X3M1XzFfNC5wbmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJjYXJkMlwiIC8+ICovfVxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvYWJvdXQvYWJvdXRfczVfMV81LnBuZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImxnLWNpcmNsZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTFcIj48L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgZC1ncmlkIGdhcC1sZy01IGdhcC00IG9yZGVyLTIgb3JkZXItbGctM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17c2VjdGlvblJlZn0gY2xhc3NOYW1lPXtgZmFkZS1pbiAke2lzVmlzaWJsZSA/ICdhY3RpdmUnIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1ibHVlIGxlbmRlcl9kb3duX251bVwiPjUgdG8gNyBkYXlzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgbGVuZGVyX2Rvd25fdGl0bGVcIj5Mb2FuIHByb2Nlc3NpbmcgdGltZXMgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgcmVmPXtzZWN0aW9uUmVmfSBjbGFzc05hbWU9e2BmYWRlLWluICR7aXNWaXNpYmxlID8gJ2FjdGl2ZScgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUgbGVuZGVyX2Rvd25fbnVtXCI+NiBtb250aHMgdG8gMSB5ZWFyPC9oMj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgbGVuZGVyX2Rvd25fdGl0bGVcIj5UbyBsYXVuY2ggbmV3IHByb2R1Y3RzIDwvaDQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQ29udGVudCIsImxpbmtzIiwicnRsIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwic2VjdGlvblJlZiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidW5vYnNlcnZlIiwiY3VycmVudCIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInNwYW4iLCJyZWYiLCJoNCIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Saas/About/Content1.jsx\n"));

/***/ })

});