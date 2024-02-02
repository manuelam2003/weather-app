/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function viewWeather(data, isMetric) {
  const location = document.getElementById("location");
  const localtime = document.getElementById("localtime");
  const temperature = document.getElementById("temperature");
  const precipitation = document.getElementById("precipitation");
  const feelsLike = document.getElementById("feelsLike");
  const humidity = document.getElementById("humidity");
  const wind = document.getElementById("wind");
  const condition = document.getElementById("condition");

  location.textContent = `${data.name}, ${data.country}`;
  localtime.textContent = `${data.localtime}`;
  humidity.textContent = `${data.humidity / 100}%`;
  condition.textContent = `${data.condition_text}`;
  if (isMetric) {
    temperature.textContent = `${data.temp_c}ºC`;
    precipitation.textContent = `${data.precip_mm}mm`;
    feelsLike.textContent = `${data.feelslike_c}ºC`;
    wind.textContent = `${data.wind_kph}kph`;
  } else {
    temperature.textContent = `${data.temp_f}ºF`;
    precipitation.textContent = `${data.precip_in}in`;
    feelsLike.textContent = `${data.feelslike_f}ºF`;
    wind.textContent = `${data.wind_mph}mph`;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewWeather);


/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function filterData(data) {
  const filteredData = {
    name: data.location.name,
    country: data.location.country,
    localtime: data.location.localtime,
    temp_c: data.current.temp_c,
    temp_f: data.current.temp_f,
    precip_mm: data.current.precip_mm,
    precip_in: data.current.precip_in,
    wind_kph: data.current.wind_kph,
    wind_mph: data.current.wind_mph,
    humidity: data.current.humidity,
    feelslike_c: data.current.feelslike_c,
    feelslike_f: data.current.feelslike_f,
    condition_text: data.current.condition.text,
    condition_icon: data.current.condition.icon.substring(2),
  };
  return filteredData;
}

async function getWeather(location = "Sevilla") {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=65704d5121124e30b38144030240102&q=${location}`
    );
    if (!response.ok) {
      throw new Error(
        `WeatherAPI request failed with status ${response.status}`
      );
    }
    const data = await response.json();
    const filteredData = filterData(data);
    return filteredData;
  } catch (err) {
    console.log(err);
    return null;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ "./src/modules/weather.js");
/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/view */ "./src/modules/view.js");



const inputForm = document.querySelector("form");
const inputField = document.querySelector("input");
const submitBtn = document.querySelector("#submitBtn");
const metricBtn = document.querySelector("#metricBtn");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

metricBtn.addEventListener("click", async () => {
  if (inputField.value !== "") {
    const weatherData = await (0,_modules_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(inputField.value);
    const curSystem = metricBtn.textContent;
    if (curSystem === "Metric") {
      metricBtn.textContent = "Imperial";
      (0,_modules_view__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherData, false);
    } else {
      metricBtn.textContent = "Metric";
      (0,_modules_view__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherData, true);
    }
  }
});

submitBtn.addEventListener("click", async () => {
  if (inputField.value !== "") {
    const weatherData = await (0,_modules_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(inputField.value);
    // console.log(weatherData);
    (0,_modules_view__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherData, true);
  }
});

inputField.addEventListener("keyup", async (e) => {
  if (e.key === "Enter" && inputField.value !== "") {
    const weatherData = await (0,_modules_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(inputField.value);
    (0,_modules_view__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherData, true);
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsVUFBVSxJQUFJLGFBQWE7QUFDdkQsNkJBQTZCLGVBQWU7QUFDNUMsNEJBQTRCLG9CQUFvQjtBQUNoRCw2QkFBNkIsb0JBQW9CO0FBQ2pEO0FBQ0EsaUNBQWlDLFlBQVk7QUFDN0MsbUNBQW1DLGVBQWU7QUFDbEQsK0JBQStCLGlCQUFpQjtBQUNoRCwwQkFBMEIsY0FBYztBQUN4QyxJQUFJO0FBQ0osaUNBQWlDLFlBQVk7QUFDN0MsbUNBQW1DLGVBQWU7QUFDbEQsK0JBQStCLGlCQUFpQjtBQUNoRCwwQkFBMEIsY0FBYztBQUN4QztBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDM0IzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5RkFBeUYsU0FBUztBQUNsRztBQUNBO0FBQ0E7QUFDQSxpREFBaUQsZ0JBQWdCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDdkMxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNGOztBQUV6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsOEJBQThCLDREQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLE1BQU0seURBQVc7QUFDakIsTUFBTTtBQUNOO0FBQ0EsTUFBTSx5REFBVztBQUNqQjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsOEJBQThCLDREQUFVO0FBQ3hDO0FBQ0EsSUFBSSx5REFBVztBQUNmO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsOEJBQThCLDREQUFVO0FBQ3hDLElBQUkseURBQVc7QUFDZjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdmlld1dlYXRoZXIoZGF0YSwgaXNNZXRyaWMpIHtcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpO1xuICBjb25zdCBsb2NhbHRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2FsdGltZVwiKTtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBlcmF0dXJlXCIpO1xuICBjb25zdCBwcmVjaXBpdGF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVjaXBpdGF0aW9uXCIpO1xuICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZlZWxzTGlrZVwiKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh1bWlkaXR5XCIpO1xuICBjb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kXCIpO1xuICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmRpdGlvblwiKTtcblxuICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke2RhdGEubmFtZX0sICR7ZGF0YS5jb3VudHJ5fWA7XG4gIGxvY2FsdGltZS50ZXh0Q29udGVudCA9IGAke2RhdGEubG9jYWx0aW1lfWA7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5odW1pZGl0eSAvIDEwMH0lYDtcbiAgY29uZGl0aW9uLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jb25kaXRpb25fdGV4dH1gO1xuICBpZiAoaXNNZXRyaWMpIHtcbiAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke2RhdGEudGVtcF9jfcK6Q2A7XG4gICAgcHJlY2lwaXRhdGlvbi50ZXh0Q29udGVudCA9IGAke2RhdGEucHJlY2lwX21tfW1tYDtcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtkYXRhLmZlZWxzbGlrZV9jfcK6Q2A7XG4gICAgd2luZC50ZXh0Q29udGVudCA9IGAke2RhdGEud2luZF9rcGh9a3BoYDtcbiAgfSBlbHNlIHtcbiAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke2RhdGEudGVtcF9mfcK6RmA7XG4gICAgcHJlY2lwaXRhdGlvbi50ZXh0Q29udGVudCA9IGAke2RhdGEucHJlY2lwX2lufWluYDtcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtkYXRhLmZlZWxzbGlrZV9mfcK6RmA7XG4gICAgd2luZC50ZXh0Q29udGVudCA9IGAke2RhdGEud2luZF9tcGh9bXBoYDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB2aWV3V2VhdGhlcjtcbiIsImZ1bmN0aW9uIGZpbHRlckRhdGEoZGF0YSkge1xuICBjb25zdCBmaWx0ZXJlZERhdGEgPSB7XG4gICAgbmFtZTogZGF0YS5sb2NhdGlvbi5uYW1lLFxuICAgIGNvdW50cnk6IGRhdGEubG9jYXRpb24uY291bnRyeSxcbiAgICBsb2NhbHRpbWU6IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxuICAgIHRlbXBfYzogZGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICB0ZW1wX2Y6IGRhdGEuY3VycmVudC50ZW1wX2YsXG4gICAgcHJlY2lwX21tOiBkYXRhLmN1cnJlbnQucHJlY2lwX21tLFxuICAgIHByZWNpcF9pbjogZGF0YS5jdXJyZW50LnByZWNpcF9pbixcbiAgICB3aW5kX2twaDogZGF0YS5jdXJyZW50LndpbmRfa3BoLFxuICAgIHdpbmRfbXBoOiBkYXRhLmN1cnJlbnQud2luZF9tcGgsXG4gICAgaHVtaWRpdHk6IGRhdGEuY3VycmVudC5odW1pZGl0eSxcbiAgICBmZWVsc2xpa2VfYzogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLFxuICAgIGZlZWxzbGlrZV9mOiBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YsXG4gICAgY29uZGl0aW9uX3RleHQ6IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICBjb25kaXRpb25faWNvbjogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uLnN1YnN0cmluZygyKSxcbiAgfTtcbiAgcmV0dXJuIGZpbHRlcmVkRGF0YTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbiA9IFwiU2V2aWxsYVwiKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9NjU3MDRkNTEyMTEyNGUzMGIzODE0NDAzMDI0MDEwMiZxPSR7bG9jYXRpb259YFxuICAgICk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgV2VhdGhlckFQSSByZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGZpbHRlckRhdGEoZGF0YSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkRGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0V2VhdGhlciBmcm9tIFwiLi9tb2R1bGVzL3dlYXRoZXJcIjtcbmltcG9ydCB2aWV3V2VhdGhlciBmcm9tIFwiLi9tb2R1bGVzL3ZpZXdcIjtcblxuY29uc3QgaW5wdXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5jb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRCdG5cIik7XG5jb25zdCBtZXRyaWNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21ldHJpY0J0blwiKTtcblxuaW5wdXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbm1ldHJpY0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICBpZiAoaW5wdXRGaWVsZC52YWx1ZSAhPT0gXCJcIikge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihpbnB1dEZpZWxkLnZhbHVlKTtcbiAgICBjb25zdCBjdXJTeXN0ZW0gPSBtZXRyaWNCdG4udGV4dENvbnRlbnQ7XG4gICAgaWYgKGN1clN5c3RlbSA9PT0gXCJNZXRyaWNcIikge1xuICAgICAgbWV0cmljQnRuLnRleHRDb250ZW50ID0gXCJJbXBlcmlhbFwiO1xuICAgICAgdmlld1dlYXRoZXIod2VhdGhlckRhdGEsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWV0cmljQnRuLnRleHRDb250ZW50ID0gXCJNZXRyaWNcIjtcbiAgICAgIHZpZXdXZWF0aGVyKHdlYXRoZXJEYXRhLCB0cnVlKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgaWYgKGlucHV0RmllbGQudmFsdWUgIT09IFwiXCIpIHtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoaW5wdXRGaWVsZC52YWx1ZSk7XG4gICAgLy8gY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgIHZpZXdXZWF0aGVyKHdlYXRoZXJEYXRhLCB0cnVlKTtcbiAgfVxufSk7XG5cbmlucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGFzeW5jIChlKSA9PiB7XG4gIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIGlucHV0RmllbGQudmFsdWUgIT09IFwiXCIpIHtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoaW5wdXRGaWVsZC52YWx1ZSk7XG4gICAgdmlld1dlYXRoZXIod2VhdGhlckRhdGEsIHRydWUpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==