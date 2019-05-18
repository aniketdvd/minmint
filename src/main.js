$(document).on('ready', function () {
    $(".app-screens").slick({
        dots: true,
        arrows: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ],
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: "<button class=\"app-screens--prev n-button\">&larr;</button>",
        nextArrow: "<button class=\"app-screens--next n-button\">&rarr;</button>"
    });
});