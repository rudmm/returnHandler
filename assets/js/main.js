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

function resize() {
    let $image = $(".image_animate");
    let $wrapper = $(".top-image");
    let $windowWidth = $(window).width();
    let transformRule = '';
    let wrapperHeight = $wrapper.height();
    let imageHeight = $image.outerHeight();
    //let scale = Math.min($wrapper.width() / $image.outerWidth(), wrapperHeight / imageHeight);
    let scale = $windowWidth / 1920;
    transformRule = "scale(" + scale + ")";


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
});

$(window).resize(function () {
    resize();
});
$(window).on("orientationchange", function () {
    if ($(window).width() > 500) {
        resize();
    }
});
