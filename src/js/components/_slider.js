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
    nextEl: '.elevating__nav .btn--next',
    prevEl: '.elevating__nav .btn--prev',
  },
});