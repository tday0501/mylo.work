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

/***/ "./components/organisms/Layout.js":
/*!****************************************!*\
  !*** ./components/organisms/Layout.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/esm/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"./node_modules/@material-ui/core/esm/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ \"./node_modules/@material-ui/core/esm/useScrollTrigger/index.js\");\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Layout.module.css */ \"./styles/Layout.module.css\");\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _utils_stringConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/stringConstants */ \"./utils/stringConstants.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction ElevationScroll(props) {\n    _s();\n    var children = props.children, window = props.window;\n    // Note that you normally won't need to set the window ref as useScrollTrigger\n    // will default to window.\n    // This is only being set here because the demo is in an iframe.\n    var trigger = (0,_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n        disableHysteresis: true,\n        threshold: 0,\n        target: window ? window() : undefined\n    });\n    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {\n        elevation: trigger ? 4 : 0\n    }));\n}\n_s(ElevationScroll, \"EC2GbbZl9x3XKoXLVx1H89cOBi0=\", false, function() {\n    return [\n        _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = ElevationScroll;\nElevationScroll.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().element.isRequired),\n    window: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)\n};\nfunction Layout(_param) {\n    var children = _param.children, props = _objectWithoutProperties(_param, [\n        \"children\"\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ElevationScroll, _objectSpread({}, props, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    id: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().appbar),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        id: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().toolbar),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Box, {\n                                id: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().box),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/images/Logo.svg\",\n                                        alt: \"Logo\",\n                                        width: 25,\n                                        height: 25\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().span),\n                                        children: \"Mylo\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Chip, {\n                                        label: \"beta\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                                variant: \"contained\",\n                                size: \"small\",\n                                id: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().button),\n                                href: \"/try-mylo\",\n                                disableElevation: true,\n                                children: _utils_stringConstants__WEBPACK_IMPORTED_MODULE_3__.TRY_MYLO\n                            }, void 0, false, {\n                                fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }), void 0, false, {\n                fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Box, {\n                id: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c1 = Layout;\nvar _c, _c1;\n$RefreshReg$(_c, \"ElevationScroll\");\n$RefreshReg$(_c1, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZ2FuaXNtcy9MYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ1M7QUFDVztBQUNFO0FBQ1E7QUFDVTtBQUNkO0FBQ3JCO0FBQ3VCO0FBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUU3Q1ksZUFBZSxDQUFDQyxLQUFLLEVBQUUsQ0FBQzs7SUFDL0IsR0FBSyxDQUFHQyxRQUFRLEdBQWFELEtBQUssQ0FBMUJDLFFBQVEsRUFBRUMsTUFBTSxHQUFLRixLQUFLLENBQWhCRSxNQUFNO0lBQ3hCLEVBQThFO0lBQzlFLEVBQTBCO0lBQzFCLEVBQWdFO0lBQ2hFLEdBQUssQ0FBQ0MsT0FBTyxHQUFHWCw4RUFBZ0IsQ0FBQyxDQUFDO1FBQ2hDWSxpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCQyxTQUFTLEVBQUUsQ0FBQztRQUNaQyxNQUFNLEVBQUVKLE1BQU0sR0FBR0EsTUFBTSxLQUFLSyxTQUFTO0lBQ3ZDLENBQUM7SUFFRCxNQUFNLGVBQUNwQix5REFBa0IsQ0FBQ2MsUUFBUSxFQUFFLENBQUM7UUFDbkNRLFNBQVMsRUFBRU4sT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQzVCLENBQUM7QUFDSCxDQUFDO0dBZFFKLGVBQWU7O1FBS05QLDBFQUFnQjs7O0tBTHpCTyxlQUFlO0FBZ0J4QkEsZUFBZSxDQUFDVyxTQUFTLEdBQUcsQ0FBQztJQUMzQlQsUUFBUSxFQUFFYixzRUFBNEI7SUFDdENjLE1BQU0sRUFBRWQsd0RBQWM7QUFDeEIsQ0FBQztBQUVjLFFBQVEsQ0FBQzBCLE1BQU0sQ0FBQyxNQUFzQixFQUFFLENBQUM7UUFBdkJiLFFBQVEsR0FBVixNQUFzQixDQUFwQkEsUUFBUSxFQUFLRCxLQUFLLDRCQUFwQixNQUFzQjtRQUFwQkMsQ0FBUTs7SUFDdkMsTUFBTTs7d0ZBRURWLHFFQUFXOzs7Ozt3RkFDWFEsZUFBZSxvQkFBS0MsS0FBSztzR0FDdkJYLGdFQUFNO29CQUFDMEIsRUFBRSxFQUFFdEIseUVBQWE7MEdBQ3RCSCxpRUFBTzt3QkFBQ3lCLEVBQUUsRUFBRXRCLDBFQUFjOzt3R0FDeEJFLG1EQUFHO2dDQUFDb0IsRUFBRSxFQUFFdEIsc0VBQVU7O2dIQUNoQkMsbURBQUs7d0NBQUN5QixHQUFHLEVBQUMsQ0FBa0I7d0NBQUNDLEdBQUcsRUFBQyxDQUFNO3dDQUFDQyxLQUFLLEVBQUUsRUFBRTt3Q0FBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7OztnSEFDN0RDLENBQUc7d0NBQUNDLFNBQVMsRUFBRS9CLHVFQUFXO2tEQUFFLENBQUk7Ozs7OztnSEFDaENJLG9EQUFJO3dDQUFDNkIsS0FBSyxFQUFDLENBQU07Ozs7Ozs7Ozs7Ozt3R0FFbkI5QixzREFBTTtnQ0FDTCtCLE9BQU8sRUFBQyxDQUFXO2dDQUNuQkMsSUFBSSxFQUFDLENBQU87Z0NBQ1piLEVBQUUsRUFBRXRCLHlFQUFhO2dDQUNqQnFDLElBQUksRUFBQyxDQUFXO2dDQUNoQkMsZ0JBQWdCOzBDQUVkakMsNERBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBS2pCUixpRUFBTzs7Ozs7d0ZBQ1BLLG1EQUFHO2dCQUFDb0IsRUFBRSxFQUFFdEIsNEVBQWdCOzBCQUFHUSxRQUFROzs7Ozs7OztBQUcxQyxDQUFDO01BNUJ1QmEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9MYXlvdXQuanM/NGEwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XG5pbXBvcnQgdXNlU2Nyb2xsVHJpZ2dlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlU2Nyb2xsVHJpZ2dlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0xheW91dC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBDaGlwIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBUUllfTVlMTyB9IGZyb20gXCIuLi8uLi91dGlscy9zdHJpbmdDb25zdGFudHNcIjtcblxuZnVuY3Rpb24gRWxldmF0aW9uU2Nyb2xsKHByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIHdpbmRvdyB9ID0gcHJvcHM7XG4gIC8vIE5vdGUgdGhhdCB5b3Ugbm9ybWFsbHkgd29uJ3QgbmVlZCB0byBzZXQgdGhlIHdpbmRvdyByZWYgYXMgdXNlU2Nyb2xsVHJpZ2dlclxuICAvLyB3aWxsIGRlZmF1bHQgdG8gd2luZG93LlxuICAvLyBUaGlzIGlzIG9ubHkgYmVpbmcgc2V0IGhlcmUgYmVjYXVzZSB0aGUgZGVtbyBpcyBpbiBhbiBpZnJhbWUuXG4gIGNvbnN0IHRyaWdnZXIgPSB1c2VTY3JvbGxUcmlnZ2VyKHtcbiAgICBkaXNhYmxlSHlzdGVyZXNpczogdHJ1ZSxcbiAgICB0aHJlc2hvbGQ6IDAsXG4gICAgdGFyZ2V0OiB3aW5kb3cgPyB3aW5kb3coKSA6IHVuZGVmaW5lZCxcbiAgfSk7XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgIGVsZXZhdGlvbjogdHJpZ2dlciA/IDQgOiAwLFxuICB9KTtcbn1cblxuRWxldmF0aW9uU2Nyb2xsLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXG4gIHdpbmRvdzogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgIDxFbGV2YXRpb25TY3JvbGwgey4uLnByb3BzfT5cbiAgICAgICAgPEFwcEJhciBpZD17c3R5bGVzLmFwcGJhcn0+XG4gICAgICAgICAgPFRvb2xiYXIgaWQ9e3N0eWxlcy50b29sYmFyfT5cbiAgICAgICAgICAgIDxCb3ggaWQ9e3N0eWxlcy5ib3h9PlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9Mb2dvLnN2Z1wiIGFsdD1cIkxvZ29cIiB3aWR0aD17MjV9IGhlaWdodD17MjV9IC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3Bhbn0+TXlsbzwvZGl2PlxuICAgICAgICAgICAgICA8Q2hpcCBsYWJlbD1cImJldGFcIi8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIGlkPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgICAgICBocmVmPVwiL3RyeS1teWxvXCJcbiAgICAgICAgICAgICAgZGlzYWJsZUVsZXZhdGlvblxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7IFRSWV9NWUxPIH1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgPC9BcHBCYXI+XG4gICAgICA8L0VsZXZhdGlvblNjcm9sbD5cbiAgICAgIDxUb29sYmFyIC8+XG4gICAgICA8Qm94IGlkPXtzdHlsZXMuY29udGFpbmVyfT57Y2hpbGRyZW59PC9Cb3g+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJ1c2VTY3JvbGxUcmlnZ2VyIiwic3R5bGVzIiwiSW1hZ2UiLCJCb3giLCJCdXR0b24iLCJDaGlwIiwiVFJZX01ZTE8iLCJFbGV2YXRpb25TY3JvbGwiLCJwcm9wcyIsImNoaWxkcmVuIiwid2luZG93IiwidHJpZ2dlciIsImRpc2FibGVIeXN0ZXJlc2lzIiwidGhyZXNob2xkIiwidGFyZ2V0IiwidW5kZWZpbmVkIiwiY2xvbmVFbGVtZW50IiwiZWxldmF0aW9uIiwicHJvcFR5cGVzIiwiZWxlbWVudCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiTGF5b3V0IiwiaWQiLCJhcHBiYXIiLCJ0b29sYmFyIiwiYm94Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwibGFiZWwiLCJ2YXJpYW50Iiwic2l6ZSIsImJ1dHRvbiIsImhyZWYiLCJkaXNhYmxlRWxldmF0aW9uIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/organisms/Layout.js\n");

/***/ })

});