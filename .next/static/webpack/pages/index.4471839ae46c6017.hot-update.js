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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/esm/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"./node_modules/@material-ui/core/esm/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ \"./node_modules/@material-ui/core/esm/useScrollTrigger/index.js\");\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Layout.module.css */ \"./styles/Layout.module.css\");\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _utils_stringConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/stringConstants */ \"./utils/stringConstants.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction ElevationScroll(props) {\n    _s();\n    var children = props.children, window = props.window;\n    // Note that you normally won't need to set the window ref as useScrollTrigger\n    // will default to window.\n    // This is only being set here because the demo is in an iframe.\n    var trigger = (0,_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n        disableHysteresis: true,\n        threshold: 0,\n        target: window ? window() : undefined\n    });\n    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {\n        elevation: trigger ? 4 : 0\n    }));\n}\n_s(ElevationScroll, \"EC2GbbZl9x3XKoXLVx1H89cOBi0=\", false, function() {\n    return [\n        _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = ElevationScroll;\nElevationScroll.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().element.isRequired),\n    window: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)\n};\nfunction Layout(_param) {\n    var children = _param.children, props = _objectWithoutProperties(_param, [\n        \"children\"\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ElevationScroll, _objectSpread({}, props, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    id: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().appbar),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        id: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().toolbar),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Box, {\n                                id: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().box),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/images/Logo.svg\",\n                                        alt: \"Logo\",\n                                        width: 25,\n                                        height: 25\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().span),\n                                        children: \"Mylo\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Chip, {\n                                        children: \"Beta\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                                variant: \"contained\",\n                                size: \"small\",\n                                id: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().button),\n                                href: \"/try-mylo\",\n                                disableElevation: true,\n                                children: _utils_stringConstants__WEBPACK_IMPORTED_MODULE_3__.TRY_MYLO\n                            }, void 0, false, {\n                                fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }), void 0, false, {\n                fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Box, {\n                id: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/tranmday/Desktop/mylo.work/components/organisms/Layout.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c1 = Layout;\nvar _c, _c1;\n$RefreshReg$(_c, \"ElevationScroll\");\n$RefreshReg$(_c1, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZ2FuaXNtcy9MYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ1M7QUFDVztBQUNFO0FBQ1E7QUFDVTtBQUNkO0FBQ3JCO0FBQ3VCO0FBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUU3Q1ksZUFBZSxDQUFDQyxLQUFLLEVBQUUsQ0FBQzs7SUFDL0IsR0FBSyxDQUFHQyxRQUFRLEdBQWFELEtBQUssQ0FBMUJDLFFBQVEsRUFBRUMsTUFBTSxHQUFLRixLQUFLLENBQWhCRSxNQUFNO0lBQ3hCLEVBQThFO0lBQzlFLEVBQTBCO0lBQzFCLEVBQWdFO0lBQ2hFLEdBQUssQ0FBQ0MsT0FBTyxHQUFHWCw4RUFBZ0IsQ0FBQyxDQUFDO1FBQ2hDWSxpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCQyxTQUFTLEVBQUUsQ0FBQztRQUNaQyxNQUFNLEVBQUVKLE1BQU0sR0FBR0EsTUFBTSxLQUFLSyxTQUFTO0lBQ3ZDLENBQUM7SUFFRCxNQUFNLGVBQUNwQix5REFBa0IsQ0FBQ2MsUUFBUSxFQUFFLENBQUM7UUFDbkNRLFNBQVMsRUFBRU4sT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQzVCLENBQUM7QUFDSCxDQUFDO0dBZFFKLGVBQWU7O1FBS05QLDBFQUFnQjs7O0tBTHpCTyxlQUFlO0FBZ0J4QkEsZUFBZSxDQUFDVyxTQUFTLEdBQUcsQ0FBQztJQUMzQlQsUUFBUSxFQUFFYixzRUFBNEI7SUFDdENjLE1BQU0sRUFBRWQsd0RBQWM7QUFDeEIsQ0FBQztBQUVjLFFBQVEsQ0FBQzBCLE1BQU0sQ0FBQyxNQUFzQixFQUFFLENBQUM7UUFBdkJiLFFBQVEsR0FBVixNQUFzQixDQUFwQkEsUUFBUSxFQUFLRCxLQUFLLDRCQUFwQixNQUFzQjtRQUFwQkMsQ0FBUTs7SUFDdkMsTUFBTTs7d0ZBRURWLHFFQUFXOzs7Ozt3RkFDWFEsZUFBZSxvQkFBS0MsS0FBSztzR0FDdkJYLGdFQUFNO29CQUFDMEIsRUFBRSxFQUFFdEIseUVBQWE7MEdBQ3RCSCxpRUFBTzt3QkFBQ3lCLEVBQUUsRUFBRXRCLDBFQUFjOzt3R0FDeEJFLG1EQUFHO2dDQUFDb0IsRUFBRSxFQUFFdEIsc0VBQVU7O2dIQUNoQkMsbURBQUs7d0NBQUN5QixHQUFHLEVBQUMsQ0FBa0I7d0NBQUNDLEdBQUcsRUFBQyxDQUFNO3dDQUFDQyxLQUFLLEVBQUUsRUFBRTt3Q0FBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7OztnSEFDN0RDLENBQUc7d0NBQUNDLFNBQVMsRUFBRS9CLHVFQUFXO2tEQUFFLENBQUk7Ozs7OztnSEFDaENJLG9EQUFJO2tEQUFDLENBQUk7Ozs7Ozs7Ozs7Ozt3R0FFWEQsc0RBQU07Z0NBQ0w4QixPQUFPLEVBQUMsQ0FBVztnQ0FDbkJDLElBQUksRUFBQyxDQUFPO2dDQUNaWixFQUFFLEVBQUV0Qix5RUFBYTtnQ0FDakJvQyxJQUFJLEVBQUMsQ0FBVztnQ0FDaEJDLGdCQUFnQjswQ0FFZGhDLDREQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUtqQlIsaUVBQU87Ozs7O3dGQUNQSyxtREFBRztnQkFBQ29CLEVBQUUsRUFBRXRCLDRFQUFnQjswQkFBR1EsUUFBUTs7Ozs7Ozs7QUFHMUMsQ0FBQztNQTVCdUJhLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTGF5b3V0LmpzPzRhMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xuaW1wb3J0IHVzZVNjcm9sbFRyaWdnZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9MYXlvdXQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQ2hpcCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgVFJZX01ZTE8gfSBmcm9tIFwiLi4vLi4vdXRpbHMvc3RyaW5nQ29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIEVsZXZhdGlvblNjcm9sbChwcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuLCB3aW5kb3cgfSA9IHByb3BzO1xuICAvLyBOb3RlIHRoYXQgeW91IG5vcm1hbGx5IHdvbid0IG5lZWQgdG8gc2V0IHRoZSB3aW5kb3cgcmVmIGFzIHVzZVNjcm9sbFRyaWdnZXJcbiAgLy8gd2lsbCBkZWZhdWx0IHRvIHdpbmRvdy5cbiAgLy8gVGhpcyBpcyBvbmx5IGJlaW5nIHNldCBoZXJlIGJlY2F1c2UgdGhlIGRlbW8gaXMgaW4gYW4gaWZyYW1lLlxuICBjb25zdCB0cmlnZ2VyID0gdXNlU2Nyb2xsVHJpZ2dlcih7XG4gICAgZGlzYWJsZUh5c3RlcmVzaXM6IHRydWUsXG4gICAgdGhyZXNob2xkOiAwLFxuICAgIHRhcmdldDogd2luZG93ID8gd2luZG93KCkgOiB1bmRlZmluZWQsXG4gIH0pO1xuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICBlbGV2YXRpb246IHRyaWdnZXIgPyA0IDogMCxcbiAgfSk7XG59XG5cbkVsZXZhdGlvblNjcm9sbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxuICB3aW5kb3c6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICA8RWxldmF0aW9uU2Nyb2xsIHsuLi5wcm9wc30+XG4gICAgICAgIDxBcHBCYXIgaWQ9e3N0eWxlcy5hcHBiYXJ9PlxuICAgICAgICAgIDxUb29sYmFyIGlkPXtzdHlsZXMudG9vbGJhcn0+XG4gICAgICAgICAgICA8Qm94IGlkPXtzdHlsZXMuYm94fT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvTG9nby5zdmdcIiBhbHQ9XCJMb2dvXCIgd2lkdGg9ezI1fSBoZWlnaHQ9ezI1fSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNwYW59Pk15bG88L2Rpdj5cbiAgICAgICAgICAgICAgPENoaXA+QmV0YTwvQ2hpcD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgaWQ9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgICAgIGhyZWY9XCIvdHJ5LW15bG9cIlxuICAgICAgICAgICAgICBkaXNhYmxlRWxldmF0aW9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsgVFJZX01ZTE8gfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICA8L0FwcEJhcj5cbiAgICAgIDwvRWxldmF0aW9uU2Nyb2xsPlxuICAgICAgPFRvb2xiYXIgLz5cbiAgICAgIDxCb3ggaWQ9e3N0eWxlcy5jb250YWluZXJ9PntjaGlsZHJlbn08L0JveD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkFwcEJhciIsIlRvb2xiYXIiLCJDc3NCYXNlbGluZSIsInVzZVNjcm9sbFRyaWdnZXIiLCJzdHlsZXMiLCJJbWFnZSIsIkJveCIsIkJ1dHRvbiIsIkNoaXAiLCJUUllfTVlMTyIsIkVsZXZhdGlvblNjcm9sbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ3aW5kb3ciLCJ0cmlnZ2VyIiwiZGlzYWJsZUh5c3RlcmVzaXMiLCJ0aHJlc2hvbGQiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJjbG9uZUVsZW1lbnQiLCJlbGV2YXRpb24iLCJwcm9wVHlwZXMiLCJlbGVtZW50IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJMYXlvdXQiLCJpZCIsImFwcGJhciIsInRvb2xiYXIiLCJib3giLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJ2YXJpYW50Iiwic2l6ZSIsImJ1dHRvbiIsImhyZWYiLCJkaXNhYmxlRWxldmF0aW9uIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/organisms/Layout.js\n");

/***/ })

});