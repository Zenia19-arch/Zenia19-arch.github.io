$(document).ready(function(){
    let header = $("#header");
    let height = header.innerHeight();
    let scrollPos = $(window).scrollTop();
    let header_fixed = $(".header.fixed");
    let varScrollTop = 0;
    $(window).on("scroll load resize",function(){
        scrollPos = $(this).scrollTop();
        
        if(scrollPos > varScrollTop){
            header_fixed.fadeOut();
            
        }else{
            header_fixed.fadeIn();
        }
        
        varScrollTop = scrollPos;
  });
    
    
    
    
    let nav = $(".header_menu");
    let navToggle = $("#navToggle");
    let button_burger = $(".button_burger");
    
    navToggle.on("click",function(event){
        event.preventDefault();
        
        nav.toggleClass("show");
        header.toggleClass("show");
        button_burger.toggleClass("show");
        
    });
    
    $('.reviews_slider').slick({
        infinite: true,//бесконечный скролинг
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
    
    $('.klients_slider').slick({
        infinite: true,//бесконечный скролинг
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    
});
