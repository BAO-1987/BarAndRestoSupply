import Swiper, {
  Navigation,
  Pagination,
  Thumbs
} from 'swiper';


function createThumbsSlider(selector) {
  return new Swiper(selector, {
    modules: [Pagination],
    slidesPerView: 3,
    direction: 'vertical',
    lazy: true,
    loop: true,
    watchSlidesProgress: true,

    breakpoints: {
      360: {
        direction: 'horizontal',
        spaceBetween: 5,
      },

      768: {
        direction: 'vertical',
        spaceBetween: 0,
      }

    },
  });
}

function createMainSlider(selector, thumbsSwiper) {
  return new Swiper(selector, {
    modules: [Navigation, Thumbs],
    spaceBetween: 10,
    lazy: true,
    touchRatio: 1,
    thumbs: {
      swiper: thumbsSwiper,
    },

    navigation: {
      nextEl: '.inspiring__nav .btn--next',
      prevEl: '.inspiring__nav .btn--prev',
    },
  });
}

const galleryThumbs1 = createThumbsSlider('.inspiring__thumbs');

// const galleryThumbs2 = createThumbsSlider('.menu__thumbs-2');
// const galleryThumbs3 = createThumbsSlider('.menu__thumbs-3');
// const galleryThumbs4 = createThumbsSlider('.menu__thumbs-4');
// const galleryThumbs5 = createThumbsSlider('.menu__thumbs-5');

const galleryTop1 = createMainSlider('.inspiring__full', galleryThumbs1);

// const galleryTop2 = createMainSlider('.menu__full-2', galleryThumbs2);
// const galleryTop3 = createMainSlider('.menu__full-3', galleryThumbs3);
// const galleryTop4 = createMainSlider('.menu__full-4', galleryThumbs4);
// const galleryTop5 = createMainSlider('.menu__full-5', galleryThumbs5);