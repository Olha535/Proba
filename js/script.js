new Swiper('.image-slider', {
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    touchRatio: 5,
    grabCursor: true,

    thumbs: {
        swiper: {
            el: '.image-mini-slider',
            slidesPerView: 50,
           
        }
    },

    
});