$(function(){
    'use strict';
    // adjust header height
    var myHeader = $('.header');

    myHeader.height($(window).height());
    $(window).resize(function(){
        myHeader.height($(window).height());
    })
    //

    // add active Class in links
    $('.navbar .links li a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    })
    //

    // add bxSlider
    $('.slider').bxSlider({
        pager: false
    });
    //

    // smoth scroll to div
    $('.links li a').click(function(){
        $('html , body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000)
    })
    //

    // start auto slider for testemonials
    function autoSlider(){
        $('.t-slider .active').each(function(){
            if(!$(this).is(':last-child')){
                $(this).delay(3000).fadeOut(1000, function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                })
            }else{
                $(this).delay(3000).fadeOut(1000, function(){
                    $(this).removeClass('active');
                    $('.t-slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                })
            }
        })
    };
    autoSlider();
    //
    //trigger mixitup

    $('.containMix').mixItUp();

    // shuffle

    $('.our-projects .shuffle li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    })

    //
    // trigger Nice scroll
    $("body").niceScroll({
        cursorcolor:"#1abc9c",
        cursorwidth:"10px",
        cursorborder:"none",
        cursorborderradius:0
      });
    //
    
})