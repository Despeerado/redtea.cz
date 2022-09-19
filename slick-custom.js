//slick 

$('.slides').slick({
slidesToShow: 4,
slidesToScroll: 4,
autoplay: true,
autoplaySpeed: 0,
speed: 8000,
pauseOnHover: false,
  cssEase: 'linear',
    dots: false,
  prevArrow: false,
  nextArrow: false,
responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
   {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
//  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left' aria-hidden='true'></i></button>",
//  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right' aria-hidden='true'></i></button>"
});