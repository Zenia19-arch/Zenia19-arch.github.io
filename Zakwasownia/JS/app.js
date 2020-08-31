$(document).ready(function(){
    let header = $("#header");
    let height = header.innerHeight();
    let scrollPos = $(window).scrollTop();
    let header_fixed = $(".header.fixed");
    let varScrollTop = 0;
    checkScroll(scrollPos,height);
    $(window).on("scroll load resize",function(){
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos,height);
  });
    
    
    function checkScroll(scrollPos,height){
        if(scrollPos > varScrollTop){
            header_fixed.fadeOut();
            
        }else{
            header_fixed.fadeIn();
        }
        
        varScrollTop = scrollPos;
    }
    
    let nav = $(".header_menu");
    let navToggle = $("#navToggle");
    let button_burger = $(".button_burger");
    
    navToggle.on("click",function(event){
        event.preventDefault();
        
        nav.toggleClass("show");
        header.toggleClass("show");
        button_burger.toggleClass("show");
        
    });
    
  

    
    $('.klients_slider').slick({
        infinite: true,//бесконечный скролинг
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
    
    $('.reviews_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    dots: false
    });
	

      $('[data-scroll]').on('click',function(event){
        event.preventDefault();
        
        let innerH = $(this).data('scroll');
        let elementOffset = $(innerH).offset().top;
        
        nav.removeClass("show");
          button_burger.removeClass("show");
          
          header_fixed.removeClass("show");
        $('html ,body').animate({
            scrollTop: elementOffset+20
        },700);     
                
    });
    
});
