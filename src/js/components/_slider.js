import Swiper, {
  Navigation,
  Pagination,
} from 'swiper';

const slider = new Swiper('.slider__swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  modules: [Navigation, Pagination],
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.slider__swiper .btn--next',
    prevEl: '.slider__swiper .btn--prev',
  },
});