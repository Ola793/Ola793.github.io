$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 541,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 911,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1281,
            settings: {
              slidesToShow: 5,
            }
          },
        ]
    });
    $('.slider').slick('setPosition');
});