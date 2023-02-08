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
            600:{
                items:2,
            },
            1000:{
                items:4, 
            },
            1200:{
                items:6,             
                
            }
        }
    });
    
});

$('.play-btn').click(function (e) { 
    $(".video").trigger('play');
    $(this).hide();
});

$('[data-toggle="tooltip"]').tooltip();
