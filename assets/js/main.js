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
$(window).scroll(function(){
    menu();
});
$(document).ready(function(){
    clickBurger();
});