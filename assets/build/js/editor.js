/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./editor/CancelSubscriptionAction.js":
/*!********************************************!*\
  !*** ./editor/CancelSubscriptionAction.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar SelectControl = wp.components.SelectControl;\nvar _JetFBActions = JetFBActions,\n  Tools = _JetFBActions.Tools;\nvar _JetFBHooks = JetFBHooks,\n  useFields = _JetFBHooks.useFields;\nvar __ = wp.i18n.__;\nfunction CancelSubscriptionAction(_ref) {\n  var settings = _ref.settings,\n    onChangeSettingObj = _ref.onChangeSettingObj;\n  var fields = useFields({\n    withInner: false\n  }, []);\n  return wp.element.createElement(SelectControl, {\n    label: __('Field with subscription id', 'jet-form-builder'),\n    labelPosition: \"side\",\n    value: settings.field,\n    options: Tools.withPlaceholder(fields, __('Select field...', 'jet-form-builder')),\n    onChange: function onChange(field) {\n      return onChangeSettingObj({\n        field: field\n      });\n    }\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CancelSubscriptionAction);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvQ2FuY2VsU3Vic2NyaXB0aW9uQWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUNPQSxhQUFhLEdBQ1ZDLEVBQUUsQ0FBQ0MsVUFBVSxDQURoQkYsYUFBYTtBQUVwQixJQUFBRyxhQUFBLEdBRVVDLFlBQVk7RUFEZkMsS0FBSyxHQUFBRixhQUFBLENBQUxFLEtBQUs7QUFFWixJQUFBQyxXQUFBLEdBRVVDLFVBQVU7RUFEYkMsU0FBUyxHQUFBRixXQUFBLENBQVRFLFNBQVM7QUFHaEIsSUFDT0MsRUFBRSxHQUNDUixFQUFFLENBQUNTLElBQUksQ0FEVkQsRUFBRTtBQUdULFNBQVNFLHdCQUF3QkEsQ0FBQUMsSUFBQSxFQUc3QjtFQUFBLElBRkhDLFFBQVEsR0FBQUQsSUFBQSxDQUFSQyxRQUFRO0lBQ1JDLGtCQUFrQixHQUFBRixJQUFBLENBQWxCRSxrQkFBa0I7RUFFbEIsSUFBTUMsTUFBTSxHQUFHUCxTQUFTLENBQUU7SUFBRVEsU0FBUyxFQUFFO0VBQU0sQ0FBQyxFQUFFLEVBQUcsQ0FBQztFQUVwRCxPQUFPZixFQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2xCLGFBQWE7SUFDcEJtQixLQUFLLEVBQUdWLEVBQUUsQ0FBRSw0QkFBNEIsRUFBRSxrQkFBbUIsQ0FBRztJQUNoRVcsYUFBYSxFQUFDLE1BQU07SUFDcEJDLEtBQUssRUFBR1IsUUFBUSxDQUFDUyxLQUFPO0lBQ3hCQyxPQUFPLEVBQUdsQixLQUFLLENBQUNtQixlQUFlLENBQzlCVCxNQUFNLEVBQ05OLEVBQUUsQ0FBRSxpQkFBaUIsRUFBRSxrQkFDdkIsQ0FBRSxDQUFHO0lBQ05nQixRQUFRLEVBQUcsU0FBQUEsU0FBQUgsS0FBSztNQUFBLE9BQUlSLGtCQUFrQixDQUFFO1FBQUVRLEtBQUssRUFBTEE7TUFBTSxDQUFFLENBQUM7SUFBQTtFQUFFLENBQ3JELENBQUM7QUFDSDtBQUVBLGlFQUFlWCx3QkFBd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItZ2F0ZXdheS1zdWJzY3JpcHRpb24vLi9lZGl0b3IvQ2FuY2VsU3Vic2NyaXB0aW9uQWN0aW9uLmpzPzYxZjkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xyXG5cdCAgICAgIFNlbGVjdENvbnRyb2wsXHJcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5jb25zdCB7XHJcblx0ICAgICAgVG9vbHMsXHJcbiAgICAgIH0gPSBKZXRGQkFjdGlvbnM7XHJcbmNvbnN0IHtcclxuXHQgICAgICB1c2VGaWVsZHMsXHJcbiAgICAgIH0gPSBKZXRGQkhvb2tzO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIF9fLFxyXG4gICAgICB9ID0gd3AuaTE4bjtcclxuXHJcbmZ1bmN0aW9uIENhbmNlbFN1YnNjcmlwdGlvbkFjdGlvbigge1xyXG5cdHNldHRpbmdzLFxyXG5cdG9uQ2hhbmdlU2V0dGluZ09iaixcclxufSApIHtcclxuXHRjb25zdCBmaWVsZHMgPSB1c2VGaWVsZHMoIHsgd2l0aElubmVyOiBmYWxzZSB9LCBbXSApO1xyXG5cclxuXHRyZXR1cm4gPFNlbGVjdENvbnRyb2xcclxuXHRcdGxhYmVsPXsgX18oICdGaWVsZCB3aXRoIHN1YnNjcmlwdGlvbiBpZCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdHZhbHVlPXsgc2V0dGluZ3MuZmllbGQgfVxyXG5cdFx0b3B0aW9ucz17IFRvb2xzLndpdGhQbGFjZWhvbGRlcihcclxuXHRcdFx0ZmllbGRzLFxyXG5cdFx0XHRfXyggJ1NlbGVjdCBmaWVsZC4uLicsICdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0KSApIH1cclxuXHRcdG9uQ2hhbmdlPXsgZmllbGQgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKCB7IGZpZWxkIH0gKSB9XHJcblx0Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbmNlbFN1YnNjcmlwdGlvbkFjdGlvbjsiXSwibmFtZXMiOlsiU2VsZWN0Q29udHJvbCIsIndwIiwiY29tcG9uZW50cyIsIl9KZXRGQkFjdGlvbnMiLCJKZXRGQkFjdGlvbnMiLCJUb29scyIsIl9KZXRGQkhvb2tzIiwiSmV0RkJIb29rcyIsInVzZUZpZWxkcyIsIl9fIiwiaTE4biIsIkNhbmNlbFN1YnNjcmlwdGlvbkFjdGlvbiIsIl9yZWYiLCJzZXR0aW5ncyIsIm9uQ2hhbmdlU2V0dGluZ09iaiIsImZpZWxkcyIsIndpdGhJbm5lciIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwibGFiZWwiLCJsYWJlbFBvc2l0aW9uIiwidmFsdWUiLCJmaWVsZCIsIm9wdGlvbnMiLCJ3aXRoUGxhY2Vob2xkZXIiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./editor/CancelSubscriptionAction.js\n");

/***/ }),

/***/ "./editor/main.js":
/*!************************!*\
  !*** ./editor/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CancelSubscriptionAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CancelSubscriptionAction */ \"./editor/CancelSubscriptionAction.js\");\n\nvar _JetFBActions = JetFBActions,\n  addAction = _JetFBActions.addAction;\naddAction('update_gw_subscription', _CancelSubscriptionAction__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOztBQUFrRTtBQUVsRSxJQUFBQyxhQUFBLEdBRVVDLFlBQVk7RUFEZkMsU0FBUyxHQUFBRixhQUFBLENBQVRFLFNBQVM7QUFHaEJBLFNBQVMsQ0FDUix3QkFBd0IsRUFDeEJILGlFQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItZ2F0ZXdheS1zdWJzY3JpcHRpb24vLi9lZGl0b3IvbWFpbi5qcz8wOTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW5jZWxTdWJzY3JpcHRpb25BY3Rpb24gZnJvbSAnLi9DYW5jZWxTdWJzY3JpcHRpb25BY3Rpb24nO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGFkZEFjdGlvbixcclxuICAgICAgfSA9IEpldEZCQWN0aW9ucztcclxuXHJcbmFkZEFjdGlvbihcclxuXHQndXBkYXRlX2d3X3N1YnNjcmlwdGlvbicsXHJcblx0Q2FuY2VsU3Vic2NyaXB0aW9uQWN0aW9uLFxyXG4pO1xyXG4iXSwibmFtZXMiOlsiQ2FuY2VsU3Vic2NyaXB0aW9uQWN0aW9uIiwiX0pldEZCQWN0aW9ucyIsIkpldEZCQWN0aW9ucyIsImFkZEFjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./editor/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./editor/main.js");
/******/ 	
/******/ })()
;