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
        header.addClass('fixed mobile');
        fixedblock.addClass('mobilefixedblock');
        navbar.slideToggle();
        let navbaritem = $('.nav-bar li a');
        for(let i =0;i<navbaritem.length;i++){
            navbaritem.eq(i).click(function(){
                btn.removeClass('open');
                navbar.slideUp();
            });
        }
    });
}
$(window).scroll(function(){
    menu();
});
$(document).ready(function(){
    clickBurger();
});