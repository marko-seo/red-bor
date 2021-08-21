if (document.querySelector('.gallery__slider')) {
  const gallery_slider = new Swiper('.gallery__slider', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2.5,
    centeredSlides: true,
    allowTouchMove: false,
    short: false,
    navigation: {
      prevEl: '.gallery__btn--prev',
      nextEl: '.gallery__btn--next'
    },
    breakpoints: {
      768: {
        allowTouchMove: true,
        slidesPerView: 1.9
      },
      576: {
        allowTouchMove: true,
        slidesPerView: 1.5
      }
    }
  });
}