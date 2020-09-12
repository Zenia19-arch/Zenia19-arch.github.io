$(document).ready(function(){
    let header = $("#header");
    let height = header.innerHeight();
    let scrollPos = $(window).scrollTop();
    let header_fixed = $(".header.fixed");
    let arrow = $(".arrow");
    let nav = $(".header_menu");
    let varScrollTop = 0;
    
    checkScroll(scrollPos,height);
    $(window).on("scroll load resize",function(){
        scrollPos = $(this).scrollTop();
//        if(scrollPos > varScrollTop){
//            nav.removeClass("show");
//            header.removeClass("show");
//            
//        }
        checkScroll(scrollPos,height);
  });
    

	$(window).scroll(function(event) {
       event.preventDefault();
        
	   if($(window).scrollTop() + $(window).height() < $(document).height() - 100) {
	       arrow.addClass("js__arrow");
	   } else{
	   	   arrow.removeClass("js__arrow");
	   }
	});

    
    arrow.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, 1000);
   });
    
    
    
    function checkScroll(scrollPos,height){
        if(scrollPos > varScrollTop){
            header_fixed.fadeOut();
            
        }else{
            header_fixed.fadeIn();
        }
        
        varScrollTop = scrollPos;
    }
    
    let icon__media = $(".icon.icon__media");
    let navToggle = $("#navToggle");
    let button_burger = $(".button_burger");
    let icon_burger = $(".icon_burger.show");
    let navToggle_close = $("#navToggle_close");
    let button_close = $(".button_close.show");

    
    
    navToggle.on("click",function(event){
        event.preventDefault();
        
        nav.toggleClass("show");
        header.toggleClass("show");
        button_burger.toggleClass("show");
        button_close.removeClass("show");
    });

    navToggle_close.on("click",function(event){
        event.preventDefault();
        
        button_close.toggleClass("show");
        button_burger.removeClass("show");
        nav.toggleClass("show");
        header.toggleClass("show");
    
    });
    
    
    $('.klients_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        dots: false,
        appendArrows:'.slider-arrows-no_media',
          prevArrow:'<span class="slider-arrow-no_media left"><</span>',
          nextArrow:'<span class="slider-arrow-no_media">></span>'
    });
    
    $('.klients__slider__rwd').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        dots: false,
        appendArrows:'.slider-arrows-media',
          prevArrow:'<span class="slider-arrow-media left"><</span>',
          nextArrow:'<span class="slider-arrow-media">></span>'
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

        var elementOffset = jQuery(innerH).position().top;
        nav.removeClass("show");
          
        button_close.toggleClass("show");
        button_burger.removeClass("show");
          header_fixed.removeClass("show");
        $('html ,body').animate({
            scrollTop: elementOffset+20
        },700);     
                
    });

    
});
