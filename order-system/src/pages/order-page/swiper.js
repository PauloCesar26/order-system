import 'swiper/css';
import 'swiper/css/navigation';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs'

export function swiper(){
    let swiper;

    swiper = new Swiper(".swiper", {
        loop: true,

        allowTouchMove: false,
        // Pagination bullets

    
        // Navigation arrows
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 1
            },
        }
    });
}