//destination swiper
var swiper = new Swiper(".destination-container", {
    slidesPerView: 1,
    spaceBetween: 10, 
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      DynamicsBullets: true,
      clickable: true,
    },
    breakpoints: {
        280: {
            slidesPerView:  1,
            spaceBetween:  10,
        },
        320: {
            slidesPerView:  1,
            spaceBetween:  10,
        },
        510: {
            slidesPerView:  2,
            spaceBetween:  10,
        },
        750: {
            slidesPerView:  3,
            spaceBetween:  15,
        },
        900: {
            slidesPerView:  4,
            spaceBetween:  20,
        },  
    }    
  });