// work publishing 스크롤 기울기 효과
//function으로 불러오는 형식 안해도 됨! 이부분 더 공부 필요!!!

if(window.innerWidth > 767) {
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".publishing .list .listBox.left").forEach(function (listBoxLeft) { 
    gsap.to(listBoxLeft, {
        x:-20,
        y:-10,
        skewX:2,
        rotate:0,
        opacity:1,
        scrollTrigger: {
            trigger: listBoxLeft,
            scrub:1,
            //markers:true,
            start: '20% bottom',
            end: 'bottom top'
        }
    })
});  

gsap.utils.toArray(".publishing .list .listBox.right").forEach(function (listBoxRight) { 
    gsap.to(listBoxRight, {
        x:20,
        y:-10,
        skewX:-1, 
        rotate:0,
        opacity:1,
        scrollTrigger: {
            trigger: listBoxRight,
            scrub:1,
            //markers:true,
            start: '20% bottom',
            end: 'bottom top'
        }
    })   
});
}