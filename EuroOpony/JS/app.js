$(document).ready(function(){
    $('.polit__pryw').hover(
        function(){
            $('.btn--produkt.footer__link').addClass("show");
            
        },
        function(){
            $('.btn--produkt.footer__link').removeClass("show");
        });
    
    $('.polit__bdo').hover(
        function(){
            $('.btn--produkt.footer__linka').addClass("show2");
            
        },
        function(){
            $('.btn--produkt.footer__linka').removeClass("show2");        
        });
    
    $('.korzysci.pieniadze').hover(
        function(){
            $('.korzysci__images__pien--open').removeClass("show");
            $('.korzysci__images__pien').addClass("show");
            $('.border__line__pien').addClass("show");
        },
        function(){
            $('.korzysci__images__pien--open').addClass("show");
            $('.korzysci__images__pien').removeClass("show");
            $('.border__line__pien').removeClass("show");
        });
    
    $('.korzysci.biezpieczny').hover(
        function(){
            $('.korzysci__images__biezp--open').removeClass("show");
            $('.korzysci__images__biezp').addClass("show");
            $('.border__line__bezp').addClass("show");
        },
        function(){
            $('.korzysci__images__biezp--open').addClass("show");
            $('.korzysci__images__biezp').removeClass("show");
            $('.border__line__bezp').removeClass("show");
        });
    
    $('.korzysci.srodowisko').hover(
        function(){
            $('.korzysci__images__srodow--open').removeClass("show");
            $('.korzysci__images__srodow').addClass("show");
            $('.border__line__srod').addClass("show");
        },
        function(){
            $('.korzysci__images__srodow--open').addClass("show");
            $('.korzysci__images__srodow').removeClass("show");
            $('.border__line__srod').removeClass("show");
        });
    
     $('.menu__size').hover(
        function(){
            $('.menu__hover').addClass("show");
            $('.menu__hover__arrow').addClass("show");
        },
        function(){
            
        });
    
    if ($(window).width() < 900) {
            $('.menu__size').hover( function(){
                $('.menu__hover').removeClass("show");
                $('.menu__hover__arrow').removeClass("show");
            });
        
            $('.menu__item.show__menu').on("click",function(event){
                event.preventDefault();
                $('.menu__hover').toggleClass("show");
                $('.menu__hover__arrow').toggleClass("show");
                $('.menu__item.show__menu').toggleClass("show");
                $('.menu__arrow.show__menu').toggleClass("show");
            });
        
        }
        else {
            $('.menu__size').hover( function(){
                $('.menu__hover').addClass("show");
                $('.menu__hover__arrow').addClass("show");
            });
        }
    
    $('.top__images,.top__text,.start').hover( function(){
            $('.menu__hover').removeClass("show");
            $('.menu__item.show__menu').removeClass("show");
                $('.menu__arrow.show__menu').removeClass("show");
        });

    
    $('.wydajnosc__photo__green').hover( function(){
        
            $('.wydajnosc__photo').toggleClass("show");
            $('.wydajnosc__photo__green').toggleClass("show");
        });
    
    $('.link__menu').on("click",function(event){
        event.preventDefault();
//        $('.menu__item').addClass("show").visited();
        
    });
    /*------------------------------------*/
    /*------------------------------------*/
    /*------------------------------------*/
    let burger__open = $('.burgermenu__button');
    let burger__close = $('.burgermenu__close');
    let burger__start = $('.burger__start');
    let item__container = $('.item__container');
    
    burger__open.on("click",function(event){
        event.preventDefault();
        $('.burger__container').addClass("show");
        burger__open.addClass("show");
        burger__close.removeClass("show");
        burger__start.addClass('show');
        item__container.addClass('show');
    });
    
    burger__close.on("click",function(event){
        event.preventDefault();
        $('.burger__container').removeClass("show");
        burger__open.removeClass("show");
        burger__close.addClass("show");
         burger__start.removeClass('show');
        item__container.removeClass('show');
    });
    
    $('.block.pien').on("click",function(event){
        event.preventDefault();
        $('.open__pien').toggleClass("show");
        $('.korzysci.pieniadze').toggleClass("show");
        $('.border__line__pien.show').toggleClass("disabled");
        $('.open__container__pien').toggleClass("show");
        $('.wydajnosc__svg__pien').toggleClass("show");
        $('.open__blackareaa__pien').toggleClass("show");
    });
    
    $('.block.bezp').on("click",function(event){
        event.preventDefault();
        $('.open__bezp').toggleClass("show");
        $('.korzysci.biezpieczny').toggleClass("show");
        $('.border__line__bezp.show').toggleClass("disabled");
        $('.open__container__bezp').toggleClass("show");
        $('.wydajnosc__svg__bezp').toggleClass("show");
        $('.open__blackareaa__bezp').toggleClass("show");
    });
    
    $('.block.srodow').on("click",function(event){
        event.preventDefault();
        $('.open__srodow').toggleClass("show");
        $('.korzysci.srodowisko').toggleClass("show");
        $('.border__line__srod.show').toggleClass("disabled");
        $('.open__container__srodow').toggleClass("show");
        $('.wydajnosc__svg__srodow').toggleClass("show");
        $('.open__blackareaa__srodow').toggleClass("show");
    });
    
    
    let slider__top = $("#produkt__size");
    
    slider__top.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots:true,
              prevArrow:'#slick__left',
              nextArrow:'#slick__right',
        responsive: [
            {
                breakpoint: 1125,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    
    
    
    
    
    
    
    
    
});