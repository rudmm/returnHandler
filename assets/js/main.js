function menu(){
    let scroll = $(window).scrollTop();
    let header = $('.header header .bg');
    if(scroll>0){
        header.addClass('fixed');
    }else{
        header.removeClass('fixed');
    }
}

function clickBurger(){
    let btn = $('.btn-menu');
    let navbar = $('.navbar');
    let header = $('.header header .bg');
    let fixedblock = $('.header header .fixedblock');
    btn.click(function(){
        btn.toggleClass('open');
        navbar.slideToggle(10);
        header.toggleClass('fixed mobile','easeInQuad');
        fixedblock.toggleClass('mobilefixedblock','easeInQuad');
       
    });
}

function answerOpen(){
    let btn = $('.question .circle');
    for(let i=0;i<btn.length;i++){
        btn.eq(i).click(function(){
            let lines = btn.eq(i).children('.arrow-lines');
            let answer = btn.eq(i).parents('.list-item').find('.answer');
            console.log(answer);
            let answerLine = btn.eq(i).parents('.list-item').find('.answer_line');
            lines.toggleClass('open');
            answer.slideToggle();
            answerLine.toggleClass('openLine');
        });
    }
}

function resize() {
    let $image = $(".image_animate");
    let $wrapper = $(".top-image");
    let basWidth = 929;
    let basHeight = 629;
    let transformRule = '';
    let wrapperHeight = $wrapper.height();
    let scale = Math.min($wrapper.width() / basWidth, wrapperHeight / basHeight);
    let realyHeightImage = $image.height()/(Math.max(basWidth/ $wrapper.width() , basHeight /wrapperHeight  )); 
    let procentTranslateY = 50;
    let windowWidth = $(window).outerWidth();
    if(windowWidth>768){ 
        procentTranslateY = (100 - realyHeightImage/( wrapperHeight/100))/2 +50;
    }
    transformRule = "translate(-50%, -"+procentTranslateY+"%) scale(" + scale + ")";

    $image.css({
        transform: transformRule
    });
}

$(window).scroll(function(){
    menu();
});
$(document).ready(function(){
    clickBurger();
    resize();
    answerOpen();
});

$(window).resize(function () {
    resize();
});
$(window).on("orientationchange", function () {
    if ($(window).width() > 500) {
        resize();
    }
});
