
// slider
$('.owl-carousel').owlCarousel({
  items:1,
  margin:10,
  autoHeight:true,
  loop:true
});

var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

// navigator
$("a").click(function(){   
  var sectionId= $(this).attr("href");
  var positionOfSection = $(sectionId);
  //  $("html , body").animate({scrollY:positionOfSection},1000);
})


// Animate Slide 3
$('.slide3').click(function () { 
    $('.slide3 .S4I1').addClass("animateS4I",
    $('.slide3').click(function () { 
        $('.slide3 .S4I2').addClass("animateS4I", 
          $('.slide3').click(function (e) { 
            $('.slide3 .S4I3').addClass("animateS4I");
          })
        );
      })
    );
});
$('.Ref_S3').click(function () { 
   $('.imgS4').addClass('animateimgs4')
});
$('.imgS4').click(function () { 
  $('.imgS4').removeClass('animateimgs4')
});
// Animate Slide 3

// Animate Slide 4
$('.slide4 .imgs').click(function () { 
   $('.S5_I4').addClass("animateS5_I4",
   $('.slide4 .imgs').click(function () { 
      $('.S5_I5').addClass('animateS5_I5',
        $('.slide4 .imgs').click(function () {  
          $('.S5_I6').addClass('animateS5_I6').next().addClass('animateS5_I7')
        })
      )
   })
   )
});
// Animate Slide 4

// Animate Slide 5
$('.slide5').click(function () {  
  $('.S5_I1').addClass("animateS6I1",
  $('.slide5').click(function () {  
    $('.S5_I2').addClass('animateS6I1')
  })
  )
});
// Animate Slide 5

// animate slide 6
 $('.slide6').click(function () { 
   $('.S6_I2').addClass('animate__fadeInRight' , 'appear',
    $('.slide6').click(function (e) { 
      $('.S6_I3').addClass('animate__fadeInRight' , 'appear',
       $('.slide6').click(function (e) { 
        $('.S6_I4').addClass('animate__fadeInRight' , 'appear')
       })
      )
    })
   )
 });
// animate slide 6

$('.Bar_Burger').click(function () { 
  $('.outer-navigate').addClass('animateImgList')
});

$('.outer-navigate .icon').click(function () { 
  $('.outer-navigate').removeClass('animateImgList')
});



