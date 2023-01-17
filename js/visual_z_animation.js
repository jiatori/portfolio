$(function(){
    // 01.페이지 로딩 시 스크롤이 제일 상단으로 이동, h1에 scrollTop의 위치값이 표기
    $('body,html').stop().animate({'scrollTop':0}, 1500,'swing');


    // 02. 변수 scroll에 현재 scrollTop의 위치값을 저장
    $(window).on('scroll', function(){
        var scroll = $(this).scrollTop(); 
    $('.scrollTopNum').text(scroll); //변수scroll값이 h1에 입력


    // 03. 스크롤값과 박스의 Z축을 연동하고 특정 구간에 스크롤네비게이션 박스를 활성화
    for(var i=0; i<2; i++){
        $('.box article').eq(i).css({'transform':'translateZ('+ parseInt((-1200*i)+scroll) +'px)'});
        if(scroll >= i*1200 && scroll < (i+1)*1200){
            $('article').removeClass('on');
            $('article').eq(i).addClass('on');
        };

        //z축 확대효과 스크롤 1850에서 멈춰서 고정
        if(scroll > 1850){
            break
        };
    };


    //비디오 opacity 조정
    if(scroll > 3300){ 
        $('.box video').css({
            'opacity':'0',
            'transition':'0.4s'
        });
    } 
    else if(scroll < 700){ //700 미만에서는 투명도 0
        $('.box video').css({
            'opacity':'0',
            'transition':'0.4s'
        });
    }
    else if(scroll < 1850){ //1850 까지는 투명도 0.5
        $('.box video').css({
            'opacity':'0.5',
            'transition':'0.4s'
        });
    } 
    else $('.box video').css({
        'opacity':'1', //그 외 영역에서는 투명도 1
        'filter':'brightness(1.1)',
        'transition':'0.4s'
    });

    //위 처럼 opacity만 주면 아래에 계속 남아서 다른 요소 위에 겹쳐짐. display:none 으로 없애기
    if(scroll > 4000){
        $('.box').css({
            'display':'none'
        });
    }
    else $('.box').css({
        'display':'block'
    });



    //마퀴텍스트 스크롤 1000~4300 까지 애니메이션 시작 => 아래 opacity 범위보다 넉넉하게 잡아줘야 active 붙는 시점에 효과 적용 안된거 보이는거 방지됨!
    if(scroll > 1000 && scroll < 4300){
        $('.box .marquee').addClass('active')
    }
    else {
        $('.box .marquee').removeClass('active');
    };

    //마퀴텍스트 스크롤 opacity 조정. 
    if(scroll > 3300){ 
        $('.box .marquee').css({
            'opacity':'0',
            'transition':'0.4s'
        });
    }
    else if(scroll < 2000){
        $('.box .marquee').css({
            'opacity':'0',
            'transition':'0.4s'
        });
    }
    else $('.box .marquee').css({
        'opacity':'1' //그 외 영역에서는 투명도 1
    });
    });
});

