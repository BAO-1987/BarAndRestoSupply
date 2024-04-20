// import Swiper, {
//   Navigation,
//   Pagination,
//   Thumbs
// } from 'swiper';


// function createThumbsSlider(selector) {
//   return new Swiper(selector, {
//     modules: [Pagination],
//     slidesPerView: 3,
//     direction: 'vertical',
//     lazy: true,
//     loop: true,
//     watchSlidesProgress: true,

//     breakpoints: {

//       360: {
//         direction: 'horizontal',
//         slidesPerView: 2,
//         spaceBetween: 10,
//       },

//       460: {
//         direction: 'horizontal',
//         slidesPerView: 3,
//         spaceBetween: 10,
//       },

//       768: {
//         direction: 'horizontal',
//         spaceBetween: 15,
//         slidesPerView: 4,
//       },

//       1182: {
//         direction: 'vertical',
//         spaceBetween: 0,
//       }

//     },
//   });
// }

// function createMainSlider(selector, thumbsSwiper) {
//   return new Swiper(selector, {
//     modules: [Navigation, Thumbs],
//     spaceBetween: 10,
//     lazy: true,
//     touchRatio: 1,
//     thumbs: {
//       swiper: thumbsSwiper,
//     },

//     navigation: {
//       nextEl: '.inspiring__nav .btn--next',
//       prevEl: '.inspiring__nav .btn--prev',
//     },
//   });
// }

// const galleryThumbs1 = createThumbsSlider('.inspiring__thumbs');

// const galleryTop1 = createMainSlider('.inspiring__full', galleryThumbs1);