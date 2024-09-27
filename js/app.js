var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 40,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, 
  
});


var swiper = new Swiper(".slider-content2", {

  slidesPerView: 3,
  spaceBetween: 40,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },


});