window.addEventListener('load', function() {
    new Swiper ('.swiper', {
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 1,
        breakpoints: {
          320: {
            slidesPerView: 1.5,
            spaceBetween: 20
          },

          480: {
            slidesPerView: 2,
            spaceBetween: 22
          },

          640: {
            slidesPerView: 3,
            spaceBetween: 23
          },

          1080: {
            slidesPerView: 4,
            spaceBetween: 24
          },

          1920: {
            slidesPerView: 5,
            spaceBetween: 28
          },

        }
    });
  })