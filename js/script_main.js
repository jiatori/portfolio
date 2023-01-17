'use strict';


// a 클릭했을때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});


//상단이동 부드럽게
$(function() {            
    $('.goTop').on('click', function() {
        var top = $('body').offset().top;
        $('html, body').animate( { scrollTop : (top) }, 400 );  
    });     
});


if(window.innerWidth > 767) {
//마우스 흔들흔들 이벤트
// 1) gnb 메뉴 li
$(document).on("mousemove", function(event) {
    var window_height = $('.gnb ul li a').height();
    var window_width = $('.gnb ul li a').width();
    var mouseXpos = event.clientX;
    var mouseYpos = event.clientY;
    var YrotateDeg = (window_width / 2 - mouseXpos) * 0.01; //숫자 높이면 세로축을 기준으로 빙글빙글 돈다~ 0.01 이 적당함
    var XrotateDeg = (window_height / 2 - mouseYpos) * 0.5; //이걸로 움직임 정도 조정!
    $(".gnb ul li a").css(
        "transform",
        "rotateX(" + XrotateDeg/10 + "deg) rotateY(" + YrotateDeg + "deg)"
        );
    });
//2) index) visual box 로고이미지 (.img말고 img에 줘야 함! 스크롤값 때문에 그런 듯!)
$(document).on("mousemove", function(event) {
    var window_height = $('.visual .box .img img').height();
    var window_width = $('.visual .box .img img').width();
    var mouseXpos = event.clientX;
    var mouseYpos = event.clientY;
    var YrotateDeg = (window_width / 2 - mouseXpos) * 0.01; //숫자 높이면 세로축을 기준으로 빙글빙글 돈다~ 0.01 이 적당함
    var XrotateDeg = (window_height / 2 - mouseYpos) * 0.5; //이걸로 움직임 정도 조정!
    $(".visual .box .img img").css(
        "transform",
        "rotateX(" + XrotateDeg/20 + "deg) rotateY(" + YrotateDeg + "deg)"
        );
    });
//3) index) blog 목업이미지
$(document).on("mousemove", function(event) {
    var window_height = $('.blog .imgBox').height();
    var window_width = $('.blog .imgBox').width();
    var mouseXpos = event.clientX;
    var mouseYpos = event.clientY;
    var YrotateDeg = (window_width / 2 - mouseXpos) * 0.01; //숫자 높이면 세로축을 기준으로 빙글빙글 돈다~ 0.01 이 적당함
    var XrotateDeg = (window_height / 2 - mouseYpos) * 0.5; //이걸로 움직임 정도 조정!
    $(".blog .imgBox").css(
        "transform",
        "rotateX(" + XrotateDeg/20 + "deg) rotateY(" + YrotateDeg + "deg)"
        );
    });
//4) works) .publishing .list .listBox .img
$(document).on("mousemove", function(event) {
    var window_height = $('.publishing .list .listBox .img').height();
    var window_width = $('.publishing .list .listBox .img').width();
    var mouseXpos = event.clientX;
    var mouseYpos = event.clientY;
    var YrotateDeg = (window_width / 2 - mouseXpos) * 0.01; //숫자 높이면 세로축을 기준으로 빙글빙글 돈다~ 0.01 이 적당함
    var XrotateDeg = (window_height / 2 - mouseYpos) * 0.5; //이걸로 움직임 정도 조정!
    $(".publishing .list .listBox .img").css(
        "transform",
        "rotateX(" + XrotateDeg/20 + "deg) rotateY(" + YrotateDeg + "deg)"
        );
    });

//6) about) skill 휴대폰 이미지
$(document).on("mousemove", function(event) {
    var window_height = $('.skill .toolsDetails img').height();
    var window_width = $('.skill .toolsDetails img').width();
    var mouseXpos = event.clientX;
    var mouseYpos = event.clientY;
    var YrotateDeg = (window_width / 2 - mouseXpos) * 0.01; //숫자 높이면 세로축을 기준으로 빙글빙글 돈다~ 0.01 이 적당함
    var XrotateDeg = (window_height / 2 - mouseYpos) * 0.7; //이걸로 움직임 정도 조정!
    $(".skill .toolsDetails img").css(
        "transform",
        "rotateX(" + XrotateDeg/20 + "deg) rotateY(" + YrotateDeg + "deg)"
        );
    });
};


//상단 스크롤 프로그래스바(진행바)
$(function() {
    $("body").prognroll({
        height: 3,
        color: "#FEDF79"
    });
    $(".content").prognroll({
        custom: true
    });
}); // 출처: https://esef.tistory.com/403 [굴리고 굴리는 블로그:티스토리]


//header gnb menu open
$(function(){ //제이쿼리 선언
    $(".menuOpen").on('click', function(){ //여기의 on은 아래와 위에 적은 on클래스랑 다른 것임! 이벤트를 불러오는 방법임! click하는 이벤트를 불러오기. menuOpen을 click하면 아래 함수가 실행된다.
        $(".gnb").addClass("on"); // gnb에 on 클래스를 더해준다 -> 메뉴 오픈
    }); 

    $(".close").on('click', function(){ //click하는 이벤트를 불러오기. close를 click하면 아래 함수가 실행된다.
        $(".gnb").removeClass("on"); //on 클래스를 지운다 -> 메뉴 클로즈
    });
});


//index_header logo
$(window).on('scroll resize', function(){
    var scrollPos = 0; //초기값 0
    scrollPos = $(document).scrollTop();
    //alert(scrollPos); //스크롤탑의 위치값 확인 (주석 풀어서 확인하기)

    fix();

    function fix(){
        if(scrollPos > 1000){ //위에서 확인한 스크롤탑 위치값 넣기 -> 시작지점
            $('header .logo').addClass('on');
        } else {
            $('header .logo').removeClass('on');
        }
    }
});


//index_ .about 이미지슬라이드
$(function() {
    $(".about .slide").slick({
        arrows: false, //화살표
        dots: true, //인디케이터 해제
        fade: true, //페이드인 효과
        autoplay: false, //자동재생
        pauseOnHover:false, //마우스 오버, 포커스시 멈추는것 해제
        pauseOnFocus:false
    });
}); 


//about_ .mark 
$(window).on('scroll resize', function(){
    var scrollPos = 0; //초기값 0
    scrollPos = $(document).scrollTop();
    //alert(scrollPos); //스크롤탑의 위치값 확인 (주석 풀어서 확인하기)

    fix();

    function fix(){
        if(scrollPos > 400){ //위에서 확인한 스크롤탑 위치값 넣기 -> 시작지점
            $('.mark').addClass('on');
        } else {
            $('.mark').removeClass('on');
        }
    }
});


// about_라인일러스트 총길이 구하기
$(function(){
    $('.line').find('path').each(function(i, path){
        var length =  path.getTotalLength();
        console.log(length); //3411.
    });
});
//about .profile .line animation
$(window).on('scroll resize', function(){
    var scrollPos = 0; //초기값 0
    scrollPos = $(document).scrollTop();
    //alert(scrollPos); //스크롤탑의 위치값 확인 (주석 풀어서 확인하기)

    fix();

    function fix(){
        if(window.innerWidth > 767) {
            if(scrollPos > 1400){ //위에서 확인한 스크롤탑 위치값 넣기 -> 시작지점
                $('.lineWrap').addClass('on');
            } else {
                $('.lineWrap').removeClass('on');
        }} 
        else if (window.innerWidth > 580) {
            if(scrollPos > 210){ //위에서 확인한 스크롤탑 위치값 넣기 -> 시작지점
                $('.lineWrap').addClass('on');
            } else {
                $('.lineWrap').removeClass('on');
        }}
    }
});


//about_ .profile img
$(window).on('scroll resize', function(){
    var scrollPos = 0; //초기값 0
    scrollPos = $(document).scrollTop();
    //alert(scrollPos); //스크롤탑의 위치값 확인 (주석 풀어서 확인하기)

    fix();

    function fix(){
        if(scrollPos > 2000){ //위에서 확인한 스크롤탑 위치값 넣기 -> 시작지점
            $('.profile .middle').addClass('on');
        } else {
            $('.profile .middle').removeClass('on');
        }
    }
});


// about .skill 라인일러스트 총길이 구하기
$(function(){
    $('.line3').find('line').each(function(i, path){
        var length =  path.getTotalLength();
        console.log(length); //4300.
    });
});
//about .skill .line animation
$(window).on('scroll resize', function(){
    var scrollPos = 0; //초기값 0
    scrollPos = $(document).scrollTop();
    //alert(scrollPos); //스크롤탑의 위치값 확인 (주석 풀어서 확인하기)

    fix();

    function fix(){
        if(window.innerWidth > 1580) {  //width 1580초과는 스크롤 7000에서 작동
            if(scrollPos > 7000){
                $('.skill').addClass('on');
            } else {
                $('.skill').removeClass('on');
            }
        } else if(window.innerWidth <= 1580 && window.innerWidth > 800) { 
            if(scrollPos > 6700){
                $('.skill').addClass('on');
            } else {
                $('.skill').removeClass('on');
            }
        } else if(window.innerWidth <= 800 && window.innerWidth > 750) { 
            if(scrollPos > 6400){
                $('.skill').addClass('on');
            } else {
                $('.skill').removeClass('on');
            }
        } else if(window.innerWidth <= 750 && window.innerWidth > 680) { 
            if(scrollPos > 6100){
                $('.skill').addClass('on');
            } else {
                $('.skill').removeClass('on');
            }
        } else if(window.innerWidth <= 680 && window.innerWidth > 600) { 
            if(scrollPos > 5600){
                $('.skill').addClass('on');
            } else {
                $('.skill').removeClass('on');
            }
        } else if(window.innerWidth <= 600 && window.innerWidth > 580) { 
            if(scrollPos > 5200){
                $('.skill').addClass('on');
            } else {
                $('.skill').removeClass('on');
            }
        } else if(window.innerWidth <= 600 && window.innerWidth > 580) { 
            if(scrollPos > 5200){
                $('.skill').addClass('on');
            } else {
                $('.skill').removeClass('on');
            }
        } else if(window.innerWidth <= 580) { 
            $('.skill').removeClass('on');
        }
    };
});


//about_ .skill 앱 클릭 시 텍스트 슬라이드
$(function() {
    $(".skill .slide").slick({
        arrows: false, //화살표
        dots: true, //인디케이터 해제
        fade: true, //페이드인 효과
        autoplay: false, //자동재생
        pauseOnHover:false, //마우스 오버, 포커스시 멈추는것 해제
        pauseOnFocus:false
    });
}); 


//footer 메일주소 클릭 시 메일 복사
function clip(){

    var url = '';    // <a>태그에서 호출한 함수인 clip 생성
    var textarea = document.createElement("textarea");  
    //url 변수 생성 후, textarea라는 변수에 textarea의 요소를 생성
    
    document.body.appendChild(textarea); //</body> 바로 위에 textarea를 추가(임시 공간이라 위치는 상관 없음)
    url = ("shjy27@gmail.com");  //url에는 복사할 내용을 넣어 줌
    textarea.value = url;  // textarea 값에 url를 넣어줌
    textarea.select();  //textarea를 설정
    document.execCommand("copy");   // 복사
    document.body.removeChild(textarea); //extarea 요소를 없애줌
    
    alert("제 메일주소가 복사되었습니다. 언제든지 연락주세요 : )")  // 알림창
}


//scroll animation
$(function(){
    $('.animate').scrolla({
        moblie : false,  //모바일버전시 활성화
        once: true //스크롤시 딱 한번만 하고 싶을 때 true, 반복하고 싶을 때 false
    });
});


//portfolio reference slide
$(function() {
    if(window.innerWidth > 1380) {
    $(".reference .slide").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false, //화살표
        dots: false, //인디케이터 해제
        fade: false, //페이드인 효과
        autoplay: true, //자동재생
        autoplaySpeed: 1000,
        pauseOnHover:false, //마우스 오버, 포커스시 멈추는
        pauseOnFocus:false,
        swipeToSlide:true, //마우스로 드래그해서 넘길 때 여러개 한꺼번에 넘기기
        touchThreshold:30 //마우스로 드래그해서 넘길 때 슬라이드 너비를 1/30이상 스와이프해서 슬라이드 넘기기. 숫자가 클수록 약간만 움직여도 슬라이드 넘어감.
    });
} else if (window.innerWidth > 1024) {
    $(".reference .slide").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false, //화살표
        dots: false, //인디케이터 해제
        fade: false, //페이드인 효과
        autoplay: true, //자동재생
        autoplaySpeed: 1000,
        pauseOnHover:false, //마우스 오버, 포커스시 멈추는
        pauseOnFocus:false,
        swipeToSlide:true, //마우스로 드래그해서 넘길 때 여러개 한꺼번에 넘기기
        touchThreshold:30 //마우스로 드래그해서 넘길 때 슬라이드 너비를 1/30이상 스와이프해서 슬라이드 넘기기. 숫자가 클수록 약간만 움직여도 슬라이드 넘어감.
    });
} else if (window.innerWidth > 580) {
    $(".reference .slide").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, //화살표
        dots: false, //인디케이터 해제
        fade: false, //페이드인 효과
        autoplay: true, //자동재생
        autoplaySpeed: 1000,
        pauseOnHover:false, //마우스 오버, 포커스시 멈추는
        pauseOnFocus:false,
        swipeToSlide:true, //마우스로 드래그해서 넘길 때 여러개 한꺼번에 넘기기
        touchThreshold:30 //마우스로 드래그해서 넘길 때 슬라이드 너비를 1/30이상 스와이프해서 슬라이드 넘기기. 숫자가 클수록 약간만 움직여도 슬라이드 넘어감.
    });
} else if (window.innerWidth > 100) {
    $(".reference .slide").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false, //화살표
        dots: false, //인디케이터 해제
        fade: false, //페이드인 효과
        autoplay: true, //자동재생
        autoplaySpeed: 500,
        pauseOnHover:false, //마우스 오버, 포커스시 멈추는
        pauseOnFocus:false,
        swipeToSlide:true, //마우스로 드래그해서 넘길 때 여러개 한꺼번에 넘기기
        touchThreshold:30 //마우스로 드래그해서 넘길 때 슬라이드 너비를 1/30이상 스와이프해서 슬라이드 넘기기. 숫자가 클수록 약간만 움직여도 슬라이드 넘어감.
    });
}
}); 


//portfolio sketch slide
$(function() {
    if(window.innerWidth > 890) {
    $(".sketch .slide").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false, //화살표
        dots: false, //인디케이터 해제
        fade: false, //페이드인 효과
        autoplay: true, //자동재생
        autoplaySpeed: 1000,
        pauseOnHover:false, //마우스 오버, 포커스시 멈추는
        pauseOnFocus:false,
        swipeToSlide:true, //마우스로 드래그해서 넘길 때 여러개 한꺼번에 넘기기
        touchThreshold:30 //마우스로 드래그해서 넘길 때 슬라이드 너비를 1/30이상 스와이프해서 슬라이드 넘기기. 숫자가 클수록 약간만 움직여도 슬라이드 넘어감.
    });
} else if (window.innerWidth > 490) {
    $(".sketch .slide").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, //화살표
        dots: false, //인디케이터 해제
        fade: false, //페이드인 효과
        autoplay: true, //자동재생
        autoplaySpeed: 1000,
        pauseOnHover:false, //마우스 오버, 포커스시 멈추는
        pauseOnFocus:false,
        swipeToSlide:true, //마우스로 드래그해서 넘길 때 여러개 한꺼번에 넘기기
        touchThreshold:30 //마우스로 드래그해서 넘길 때 슬라이드 너비를 1/30이상 스와이프해서 슬라이드 넘기기. 숫자가 클수록 약간만 움직여도 슬라이드 넘어감.
    });
} else if (window.innerWidth > 100) {
    $(".sketch .slide").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false, //화살표
        dots: false, //인디케이터 해제
        fade: false, //페이드인 효과
        autoplay: true, //자동재생
        autoplaySpeed: 500,
        pauseOnHover:false, //마우스 오버, 포커스시 멈추는
        pauseOnFocus:false,
        swipeToSlide:true, //마우스로 드래그해서 넘길 때 여러개 한꺼번에 넘기기
        touchThreshold:30 //마우스로 드래그해서 넘길 때 슬라이드 너비를 1/30이상 스와이프해서 슬라이드 넘기기. 숫자가 클수록 약간만 움직여도 슬라이드 넘어감.
    });
}
}); 


//portfolio wireFrame slide
$(function() {
    if(window.innerWidth > 890) {
    $(".wireFrame .slide").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false, //화살표
        dots: false, //인디케이터 해제
        fade: false, //페이드인 효과
        autoplay: true, //자동재생
        autoplaySpeed: 1000,
        pauseOnHover:false, //마우스 오버, 포커스시 멈추는
        pauseOnFocus:false,
        swipeToSlide:true, //마우스로 드래그해서 넘길 때 여러개 한꺼번에 넘기기
        touchThreshold:30 //마우스로 드래그해서 넘길 때 슬라이드 너비를 1/30이상 스와이프해서 슬라이드 넘기기. 숫자가 클수록 약간만 움직여도 슬라이드 넘어감.
    });
} else if (window.innerWidth > 490) {
    $(".wireFrame .slide").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, //화살표
        dots: false, //인디케이터 해제
        fade: false, //페이드인 효과
        autoplay: true, //자동재생
        autoplaySpeed: 1000,
        pauseOnHover:false, //마우스 오버, 포커스시 멈추는
        pauseOnFocus:false,
        swipeToSlide:true, //마우스로 드래그해서 넘길 때 여러개 한꺼번에 넘기기
        touchThreshold:30 //마우스로 드래그해서 넘길 때 슬라이드 너비를 1/30이상 스와이프해서 슬라이드 넘기기. 숫자가 클수록 약간만 움직여도 슬라이드 넘어감.
    });
} else if (window.innerWidth > 100) {
    $(".wireFrame .slide").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false, //화살표
        dots: false, //인디케이터 해제
        fade: false, //페이드인 효과
        autoplay: true, //자동재생
        autoplaySpeed: 500,
        pauseOnHover:false, //마우스 오버, 포커스시 멈추는
        pauseOnFocus:false,
        swipeToSlide:true, //마우스로 드래그해서 넘길 때 여러개 한꺼번에 넘기기
        touchThreshold:30 //마우스로 드래그해서 넘길 때 슬라이드 너비를 1/30이상 스와이프해서 슬라이드 넘기기. 숫자가 클수록 약간만 움직여도 슬라이드 넘어감.
    });
}
}); 


//portfolio fullPage slide
$(function() {
    $(".fullPage .slide").slick({
        arrows: false, //화살표
        dots: true, //인디케이터 해제
        fade: false, //페이드인 효과
        autoplay: false, //자동재생
        pauseOnHover:false, //마우스 오버, 포커스시 멈추는것 해제
        pauseOnFocus:false,
        observer: true,
        observeParents: true,
        adaptiveHeight: true
    });
});