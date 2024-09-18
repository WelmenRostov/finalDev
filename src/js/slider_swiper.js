var swiperСompany = new Swiper(".swiperСompany", {
    direction: "horizontal",
    centeredSlides: false,
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-paginationCompany",
        clickable: true,
    },

    breakpoints: {
        768: {
            enabled: false,
        },
    },
    loop: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    }
});

var swiperTechnic = new Swiper(".swiperTechnic", {
    direction: "horizontal",
    centeredSlides: false,
    slidesPerView: "auto",
    spaceBetween: 14,
    pagination: {
        el: ".swiper-paginationTechnic",
        clickable: true,
    },

    breakpoints: {
        768: {
            enabled: false,
        },
    },
    loop: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 2,
    },
});

var swiperPrise = new Swiper(".swiperPrise", {
    direction: "horizontal",
    centeredSlides: false,
    slidesPerView: "auto",
    spaceBetween: 14,
    pagination: {
        el: ".swiper-paginationPrise",
        clickable: true,
    },

    breakpoints: {
        768: {
            enabled: false,
        },
    },
    loop: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 2,
    },
});
