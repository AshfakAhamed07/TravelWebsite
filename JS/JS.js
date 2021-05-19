
   $(document).ready(function(){

        $(".owl-carousel").owlCarousel({
          autoplay:true,
          autoplayhoverpause:true,
          autoplaytimeout:100,
          items:3,
          nav:true,
          loop:true,
          responsive:{
            0:{
              items:1,
              dots:false,
            },

            485:{
              items:1,
              dots:false,
            },

            768:{
              items:2,
              dots:false,
            },

            1200:{
              items:3,
              dots:false,
            }

          }
        });
    })



