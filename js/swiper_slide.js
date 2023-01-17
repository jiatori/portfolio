if(window.innerWidth < 768) {     //768보다 작을 때
    new Swiper(".swiper-container",{
        direction: "horizontal",
        slidesPerView: 1,
        parallax: !0,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        paginationClickable: !0,     //0(거짓)이 아니면 진행
        spaceBetween: 0,
        speed: 1500,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        loop: false     //자동반복
    })
} else {
    new Swiper(".swiper-container",{
        direction: "horizontal",
        slidesPerView: 1,
        parallax: !0,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        paginationClickable: !0,
        spaceBetween: 0,
        speed: 1500,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false, //이걸 넣어줘야 드래그해서 넘겼을 때 정지되는거 방지됨
        },
        loop: false
    })
}