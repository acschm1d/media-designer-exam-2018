/**
 * Win load
 */
$(window).on('load',function(){
    // Slideshow Start Bühne
    // Delay, weil sonst Vorhang viel zu schnell offen)
    setTimeout(function(){
        $('body').addClass('slide-toggled');
    }, 600);
});

/**
 * Doc ready
 */
$(document).ready(function(){

    var slideStartImg = $('.slide-start-images');
    var slideStartNav = $('.slide-start-nav');
    var slideStartResp = $('.slide-start-responsive');
    var slideTileshow = $('.tileshow-images');

    // Slideshow Start Bilder
    slideStartImg.slick({
        fade: true,
        prevArrow: $('.slide-start-prev'),
        nextArrow: $('.slide-start-next'),
        autoplay: true,
        autoplaySpeed: 4500,
        infinite: true,
        asNavFor: slideStartNav
    });

    slideStartNav.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: slideStartImg,
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false,
              asNavFor: slideStartImg
          }
        }
      ]
    });


    // Slideshow Start Bühne
    slideStartImg.on('beforeChange', function(event, slick, direction){
        $('body').removeClass('slide-toggled').addClass('slide-opacity');

        setTimeout(function () {
            $('body').addClass('slide-toggled').removeClass('slide-opacity');
        }, 600);
    });

    // Slideshow Start (Responsive only)
    slideStartResp.slick({
        fade: true,
        prevArrow: $('.slide-start-prev'),
        nextArrow: $('.slide-start-next'),
        infinite: true,
        asNavFor: $('.slide-start-images, .slide-start-nav'),
        adaptiveHeight: true
    });

    // Slideshow Festival
    slideTileshow.slick({
        infinite: true,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 920,
              settings: {
                  slidesToShow: 2
              }
            },
            {
              breakpoint: 550,
              settings: {
                  slidesToShow: 1
              }
            }
          ]
    });

    // Menu toggle
    $('#menu-button').on('click', function(){
        $('body').toggleClass('menu-open');
    });
    $('#responsive-overlay').on('click', function(){
        $('body').removeClass('menu-open');
    });

});