const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
    slidesPerView: 3,
    spaceBetween: 10,
    //centeredSlides: true, //false
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    //  autoplay: {
    // 	delay: 5000,
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1025: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        }
    }
})