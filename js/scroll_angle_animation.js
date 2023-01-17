if(window.innerWidth > 767) {
    //안정화
    gsap.registerPlugin(ScrollTrigger);


    //about페이지) visual섹션
    //01.visual 영역 고정
    ScrollTrigger.create({
        trigger:'.visual.about',
        pin:true
    }); 

    //02. visual marquee animation
    gsap.to('.visual.about .marquee', { 
        opacity:0,
        scrollTrigger: {
            trigger:'.visual.about .marquee',
            start:'top 30%',
            end:'bottom top',
            //markers:true,
            scrub:true 
        }
    });

    //03.visual.about img animation
    gsap.to('.visual.about .img',{
        scale:2.5, 
        rotate:0,
        skewX:0,
        opacity:1,
        scrollTrigger: {
            trigger:'.visual.about .img',
            start:'center 30%',
            end:'bottom top',
            //markers:true,
            scrub:true
        }
    });

    //05. visual 배경색 변경
    gsap.to('.visual.about', { 
        backgroundColor:'#bcbcbe',
        scrollTrigger: {
            trigger:'.visual.about .img',
            start:'center 30%',
            end:'bottom top',
            //markers:true,
            scrub:true 
        }
    });

    //05. visual marquee2 animation
    $(window).on('scroll', function(){
        var scroll = $(this).scrollTop(); 
    $('.scrollTopNum').text(scroll); //scroll값이 h1에 입력

    if(scroll >= 600){
        $('.visual.about .marquee2').css({
            'opacity':'0.7',
            'transition':'0.6s'
        }), $('.visual.about .text').css({
            'opacity':'1',
            'transform':'translateY(-60%)',
            'transition':'0.6s'
        });
    } else $('.visual.about .marquee2').css({
        'opacity':'0',
        'transition':'0.6s'
    }), $('.visual.about .text').css({
        'opacity':'0',
        'transition':'0.6s'
    });
    });


    //about페이지) timeline
    gsap.registerPlugin(ScrollTrigger);

        //1.x축 horizontal scroll
        let list = gsap.utils.toArray('.timeline .list li');
        let listA = gsap.utils.toArray('.timeline .list .a');
        let listB = gsap.utils.toArray('.timeline .list .b');
        let listC = gsap.utils.toArray('.timeline .list .c');

        let scrollTween = gsap.to(list, {
            xPercent: -100 * (list.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger:'.timeline', //트리거 대상
                pin:true, //고정
                scrub:1, //되감기
                //markers:true,
                end: '+=2000' //끝나는점
            }
        });

        // 배경색 블랙으로 바꾸기
        gsap.to('.timelineWrap .pin-spacer', {
            backgroundColor: '#000',
            scrollTrigger: {
                trigger: '.timelineWrap .pin-spacer',
                scrub:1,
                //markers:true,
                start: '30% 30%',
                end: 'bottom 70%'
            }
        });

        // 폰트색 화이트로 바꾸기
        gsap.to('.timeline .list li .tit', {
            color: '#fff',
            scrollTrigger: {
                trigger: '.timelineWrap .pin-spacer',
                scrub:1,
                //markers:true,
                start: '30% 30%',
                end: 'bottom 70%'
            }
        });

        gsap.to(listA, {
            y:50, //옵션 원하는대로 적어
            rotation:30, //옵션 원하는대로 적어
            scrollTrigger: {
                trigger: '.timeline',
                pin:true, 
                scrub:1,
                end: '+=2000'
            }
        });

        gsap.to(listB, {
            y:-70, //옵션 원하는대로 적어
            rotation:20, //옵션 원하는대로 적어
            scrollTrigger: {
                trigger: '.timeline',
                pin:true, 
                scrub:1,
                end: '+=2000'
            }
        });

        gsap.to(listC, {
            rotation:-10, //옵션 원하는대로 적어
            scrollTrigger: {
                trigger: '.timeline',
                pin:true, 
                scrub:1,
                end: '+=2000'
            }
        });
}