/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {
  $('select').niceSelect();

  $('.top-slider').on('init', function (event, slick) {
    $('.top-slider__arrows .container').append('<div class="slider-count"><p><span id="current">1</span> of <span id="total">' + slick.slideCount + '</span></p></div>');
  });
  $('.top-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: $("#top-slider__next-arrow"),
    prevArrow: $("#top-slider__prew-arrow"),
    responsive: [{
      breakpoint: 1200,

      settings: {
        dots: true,
        dotsClass: 'slick-dots_maison-top-slider'
      }
    }]
  });
  $('.top-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('.slider-count #current').html(currentSlide + 1);
  });

  $('.navbar-toggler-icon').on('click', function () {
    $('.navbar-nav').toggleClass('navbar-nav_on-click');
  });

  $("#price").slider({
    min: 0,
    max: 250,
    values: [0, 250],
    range: true,
    stop: function stop(event, ui) {
      jQuery("input#minCost").val(jQuery("#price").slider("values", 0));
      jQuery("input#maxCost").val(jQuery("#price").slider("values", 1));
    },
    slide: function slide(event, ui) {
      jQuery("input#minCost").val(jQuery("#price").slider("values", 0));
      jQuery("input#maxCost").val(jQuery("#price").slider("values", 1));
    }
  });

  $("input#minCost").change(function () {
    var value1 = $("input#minCost").val();
    var value2 = $("input#maxCost").val();

    if (parseInt(value1) > parseInt(value2)) {
      value1 = value2;
      $("input#minCost").val(value1);
    }
    $("#price").slider("values", 0, value1);
  });

  $("input#maxCost").change(function () {
    var value1 = $("input#minCost").val();
    var value2 = $("input#maxCost").val();

    if (value2 > 250) {
      value2 = 250;jQuery("input#maxCost").val(250);
    }

    if (parseInt(value1) > parseInt(value2)) {
      value2 = value1;
      $("input#maxCost").val(value2);
    }
    $("#price").slider("values", 1, value2);
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);