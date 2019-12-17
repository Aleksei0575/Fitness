'use strict';

// Скролл страницы
var buttonHeader = document.querySelector('.page-header__button');

if (buttonHeader) {
  buttonHeader.addEventListener('click', function (evt) {
    evt.preventDefault();

    var blockSubscription = buttonHeader.getAttribute('href');

    document.querySelector(blockSubscription).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

// Слайдер
var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.slider__control--next',
    prevEl: '.slider__control--prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

var swiper = new Swiper('.swiper-container', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 640px
    1366: {
      slidesPerView: 4,
      spaceBetween: 5
    }
  }
});


// Старый слайдер
// var multiItemSlider = (function () {
//   return function (selector, config) {
//
//     var
//       mainElement = document.querySelector(selector), // основный элемент блока
//       sliderWrapper = mainElement.querySelector('.slider__list'), // обертка для .slider-item
//       sliderItems = mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
//       sliderControls = mainElement.querySelectorAll('.slider__control'), // элементы управления
//       sliderControlLeft = mainElement.querySelector('.slider__control--prev'), // кнопка "LEFT"
//       sliderControlRight = mainElement.querySelector('.slider__control--next'), // кнопка "RIGHT"
//       wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width), // ширина обёртки
//       itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width), // ширина одного элемента
//       positionLeftItem = 0, // позиция левого активного элемента
//       transform = 0, // значение транфсофрмации .slider_wrapper
//       step = itemWidth / wrapperWidth * 100, // величина шага (для трансформации)
//       items = [], // массив элементов
//       interval = 5000,
//       config = {
//         isCycling: false, // автоматическая смена слайдов
//         direction: 'right', // направление смены слайдов
//         interval: 5000, // интервал между автоматической сменой слайдов
//         pause: true // устанавливать ли паузу при поднесении курсора к слайдеру
//       };
//
//     for (var key in config) {
//       if (key in config) {
//         config[key] = config[key];
//       }
//     }
//
//     // наполнение массива _items
//     sliderItems.forEach(function (item, index) {
//       items.push({ item: item, position: index, transform: 0 });
//     });
//
//     var position = {
//       getItemMin: function () {
//         var indexItem = 0;
//         items.forEach(function (item, index) {
//           if (item.position < items[indexItem].position) {
//             indexItem = index;
//           }
//         });
//         return indexItem;
//       },
//       getItemMax: function () {
//         var indexItem = 0;
//         items.forEach(function (item, index) {
//           if (item.position > items[indexItem].position) {
//             indexItem = index;
//           }
//         });
//         return indexItem;
//       },
//       getMin: function () {
//         return items[position.getItemMin()].position;
//       },
//       getMax: function () {
//         return items[position.getItemMax()].position;
//       }
//     }
//
//     var transformItem = function (direction) {
//       var nextItem;
//       if (direction === 'right') {
//         positionLeftItem++;
//         if ((positionLeftItem + wrapperWidth / itemWidth - 1) > position.getMax()) {
//           nextItem = position.getItemMin();
//           items[nextItem].position = position.getMax() + 1;
//           items[nextItem].transform += items.length * 100;
//           items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
//         }
//         transform -= step;
//       }
//       if (direction === 'left') {
//         positionLeftItem--;
//         if (positionLeftItem < position.getMin()) {
//           nextItem = position.getItemMax();
//           items[nextItem].position = position.getMin() - 1;
//           items[nextItem].transform -= items.length * 100;
//           items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
//         }
//         transform += step;
//       }
//       sliderWrapper.style.transform = 'translateX(' + transform + '%)';
//     }
//
//     var cycle = function (direction) {
//       if (!config.isCycling) {
//         return;
//       }
//       interval = setInterval(function () {
//         transformItem(direction);
//       }, config.interval);
//     }
//
//     // обработчик события click для кнопок "назад" и "вперед"
//     var controlClick = function (e) {
//       if (e.target.classList.contains('slider__control')) {
//         e.preventDefault();
//         var direction = e.target.classList.contains('slider__control--next') ? 'right' : 'left';
//         transformItem(direction);
//         clearInterval(interval);
//         cycle(config.direction);
//       }
//     };
//
//     var setUpListeners = function () {
//       // добавление к кнопкам "назад" и "вперед" обрботчика controlClick для событя click
//       sliderControls.forEach(function (item) {
//         item.addEventListener('click', controlClick);
//       });
//       if (config.pause && config.isCycling) {
//         mainElement.addEventListener('mouseenter', function () {
//           clearInterval(interval);
//         });
//         mainElement.addEventListener('mouseleave', function () {
//           clearInterval(interval);
//           cycle(config.direction);
//         });
//       }
//     }
//
//     // инициализация
//     setUpListeners();
//     cycle(config.direction);
//
//     return {
//       right: function () { // метод right
//         transformItem('right');
//       },
//       left: function () { // метод left
//         transformItem('left');
//       },
//       stop: function () { // метод stop
//         config.isCycling = false;
//         clearInterval(interval);
//       },
//       cycle: function () { // метод cycle
//         config.isCycling = true;
//         clearInterval(interval);
//         cycle();
//       }
//     }
//
//   }
// }());
//
// var slider = multiItemSlider('.slider', {
//   isCycling: true
// })
