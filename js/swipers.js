// import Swiper JS
import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

let mainPageSwiper = new Swiper(".main-page-swiper__swiper", {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 10,
  pagination: {
    el: ".main-page-swiper__pagination",
  },
  breakpoints: {
    768: {
      spaceBetween: 20,
    }
  }
});

let mainPagePopularSwiper = new Swiper(".block-popular__swiper", {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 20,
  breakpoints: {
    768: {
      spaceBetween: 30,
    }
  }
});

let mainPageMyCategoriesSwiper = new Swiper(".block-popular__filter-swiper", {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 27,
  breakpoints: {
    768: {
      spaceBetween: 22,
    }
  }
});

let mainPageCompilationsSwiper = new Swiper(".compilations__swiper", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpoints: {
    768: {
      spaceBetween: 21,
    }
  }
});
