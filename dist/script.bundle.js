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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nwindow.addEventListener('load', function () {\n  let search = document.getElementById('search');\n  let grid = document.getElementById('main__grid');\n  let pagination = document.getElementById('pagination');\n  let key = 'AIzaSyDZbpcLr6N4D5LDfveaQUZt8TIZ25jAeMs';\n  let resultData;\n  let loadedItems = [];\n  let numberOfCurrentPage;\n  let nextPageToken = null;\n  let searchValue;\n  let itemsInPage;\n  let paginationFirst = document.getElementById('first');\n  let paginationPrevious = document.getElementById('previous');\n  let paginationCurrent = document.getElementById('current');\n  let paginationNext = document.getElementById('next');\n  let form = document.getElementById('form');\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n    submitEvent(e);\n    paginate();\n  })\n  pagination.addEventListener('click', eventLoadPage);\n  function createGridElement(item) {\n    let gridElement = document.createElement('div');\n    let cardElement = document.createElement('div');\n    let titleElement = document.createElement('a');\n    let imgElement = document.createElement('IMG');\n    let authorElement = document.createElement('p');\n    let dateElement = document.createElement('p');\n    let descriptionElement = document.createElement('p');\n    let date = new Date(item.snippet.publishedAt);\n    gridElement.classList.add('main__grid__element');\n    cardElement.classList.add('main__grid__element__card');\n    titleElement.classList.add('main__grid__element__card__title');\n    imgElement.classList.add('main__grid__element__card__img');\n    authorElement.classList.add('main__grid__element__card__author');\n    dateElement.classList.add('main__grid__element__card__date');\n    descriptionElement.classList.add('main__grid__element__card__description');\n    titleElement.innerText = item.snippet.title;\n    titleElement.target = \"_blank\";\n    titleElement.href = \"https://www.youtube.com/watch?v=\" + item.id.videoId;\n    imgElement.src = item.snippet.thumbnails.medium.url;\n    authorElement.innerText = 'Author: ' + item.snippet.channelTitle;\n    dateElement.innerText = 'Published at: ' + date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();\n    descriptionElement.innerText = item.snippet.description;\n    cardElement.appendChild(imgElement);\n    cardElement.appendChild(titleElement);\n    cardElement.appendChild(authorElement);\n    cardElement.appendChild(dateElement);\n    cardElement.appendChild(descriptionElement);\n    gridElement.appendChild(cardElement);\n    loadedItems.push(gridElement);\n  }\n  function eventLoadPage(e) {\n    if (e.target.parentElement === pagination\n      && e.target.innerText.match(/^\\d+$/) !== null) {\n      moveToPage(e.target.innerText);\n    }\n  }\n  function processData(items) {\n    items.forEach(element => {\n      createGridElement(element);\n    });\n  }\n  function submitEvent() {\n    let options = {\n      part: 'snippet',\n      key: key,\n      maxResults: 15,\n      q: search.value,\n    }\n    loadedItems = [];\n    var request = new XMLHttpRequest();\n\n    pagination.style.display = 'inline-flex';\n    grid.innerHTML = \"\";\n    numberOfCurrentPage = 1;\n    nextPageToken = null;\n    searchValue = search.value;\n    request.open('GET', 'https://www.googleapis.com/youtube/v3/search' + `?part=snippet&key=${options.key}&maxResults=${options.maxResults}&q=${options.q}`, true);\n\n    makeRequest(request);\n  }\n  function infiniteLoading() {\n    if (nextPageToken !== null) {\n      let options = {\n        part: 'snippet',\n        key: key,\n        maxResults: 15,\n        q: search.value,\n      }\n      loadedItems = [];\n      var request = new XMLHttpRequest();\n      request.open('GET', 'https://www.googleapis.com/youtube/v3/search' + `?part=snippet&key=${options.key}&maxResults=${options.maxResults}&q=${searchValue}&pageToken=${nextPageToken}`, true);\n      makeRequest(request);\n    }\n  }\n  function makeRequest(request) {\n    request.onload = function () {\n      resultData = JSON.parse(request.responseText);\n      nextPageToken = resultData.nextPageToken;\n      loadedItems = [];\n      let items;\n      [...items] = resultData.items;\n      processData(items);\n      paginationFirst.style.display = 'unset';\n      loadedItems.forEach(pageItems => {\n        grid.appendChild(pageItems);\n      });\n      getItemsInPage();\n    };\n    request.onerror = function () {\n    };\n    request.send();\n  }\n  function getItemsInPage() {\n    itemsInPage = 1;\n    if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1400) {\n      itemsInPage = 2;\n    }\n    else if (document.documentElement.clientWidth >= 1400 && document.documentElement.clientWidth < 1800) {\n      itemsInPage = 3;\n    }\n    else if (document.documentElement.clientWidth >= 1800) {\n      itemsInPage = 4;\n    }\n    return itemsInPage;\n  }\n  function moveToPage(num) {\n    if (num !== 0) {\n      numberOfCurrentPage = num;\n    }\n\n    if (num == 1) {\n      grid.scroll(0, 0);\n    }\n    else if (num > 1 && num < grid.childNodes.length / itemsInPage) {\n      grid.scroll(grid.childNodes[numberOfCurrentPage * itemsInPage - itemsInPage].offsetLeft, 0);\n    }\n    if (grid.childNodes.length / itemsInPage - numberOfCurrentPage <= 3) {\n      infiniteLoading();\n    }\n    paginate();\n  }\n  function paginate() {\n    paginationFirst.innerText = 1;\n    paginationPrevious.innerText = eval(numberOfCurrentPage) - 1;\n    paginationCurrent.innerText = eval(numberOfCurrentPage);\n    paginationNext.innerText = eval(numberOfCurrentPage) + 1;\n    if (numberOfCurrentPage == 1) {\n      paginationPrevious.style.display = 'none';\n      paginationCurrent.style.display = 'none';\n      paginationNext.style.display = 'unset';\n    }\n    else if (numberOfCurrentPage == 2) {\n      paginationPrevious.style.display = 'none';\n      paginationCurrent.style.display = 'unset';\n      paginationNext.style.display = 'unset';\n    }\n    else {\n      paginationPrevious.style.display = 'unset';\n      paginationCurrent.style.display = 'unset';\n      paginationNext.style.display = 'unset';\n    }\n  }\n\n  function unify(e) { return e.changedTouches ? e.changedTouches[0] : e }\n  grid.addEventListener('mousedown', lock, false);\n  grid.addEventListener('touchstart', lock, false);\n  grid.addEventListener('mouseup', move, false);\n  grid.addEventListener('touchend', move, false);\n\n  let x0 = null;\n  function lock(e) {\n    grid.addEventListener('mousemove', preMove, false);\n    grid.addEventListener('touchmove', preMove, false);\n    x0 = unify(e).clientX\n  }\n  function preMove(e) {\n    grid.style.scrollBehavior = \"initial\";\n    let dx = unify(e).clientX - x0;\n    if (numberOfCurrentPage > 0 && numberOfCurrentPage < grid.childNodes.length) {\n      grid.scroll(grid.childNodes[numberOfCurrentPage * itemsInPage - itemsInPage].offsetLeft - dx, 0);\n    }\n  }\n  function move(e) {\n    grid.removeEventListener('mousemove', preMove, false);\n    grid.removeEventListener('touchmove', preMove, false);\n    grid.style.scrollBehavior = \"smooth\";\n    if (x0 || x0 === 0) {\n      let dx = unify(e).clientX - x0;\n      if (dx < -innerWidth / 4) {\n        // grid.scrollBy(innerWidth, 0);\n        moveToPage(numberOfCurrentPage + 1);\n      }\n      else if (dx > innerWidth / 4) {\n        moveToPage(numberOfCurrentPage - 1);\n      }\n      else {\n        moveToPage(numberOfCurrentPage);\n      }\n      x0 = null;\n      grid.style.scrollBehavior = \"initial\";\n    }\n  }\n  window.addEventListener('resize', resizeEvent)\n  function resizeEvent() {\n    let focusedElementPage = itemsInPage * numberOfCurrentPage - itemsInPage + 1;\n    if (itemsInPage !== getItemsInPage()) {\n      focusedElementPage = Math.ceil(focusedElementPage / itemsInPage);\n      moveToPage(focusedElementPage);\n    }\n    else {\n      moveToPage(numberOfCurrentPage);\n    }\n  }\n})\n//js rendering\nwindow.addEventListener('DOMContentLoaded', eventRendering);\nfunction eventRendering() {\n  //create header\n  let header = document.createElement('header');\n  header.classList.add('header');\n  //header__h1\n  let h1 = document.createElement('h1');\n  h1.classList.add('header__h1');\n  h1.innerText = \"Youtube Search\";\n  //header__form\n  let headerForm = document.createElement('form');\n  headerForm.classList.add('header__form');\n  headerForm.id = 'form';\n  //header__form__search-query\n  let searchQuery = document.createElement('input');\n  searchQuery.classList.add('header__form__search-query');\n  searchQuery.name = 'search_query';\n  searchQuery.type = 'text';\n  searchQuery.maxLength = '128';\n  searchQuery.id = 'search';\n  //header__form__submit\n  let submit = document.createElement('input');\n  submit.type = 'submit';\n  submit.value = 'Search';\n  submit.classList.add('header__form__submit');\n  submit.id = 'submit';\n  //assemble header\n  headerForm.appendChild(searchQuery);\n  headerForm.appendChild(submit);\n  header.appendChild(h1);\n  header.appendChild(headerForm);\n  //main\n  let main = document.createElement('main');\n  main.classList.add('main');\n  //grid\n  let grid = document.createElement('div');\n  grid.classList.add('main__grid');\n  grid.id = 'main__grid';\n  //pagination\n  let pagination = document.createElement('div');\n  pagination.classList.add('main__pagination');\n  pagination.id = \"pagination\";\n  //first\n  let first = document.createElement('p');\n  first.classList.add('main__pagination__element');\n  first.id = 'first';\n  first.innerText = 1;\n  //previous\n  let previous = document.createElement('p');\n  previous.classList.add('main__pagination__element');\n  previous.id = 'previous';\n  //current\n  let current = document.createElement('p');\n  current.classList.add('main__pagination__element');\n  current.id = 'current';\n  //next\n  let next = document.createElement('p');\n  next.classList.add('main__pagination__element');\n  next.id = 'next';\n  next.innerText = 2;\n  //assemble pagination\n  pagination.appendChild(first);\n  pagination.appendChild(previous);\n  pagination.appendChild(current);\n  pagination.appendChild(next);\n  //assemble main\n  main.appendChild(grid);\n  main.appendChild(pagination);\n  //assemble body\n  document.body.appendChild(header);\n  document.body.appendChild(main);\n}\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });