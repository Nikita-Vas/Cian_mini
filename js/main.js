// NodeList.prototype.forEach() polyfill
// http://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this)
    }
  }
}

// burger menu ==================================================

let burgerMenu = document.querySelector('.header__burger')
let sidebar = document.querySelector('.form')
let btnSubmit = document.querySelector('.form__btn')

burgerMenu.onclick = function () {
  burgerMenu.classList.toggle('open')
  sidebar.classList.toggle('active')
}

btnSubmit.onclick = function () {
  burgerMenu.classList.remove('open')
  sidebar.classList.remove('active')
}

// btn Show more cards ===================================

let btnShowMoreCards = document.querySelector('.btn-more')
let hiddenCards = document.querySelectorAll('.hidden-cards')

// click on the button and shows more cards
btnShowMoreCards.addEventListener('click', function () {
  hiddenCards.forEach(function (item) {
    item.classList.remove('hidden-cards')
  })
})

// Show/ hidden widgets =======================================================

let widgets = document.querySelectorAll('.widget')
let widgetsBodys = document.querySelectorAll('.widget__body')

widgets.forEach(function (item) {
  item.addEventListener('click', function (e) {
    if (e.target.classList.contains('widget__title')) {
      e.target.classList.toggle('widget__title-hidden')
    }
  })
})

// distance =================================================

let checkBoxAny = document.querySelector('#distance-05')
let topDistanceCheckboxes = document.querySelectorAll('[data-distance-param]')

// click on button Any in the block "dictance" and and disable other buttons

checkBoxAny.addEventListener('change', function (e) {
  e.preventDefault()
  if (checkBoxAny.checked) {
    topDistanceCheckboxes.forEach(function (item) {
      item.checked = false
    })
    checkBoxAny.checked = true
  }
})

// click on other buttons in the block "dictance" and and disable Any button

topDistanceCheckboxes.forEach(function (item) {
  item.addEventListener('change', function () {
    if (checkBoxAny.checked) {
      checkBoxAny.checked = false
    }
  })
})

// Show three more options in the block "options__checkbox" in the filter
let showMoreOptions = document.querySelector('.show-hidden')
let optionsHidden = document.querySelectorAll('.checkbox--hidden')

showMoreOptions.onclick = function (e) {
  e.preventDefault()
  // если блоки были скрыты - значит показываем их
  if (showMoreOptions.dataset.options == 'hidden') {
    optionsHidden.forEach(function (item) {
      item.style.display = 'flex'
    })
    showMoreOptions.innerHTML = 'Скрыть дополнительные опции'
    showMoreOptions.dataset.options = 'visible'
  }
  // если блоки видны - скрываем
  else if (showMoreOptions.dataset.options == 'visible') {
    optionsHidden.forEach(function (item) {
      item.style.display = 'none'
    })
    showMoreOptions.innerHTML = 'Показать еще'
    showMoreOptions.dataset.options = 'hidden'
  }
}

// Попытки реализовать фишку: при клике не по форме фильтра закрывать форму
// document.addEventListener('click', function (event) {
//   if (!sidebar.contains(event.target)) sidebar.style.display = 'none'
// })

// sidebar.onclick = function () {
//   if () {
//     burgerMenu.classList.remove('open')
//     sidebar.classList.remove('active')
//   }
// }

// row.onclick = function () {
//   burgerMenu.classList.remove('open')
//   sidebar.classList.remove('active')
// }

// container.onclick = function () {
//   burgerMenu.classList.remove('open')
//   sidebar.classList.remove('active')
// }
