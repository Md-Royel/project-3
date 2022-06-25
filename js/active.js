$(document).ready(function(){
    
$('#mobile-menu-active').meanmenu({
    meanScreenWidth:991,
    meanMenuContainer:'.mobible-menu',
});    
    
$('.slider-active').slick({
  infinite: false,
  slidesToShow: 1,
  arrows: false,
  autoplay: false,
  dots: false,
  slidesToScroll:1
})
    
$('.testimonial-active').slick({
  infinite: true,
  slidesToShow:1,
  arrows: false,
  autoplay: true,
  dots: true,
  slidesToScroll:1
})
    
$('.brand-active').slick({
  infinite: true,
  slidesToShow:5,
  arrows: false,
  autoplay: true,
  dots: false,
  slidesToScroll:1
})
    

    
    $('.counter').counterUp({
    delay:10,
    time: 1000
});
})