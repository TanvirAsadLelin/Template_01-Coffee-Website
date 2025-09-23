const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");

menuOpenButton.addEventListener('click', () => {
    console.log('Menu Open Button Clicked');
    document.body.classList.toggle("show-mobile-menu");
})

menuCloseButton.addEventListener('click', () => menuOpenButton.click());

navLinks.forEach(link => {
    link.addEventListener('click', () => menuOpenButton.click());
});

// For Swiper JS
const swiper = new Swiper('.slider-wrapper', {

    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }

    }
});