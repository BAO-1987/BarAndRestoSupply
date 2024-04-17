import Swiper, {
  Navigation,
  Pagination,
} from 'swiper';

const slider = new Swiper('.elevating__swiper', {
  slidesPerView: 3.5,
  spaceBetween: 20,
  modules: [Navigation, Pagination],
  draggable: true,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.slider__swiper .btn--next',
    prevEl: '.slider__swiper .btn--prev',
  },
});