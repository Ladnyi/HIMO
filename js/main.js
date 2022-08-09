'use strict';

$(function(){

$('.bike-slider, .down-slider').slick({
  arrows: false,
  dots: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000
});

$(".menu, .bike__column").on("click","a", function (event) {
   event.preventDefault();
   var id  = $(this).attr('href'),
   top = $(id).offset().top;
   $('body,html').animate({scrollTop: top}, 1500);
        });
});

const selectColorButtons = document.querySelectorAll('.form__select-color-btn');
const bikeColor = document.querySelectorAll('.form__bike-color');

const hideAll = () => {
  for (let i = 0; i < selectColorButtons.length; i++) {
    bikeColor[i].classList.remove('active');
  }
}

for (let i = 0; i < selectColorButtons.length; i++) {
  selectColorButtons[i].addEventListener('click', () => {
    hideAll();
    bikeColor[i].classList.add('active');
  })
}



