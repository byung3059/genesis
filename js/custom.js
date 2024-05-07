// mainslide();
// maincontentslide();
// AwardSlide();



const mainslide = new Swiper('.main-slide', {

    effect: 'fade',
    speed: 1500,
    // loop: true,
    autoplay: {
        delay: 1500,
    },

    pagination: {
        el: '.swiper-pagination', dynamicBullets: true,
    },
});




const maincontentslide = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 40,
    pagination: {
        el: ".main-content-slide .swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const AwardSlide = new Swiper(".award", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 40,
    pagination: {
        el: ".award-slide .swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});




// const AwardSlide = new Swiper(".award", {
//     loop: true,
//     slidesPerView: "auto",
//     centeredSlides: true,
//     spaceBetween: 40,

//     pagination: {
//         el: ".award .swiper-pagination",
//         dynamicBullets: true,
//         clickable: true,
//     },
// });



