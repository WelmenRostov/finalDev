import './scss/main.css'
import './assets/fonts/stylesheet.css'

function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${url}`));
        document.body.appendChild(script);
    });
}

// Загрузка Swiper из CDN
loadScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js')
    .then(() => {
        // Инициализация Swiper после загрузки скрипта
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    })
    .catch(error => console.error(error));
import buttons from "./js/buttons"
import sliver from "./js/slider_swiper"
import swiperBundle from "./js/swiper-bundle"
