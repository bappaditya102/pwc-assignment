$(document).ready(function () { 
    $('.owl-banner').owlCarousel({        
        margin:1,
        responsiveClass:true,
        nav:true,
        dots:false,
        autoPlay:false,
        loop:false,
        responsive:{
            0:{
                items:1,                
            },
            600:{
                items:1,
                
            },
            1000:{
                items:1,             
                
            }
        }
    });

    $('.owl-branding').owlCarousel({
        loop:false,
        margin:75,
        responsiveClass:true,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:2,                             
            },
            580:{
                items:2,     
            },
            768:{
                items:6,
                margin:20,
            },
            1000:{
                items:6, 
                margin:20,
            },
            1200:{
                items:6,             
                
            }
        }
    });

    $(function() {
        var owl = $('.responsive-slider'),
            owlOptions = {
                loop: false,
                margin: 10,
                nav:true,
                dots:false,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            };
    
        if ( $(window).width() < 767 ) {
            var owlActive = owl.owlCarousel(owlOptions);
        } else {
            owl.addClass('off');
        }
    
        $(window).resize(function() {
            if ( $(window).width() < 767 ) {
                if ( $('.responsive-slider').hasClass('off') ) {
                    var owlActive = owl.owlCarousel(owlOptions);
                    owl.removeClass('off');
                }
            } else {
                if ( !$('.responsive-slider').hasClass('off') ) {
                    owl.addClass('off').trigger('destroy.owl.carousel');
                    owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
                }
            }
        });
    });
    
});

$('.play-btn').click(function (e) { 
    $(".video").trigger('play');
    $(this).hide();
});

$('[data-toggle="tooltip"]').tooltip();
