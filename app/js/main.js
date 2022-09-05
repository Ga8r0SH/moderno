$(function () {





  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "13px",
    readOnly: true
  });
  $(".slider__item").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots:true,
    arrows:false,
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });
 $('.icon-th-list').on('click',function(){
  $('.products__item').addClass('list');
  $('.icon-th-list').addClass('active');
  $('.icon-th-large').removeClass('active');
 });
 $('.icon-th-large').on('click',function(){
  $('.products__item').removeClass('list');
  $('.icon-th-large').addClass('active');
  $('.icon-th-list').removeClass('active');
 });

  
  var mixer = mixitup('.products__inner-box');
});