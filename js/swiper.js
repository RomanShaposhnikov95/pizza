const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 500,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        350: {
            slidesPerView: "auto",
        },
        500: {
            slidesPerView: 'auto',
        },

    }
});