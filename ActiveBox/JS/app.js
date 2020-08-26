$(document).ready(function(){
  
    let header = $('#header');
    let section = $('#section');
    let section_size = section.innerHeight();
    
    let header_menu = $('#header_menu');
    
    $(window).on('scroll load resize',function(){
        section_size = section.innerHeight();
        
        let scroll = $(this).scrollTop();
        
        if( scroll > section_size ){ 
            header.addClass('fixed');
                
        }else{
            header.removeClass('fixed');
            
        }
    });
    
    $('[data-scroll]').on('click',function(event){
        event.preventDefault();
        
        let innerH = $(this).data('scroll');
        let elementOffset = $(innerH).offset().top;
        
        header_menu.removeClass('show'); 
        
        $('html ,body').animate({
            scrollTop: elementOffset - 42
        },700);     
        
    });
    
    
    
    $('#burger').on('click',function(event){
        event.preventDefault();
        
        header_menu.toggleClass('show'); 
    });
    
    
    $('.slick_js').slick({
        infinite: true,//бесконечный скролинг
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
    
    
    
   
//    $('#id_btn_1').on('click',function(Event){
//        
//        event.preventDefault();
//        
//        $('#testim_img').attr('src','images/Testimonials/Layer%2019.jpg');
//        
//    });
//    
//    $('#id_btn_2').on('click',function(Event){
//        
//        event.preventDefault();
//        
//        $('#testim_img').attr('src','images/Testimonials/unnamed.jpg' );
//        
//    });
    
    
});